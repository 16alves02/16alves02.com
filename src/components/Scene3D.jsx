import { useEffect, useRef, useState } from 'react';

const TAU = Math.PI * 2;

function spherePoints(count) {
  const points = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < count; index += 1) {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = goldenAngle * index;
    points.push({
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
    });
  }

  return points;
}

function sphereEdges(points) {
  const edges = [];
  const threshold = 0.36;

  for (let first = 0; first < points.length; first += 1) {
    for (let second = first + 1; second < points.length; second += 1) {
      const dx = points[first].x - points[second].x;
      const dy = points[first].y - points[second].y;
      const dz = points[first].z - points[second].z;
      const distance = dx * dx + dy * dy + dz * dz;

      if (distance < threshold * threshold) edges.push([first, second]);
    }
  }

  return edges;
}

function rotatePoint(point, rotation) {
  const cosY = Math.cos(rotation.y);
  const sinY = Math.sin(rotation.y);
  const cosX = Math.cos(rotation.x);
  const sinX = Math.sin(rotation.x);
  const cosZ = Math.cos(rotation.z);
  const sinZ = Math.sin(rotation.z);

  const x1 = point.x * cosY - point.z * sinY;
  const z1 = point.x * sinY + point.z * cosY;
  const y1 = point.y * cosX - z1 * sinX;
  const z2 = point.y * sinX + z1 * cosX;

  return {
    x: x1 * cosZ - y1 * sinZ,
    y: x1 * sinZ + y1 * cosZ,
    z: z2,
  };
}

function project(point, center, scale) {
  const depth = 4.4 / (4.4 - point.z * 0.72);
  return {
    x: center.x + point.x * scale * depth,
    y: center.y + point.y * scale * depth,
    z: point.z,
  };
}

function drawSegment(context, first, second, color, opacity, width = 1) {
  context.beginPath();
  context.moveTo(first.x, first.y);
  context.lineTo(second.x, second.y);
  context.strokeStyle = color;
  context.globalAlpha = opacity;
  context.lineWidth = width;
  context.stroke();
}

function drawCube(context, projectPoint, color, opacity, size = 1.35) {
  const points = [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
  ].map(([x, y, z]) => projectPoint({ x: x * size, y: y * size, z: z * size }));

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];

  context.save();
  context.shadowColor = color;
  context.shadowBlur = 12;
  edges.forEach(([first, second], index) => {
    drawSegment(context, points[first], points[second], color, opacity * (index < 8 ? 0.9 : 0.55), 1.05);
  });
  context.restore();
  context.globalAlpha = 1;
}

function drawOrbit(context, projectPoint, rotation, color, opacity, radius = 1.8, tilt = 0.7) {
  const steps = 100;
  const points = [];

  for (let index = 0; index <= steps; index += 1) {
    const angle = (index / steps) * TAU;
    const raw = {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius * tilt,
      z: Math.sin(angle) * radius * 0.26,
    };
    points.push(projectPoint(rotatePoint(raw, rotation)));
  }

  context.save();
  context.shadowColor = color;
  context.shadowBlur = 15;
  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) context.moveTo(point.x, point.y);
    else context.lineTo(point.x, point.y);
  });
  context.strokeStyle = color;
  context.globalAlpha = opacity;
  context.lineWidth = 1.25;
  context.stroke();
  context.restore();
  context.globalAlpha = 1;

  const node = points[Math.floor(steps * 0.17)];
  context.beginPath();
  context.arc(node.x, node.y, 3.2, 0, TAU);
  context.fillStyle = color;
  context.shadowColor = color;
  context.shadowBlur = 16;
  context.fill();
  context.shadowBlur = 0;
}

function drawFloor(context, width, height, projectPoint, palette) {
  context.save();
  context.globalAlpha = 0.28;
  context.lineWidth = 0.7;

  for (let line = -8; line <= 8; line += 1) {
    const x = line * 0.32;
    const near = projectPoint({ x, y: 1.35, z: 1.8 });
    const far = projectPoint({ x, y: 1.35, z: -3.8 });
    drawSegment(context, near, far, palette.grid, 0.7, 0.7);
  }

  for (let line = 0; line < 13; line += 1) {
    const z = 1.8 - line * 0.44;
    const left = projectPoint({ x: -3.3, y: 1.35, z });
    const right = projectPoint({ x: 3.3, y: 1.35, z });
    drawSegment(context, left, right, palette.grid, 0.7, 0.7);
  }

  context.restore();
  context.globalAlpha = 1;
}

function renderScene(context, width, height, time, pointer, palette) {
  context.clearRect(0, 0, width, height);

  const center = {
    x: width * 0.53 + pointer.x * 12,
    y: height * 0.48 + pointer.y * 10,
  };
  const scale = Math.min(width, height) * 0.28;
  const rotation = {
    x: 0.2 + pointer.y * 0.22 + Math.sin(time * 0.45) * 0.06,
    y: time * 0.23 + pointer.x * 0.38,
    z: Math.sin(time * 0.25) * 0.08,
  };
  const projectPoint = (point) => project(rotatePoint(point, rotation), center, scale);

  drawFloor(context, width, height, projectPoint, palette);

  const halo = context.createRadialGradient(center.x, center.y, scale * 0.12, center.x, center.y, scale * 2.3);
  halo.addColorStop(0, palette.halo);
  halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
  context.fillStyle = halo;
  context.fillRect(0, 0, width, height);

  drawOrbit(context, projectPoint, { x: 1.12, y: rotation.y * 0.56, z: 0.34 }, palette.orbit, 0.78, 1.92, 0.72);
  drawOrbit(context, projectPoint, { x: 0.22, y: rotation.y * -0.46, z: 1.08 }, palette.secondary, 0.54, 2.2, 0.48);
  drawCube(context, projectPoint, palette.cube, 0.52, 1.28);

  const points = spherePoints(190).map((point) => projectPoint(rotatePoint(point, {
    x: rotation.x * 0.45,
    y: rotation.y * -0.72,
    z: rotation.z,
  })));
  const edges = sphereEdges(spherePoints(190));

  context.save();
  context.shadowColor = palette.mesh;
  context.shadowBlur = 10;
  edges.forEach(([first, second]) => {
    const depth = (points[first].z + points[second].z) / 2;
    const opacity = 0.12 + ((depth + 1) / 2) * 0.48;
    drawSegment(context, points[first], points[second], palette.mesh, opacity, 0.85);
  });
  context.restore();

  points.forEach((point, index) => {
    const opacity = 0.24 + ((point.z + 1) / 2) * 0.65;
    context.beginPath();
    context.arc(point.x, point.y, point.z > 0.45 ? 1.9 : 1.15, 0, TAU);
    context.fillStyle = index % 13 === 0 ? palette.secondary : palette.mesh;
    context.globalAlpha = opacity;
    context.fill();
  });
  context.globalAlpha = 1;

  const core = context.createRadialGradient(
    center.x - scale * 0.2, center.y - scale * 0.28, 0,
    center.x, center.y, scale * 0.9
  );
  core.addColorStop(0, palette.core);
  core.addColorStop(1, 'rgba(0, 0, 0, 0)');
  context.fillStyle = core;
  context.beginPath();
  context.arc(center.x, center.y, scale * 0.85, 0, TAU);
  context.fill();
}

export default function Scene3D({ theme = 'dark' }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return undefined;

    let context;
    try {
      context = canvas.getContext('2d', { alpha: true });
    } catch {
      context = null;
    }
    if (!context) return undefined;

    const palette = theme === 'dark'
      ? {
          grid: 'rgba(122, 164, 194, 0.28)',
          mesh: '#a5c8df',
          orbit: '#ff9b83',
          secondary: '#85ded2',
          cube: '#78b9d4',
          halo: 'rgba(78, 143, 181, 0.16)',
          core: 'rgba(117, 201, 211, 0.11)',
        }
      : {
          grid: 'rgba(38, 71, 93, 0.23)',
          mesh: '#44657c',
          orbit: '#99462f',
          secondary: '#237c78',
          cube: '#527f96',
          halo: 'rgba(77, 145, 171, 0.13)',
          core: 'rgba(65, 154, 153, 0.10)',
        };

    const points = spherePoints(190);
    const edges = sphereEdges(points);
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pointer = { x: 0, y: 0 };
    let lastTime = 0;

    const resize = () => {
      const bounds = wrapper.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(reducedMotion ? 0 : lastTime);
    };

    const draw = (timestamp) => {
      lastTime = timestamp;
      const elapsed = reducedMotion ? 0 : timestamp * 0.001;
      renderScene(context, width, height, elapsed, pointer, palette, points, edges);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const animate = (timestamp) => {
      draw(timestamp);
      if (visible && !reducedMotion) frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (frame || !visible || reducedMotion) return;
      frame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event) => {
      const bounds = wrapper.getBoundingClientRect();
      const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
      if (!inside) return;
      pointer = {
        x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      };
      if (reducedMotion) draw(0);
    };

    const onMotionChange = (event) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        stop();
        draw(0);
      } else {
        start();
      }
    };

    const observer = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible) start();
          else stop();
        }, { threshold: 0.01 })
      : null;

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(resize)
      : null;

    observer?.observe(wrapper);
    resizeObserver?.observe(wrapper);
    if (!resizeObserver) window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionPreference.addEventListener?.('change', onMotionChange);

    resize();
    setReady(true);
    start();

    return () => {
      stop();
      observer?.disconnect();
      resizeObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      motionPreference.removeEventListener?.('change', onMotionChange);
    };
  }, [theme]);

  return (
    <div ref={wrapperRef} className={ready ? 'scene3d is-ready' : 'scene3d'}>
      <div className="scene3d-poster" aria-hidden="true">
        <span className="scene3d-poster-cube" />
        <span className="scene3d-poster-orbit scene3d-poster-orbit-one" />
        <span className="scene3d-poster-orbit scene3d-poster-orbit-two" />
      </div>
      <canvas ref={canvasRef} className="scene3d-canvas" aria-hidden="true" />
    </div>
  );
}
