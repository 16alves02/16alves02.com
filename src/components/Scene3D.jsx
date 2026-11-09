import { useEffect, useRef, useState } from 'react';

const TAU = Math.PI * 2;

const vertexShader = `
  attribute vec3 aPosition;
  uniform vec2 uResolution;
  uniform vec3 uRotation;
  uniform float uScale;
  uniform float uPointSize;
  varying float vDepth;
  void main() {
    float cy = cos(uRotation.y), sy = sin(uRotation.y);
    float cx = cos(uRotation.x), sx = sin(uRotation.x);
    float cz = cos(uRotation.z), sz = sin(uRotation.z);
    vec3 p = aPosition;
    p = vec3(p.x * cy - p.z * sy, p.y, p.x * sy + p.z * cy);
    p = vec3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);
    p = vec3(p.x * cz - p.y * sz, p.x * sz + p.y * cz, p.z);
    float perspective = 3.8 / (3.8 - p.z * 0.34);
    float aspect = uResolution.x / max(1.0, uResolution.y);
    gl_Position = vec4(p.x * uScale * perspective / aspect, p.y * uScale * perspective, p.z * 0.1, 1.0);
    gl_PointSize = uPointSize * (0.75 + perspective * 0.3);
    vDepth = (p.z + 1.8) / 3.6;
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vDepth;
  void main() {
    gl_FragColor = vec4(uColor, uOpacity * (0.28 + clamp(vDepth, 0.0, 1.0) * 0.72));
  }
`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl) {
  const vertex = compile(gl, gl.VERTEX_SHADER, vertexShader);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
  if (!vertex || !fragment) return null;
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  return gl.getProgramParameter(program, gl.LINK_STATUS) ? program : null;
}

function pushLine(target, a, b) {
  target.push(...a, ...b);
}

function makeSphere() {
  const points = [];
  const lines = [];
  const count = 220;
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    points.push([Math.cos(golden * i) * radius, y, Math.sin(golden * i) * radius]);
  }
  for (let i = 0; i < count; i += 1) {
    for (let j = i + 1; j < count; j += 1) {
      const a = points[i], b = points[j];
      const dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2];
      if (dx * dx + dy * dy + dz * dz < 0.115) pushLine(lines, a, b);
    }
  }
  return { lines: new Float32Array(lines), points: new Float32Array(points.flat()) };
}

function makeOrbit(radius, tilt, phase) {
  const result = [];
  const segments = 180;
  for (let i = 0; i < segments; i += 1) {
    const a = (i / segments) * TAU;
    const b = ((i + 1) / segments) * TAU;
    const point = (angle) => [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * tilt,
      Math.sin(angle + phase) * radius * 0.18,
    ];
    pushLine(result, point(a), point(b));
  }
  return new Float32Array(result);
}

function makeCube(size = 1.35) {
  const p = [
    [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
    [-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1],
  ].map(([x,y,z]) => [x*size,y*size,z*size]);
  const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
  const out = [];
  edges.forEach(([a,b]) => pushLine(out,p[a],p[b]));
  return new Float32Array(out);
}

function makeFloor() {
  const out = [];
  for (let i = -8; i <= 8; i += 1) {
    const x = i * 0.32;
    pushLine(out,[x,-1.35,1.8],[x,-1.35,-3.8]);
  }
  for (let i = 0; i < 13; i += 1) {
    const z = 1.8 - i * 0.44;
    pushLine(out,[-3.3,-1.35,z],[3.3,-1.35,z]);
  }
  return new Float32Array(out);
}

export default function Scene3D({ theme = 'dark' }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return undefined;

    let gl;
    try {
      gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' })
        || canvas.getContext('experimental-webgl', { alpha: true, antialias: true });
    } catch { gl = null; }
    if (!gl) { setReady(false); return undefined; }

    const program = createProgram(gl);
    if (!program) { setReady(false); return undefined; }

    const locations = {
      position: gl.getAttribLocation(program, 'aPosition'),
      resolution: gl.getUniformLocation(program, 'uResolution'),
      rotation: gl.getUniformLocation(program, 'uRotation'),
      scale: gl.getUniformLocation(program, 'uScale'),
      pointSize: gl.getUniformLocation(program, 'uPointSize'),
      color: gl.getUniformLocation(program, 'uColor'),
      opacity: gl.getUniformLocation(program, 'uOpacity'),
    };
    const palette = theme === 'dark'
      ? { mesh: [0.65,0.79,0.88], orbit: [1.0,0.55,0.43], secondary: [0.52,0.87,0.82], cube: [0.47,0.72,0.83], grid: [0.28,0.42,0.52] }
      : { mesh: [0.27,0.40,0.49], orbit: [0.60,0.27,0.18], secondary: [0.14,0.49,0.47], cube: [0.32,0.50,0.59], grid: [0.25,0.39,0.48] };

    const sphere = makeSphere();
    const geometries = [
      { data: makeFloor(), mode: gl.LINES, color: palette.grid, opacity: 0.24, scale: 0.31 },
      { data: makeOrbit(1.92,0.72,0.4), mode: gl.LINES, color: palette.orbit, opacity: 0.82, scale: 0.31, rotation: [1.12,0,0.34] },
      { data: makeOrbit(2.2,0.48,1.1), mode: gl.LINES, color: palette.secondary, opacity: 0.58, scale: 0.31, rotation: [0.22,0,1.08] },
      { data: makeCube(), mode: gl.LINES, color: palette.cube, opacity: 0.5, scale: 0.31 },
      { data: sphere.lines, mode: gl.LINES, color: palette.mesh, opacity: 0.66, scale: 0.31, sphere: true },
      { data: sphere.points, mode: gl.POINTS, color: palette.secondary, opacity: 0.86, scale: 0.31, sphere: true, pointSize: 3.0 },
    ];

    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.clearColor(0,0,0,0);
    const buffers = geometries.map((geometry) => {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, geometry.data, gl.STATIC_DRAW);
      return buffer;
    });

    let width = 1, height = 1, frame = 0, visible = true, lost = false;
    let reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pointer = { x: 0, y: 0 };
    let lastTimestamp = 0;

    const render = (timestamp) => {
      if (lost) return;
      lastTimestamp = timestamp;
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(locations.resolution,width,height);
      geometries.forEach((geometry,index) => {
        gl.bindBuffer(gl.ARRAY_BUFFER,buffers[index]);
        gl.enableVertexAttribArray(locations.position);
        gl.vertexAttribPointer(locations.position,3,gl.FLOAT,false,0,0);
        const rotation = geometry.rotation || (geometry.sphere
          ? [0.2 + pointer.y * 0.18 + Math.sin(timestamp*0.00045)*0.06, timestamp*0.00023 + pointer.x*0.32, Math.sin(timestamp*0.00025)*0.08]
          : [0.2 + pointer.y*0.12, timestamp*0.00012, 0]);
        gl.uniform3fv(locations.rotation,rotation);
        gl.uniform1f(locations.scale,geometry.scale);
        gl.uniform1f(locations.pointSize,geometry.pointSize || 1.0);
        gl.uniform3fv(locations.color,geometry.color);
        gl.uniform1f(locations.opacity,geometry.opacity);
        gl.drawArrays(geometry.mode,0,geometry.data.length/3);
      });
    };

    const stop = () => { if(frame) cancelAnimationFrame(frame); frame=0; };
    const animate = (time) => { render(time); if(visible && !reduced && !lost) frame=requestAnimationFrame(animate); };
    const start = () => { if(!frame && visible && !reduced && !lost) frame=requestAnimationFrame(animate); };
    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = Math.max(1,rect.width); height = Math.max(1,rect.height);
      const ratio = Math.min(window.devicePixelRatio || 1,1.35);
      canvas.width = Math.round(width*ratio); canvas.height = Math.round(height*ratio);
      canvas.style.width = width+'px'; canvas.style.height = height+'px';
      render(reduced ? 0 : lastTimestamp);
    };
    const onPointer = (event) => {
      const rect = wrapper.getBoundingClientRect();
      if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      pointer = { x: ((event.clientX-rect.left)/rect.width-0.5)*2, y: ((event.clientY-rect.top)/rect.height-0.5)*2 };
      if(reduced) render(0);
    };
    const onMotion = (event) => { reduced=event.matches; if(reduced){stop();render(0);} else start(); };
    const onContextLost = (event) => { event.preventDefault(); lost=true; stop(); setReady(false); };
    const onContextRestored = () => { lost=true; setReady(false); };
    const observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(([entry]) => {
      visible=entry.isIntersecting; if(visible) start(); else stop();
    },{threshold:0.01}) : null;
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    canvas.addEventListener('webglcontextlost',onContextLost,false);
    canvas.addEventListener('webglcontextrestored',onContextRestored,false);
    observer?.observe(wrapper); resizeObserver?.observe(wrapper);
    if(!resizeObserver) window.addEventListener('resize',resize);
    window.addEventListener('pointermove',onPointer,{passive:true});
    motion.addEventListener?.('change',onMotion);
    resize(); setReady(true); start();

    return () => {
      stop(); observer?.disconnect(); resizeObserver?.disconnect();
      if(!resizeObserver) window.removeEventListener('resize',resize);
      window.removeEventListener('pointermove',onPointer);
      motion.removeEventListener?.('change',onMotion);
      canvas.removeEventListener('webglcontextlost',onContextLost);
      canvas.removeEventListener('webglcontextrestored',onContextRestored);
      buffers.forEach((buffer)=>gl.deleteBuffer(buffer));
      gl.deleteProgram(program);
    };
  },[theme]);

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
