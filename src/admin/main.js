import { projects as seedProjects } from '../data/projects.js';

const ADMIN_EMAIL = 'alv16studios@gmail.com';
const root = document.querySelector('#admin-root');
let config = null;
let session = null;
let activeSection = 'project';
let selectedId = null;
let records = [];
let messages = [];

const TYPES = [
  ['project', 'Projetos'], ['home_copy', 'Página inicial'], ['profile', 'Perfil'],
  ['experience', 'Experiência'], ['skill_group', 'Competências'], ['education', 'Formação'],
  ['engineering_note', 'Notas técnicas'],
];
const slugify = (value = '') => String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

async function loadConfig() {
  const response = await fetch('/api/config');
  if (!response.ok) throw new Error('Não foi possível carregar a configuração do painel.');
  config = await response.json();
  if (!config.supabaseUrl || !config.supabasePublishableKey) throw new Error('O Supabase ainda não está configurado no ambiente Cloudflare.');
}
function authHeaders(token = session?.access_token) {
  const headers = { apikey: config.supabasePublishableKey };
  if (token) headers.Authorization = 'Bearer ' + token;
  return headers;
}
async function authRequest(path, options = {}) {
  const response = await fetch(config.supabaseUrl + '/auth/v1' + path, {
    ...options,
    headers: { apikey: config.supabasePublishableKey, 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.msg || data.message || data.error_description || 'Falha de autenticação.');
  return data;
}
async function refreshSession() {
  if (!session?.refresh_token) throw new Error('Sessão expirada. Inicia sessão novamente.');
  session = await authRequest('/token?grant_type=refresh_token', { method: 'POST', body: JSON.stringify({ refresh_token: session.refresh_token }) });
  sessionStorage.setItem('portfolio-admin-session', JSON.stringify(session));
}
async function ensureSession() {
  if (session?.expires_at && session.expires_at < Math.floor(Date.now() / 1000) + 60) await refreshSession();
  const user = await authRequest('/user', { headers: { Authorization: 'Bearer ' + session.access_token } });
  if (user.email?.toLowerCase() !== ADMIN_EMAIL) {
    session = null;
    sessionStorage.removeItem('portfolio-admin-session');
    throw new Error('Esta conta não tem acesso ao painel.');
  }
  return user;
}
async function api(path, options = {}) {
  if (session?.expires_at && session.expires_at < Math.floor(Date.now() / 1000) + 60) await refreshSession();
  const response = await fetch(config.supabaseUrl + '/rest/v1/' + path, {
    ...options,
    headers: {
      ...authHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  if (!response.ok) {
    let error = text;
    try { const parsed = JSON.parse(text); error = parsed.message || parsed.details || text; } catch {}
    throw new Error(error || 'Erro ao comunicar com a base de dados.');
  }
  return text ? JSON.parse(text) : [];
}
async function signOut() {
  try {
    if (session?.access_token) await authRequest('/logout', { method: 'POST', headers: { Authorization: 'Bearer ' + session.access_token } });
  } catch {}
  session = null;
  sessionStorage.removeItem('portfolio-admin-session');
  renderLogin();
}
function renderLogin(error = '') {
  root.innerHTML = '<main class="login-shell"><div class="login-card"><a class="admin-brand" href="/">16alves02<span>.</span></a><p class="eyebrow">PRIVATE CONTENT MANAGER</p><h1>Entrar no painel</h1><p class="muted">Acesso restrito à conta administradora.</p><form id="login-form"><label>Email<input name="email" type="email" value="' + ADMIN_EMAIL + '" readonly /></label><label>Palavra-passe<input name="password" type="password" autocomplete="current-password" required /></label><button type="submit">Iniciar sessão <span>↗</span></button><p class="form-error" role="alert">' + escapeHtml(error) + '</p></form><a href="/" class="back-site">Voltar ao portefólio</a></div></main>';
  root.querySelector('#login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    button.disabled = true;
    button.textContent = 'A autenticar...';
    try {
      const password = new FormData(event.currentTarget).get('password');
      session = await authRequest('/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email: ADMIN_EMAIL, password }) });
      await ensureSession();
      sessionStorage.setItem('portfolio-admin-session', JSON.stringify(session));
      await renderDashboard();
    } catch (cause) {
      session = null;
      renderLogin(cause.message);
    }
  });
}
function renderDashboardShell() {
  root.innerHTML = '<div class="admin-layout"><aside class="admin-sidebar"><a class="admin-brand" href="/">16alves02<span>.</span></a><p class="eyebrow">CONTENT STUDIO</p><nav id="admin-nav"><button data-section="project" class="active">Projetos</button><button data-section="home_copy">Página inicial</button><button data-section="profile">Perfil</button><button data-section="experience">Experiência</button><button data-section="skill_group">Competências</button><button data-section="education">Formação</button><button data-section="engineering_note">Notas técnicas</button><button data-section="messages">Mensagens <span id="message-count"></span></button></nav><div class="sidebar-bottom"><span>ALV16 STUDIOS</span><button id="logout">Terminar sessão</button></div></aside><main class="admin-main"><header class="admin-topbar"><div><p class="eyebrow">16ALVES02 / ADMIN</p><h1 id="section-title">Projetos</h1></div><a href="/" target="_blank">Ver site ↗</a></header><div id="dashboard-content"></div></main></div>';
  root.querySelector('#logout').addEventListener('click', signOut);
  root.querySelectorAll('[data-section]').forEach((button) => button.addEventListener('click', () => {
    activeSection = button.dataset.section;
    root.querySelectorAll('[data-section]').forEach((node) => node.classList.toggle('active', node === button));
    selectedId = null;
    renderSection();
  }));
}
async function renderDashboard() {
  await ensureSession();
  renderDashboardShell();
  await Promise.all([loadRecords(), loadMessages()]);
  renderSection();
}
async function loadRecords() {
  records = await api('portfolio_content?select=*&order=sort_order.asc,updated_at.desc');
}
async function loadMessages() {
  messages = await api('contact_messages?select=id,name,email,subject,message,status,created_at,read_at&order=created_at.desc&limit=100');
  const unread = messages.filter((message) => message.status === 'new').length;
  const count = root.querySelector('#message-count');
  if (count) count.textContent = unread ? String(unread) : '';
}
function renderSection() {
  const title = TYPES.find(([type]) => type === activeSection)?.[1] || 'Mensagens';
  root.querySelector('#section-title').textContent = title;
  const host = root.querySelector('#dashboard-content');
  if (activeSection === 'messages') {
    const messageCards = messages.map((item) => '<article class="message-card"><div class="message-meta"><span class="status status-' + escapeHtml(item.status) + '">' + escapeHtml(item.status) + '</span><time>' + new Date(item.created_at).toLocaleString('pt-PT') + '</time></div><h2>' + escapeHtml(item.subject) + '</h2><p>' + escapeHtml(item.message) + '</p><div class="message-sender"><b>' + escapeHtml(item.name) + '</b><a href="mailto:' + encodeURIComponent(item.email) + '">' + escapeHtml(item.email) + '</a></div><div class="message-actions"><a href="mailto:' + encodeURIComponent(item.email) + '?subject=' + encodeURIComponent('Re: ' + item.subject) + '">Responder por email ↗</a><button data-read="' + item.id + '" data-status="' + (item.status === 'new' ? 'read' : 'new') + '">' + (item.status === 'new' ? 'Marcar como lida' : 'Marcar como nova') + '</button><button data-archive="' + item.id + '">Arquivar</button><button data-delete-message="' + item.id + '">Eliminar</button></div></article>').join('');
    host.innerHTML = '<div class="section-toolbar"><p>' + messages.length + ' mensagens recebidas</p><button id="refresh-section" class="button-secondary">Atualizar</button></div><div class="message-list">' + (messageCards || '<p class="empty-state">Ainda não existem mensagens.</p>') + '</div>';
    host.querySelector('#refresh-section').addEventListener('click', async () => { await loadMessages(); renderSection(); });
    host.querySelectorAll('[data-read]').forEach((button) => button.addEventListener('click', async () => {
      await api('contact_messages?id=eq.' + button.dataset.read, { method: 'PATCH', body: JSON.stringify({ status: button.dataset.status, read_at: new Date().toISOString() }) });
      await loadMessages(); renderSection();
    }));
    host.querySelectorAll('[data-archive]').forEach((button) => button.addEventListener('click', async () => {
      await api('contact_messages?id=eq.' + button.dataset.archive, { method: 'PATCH', body: JSON.stringify({ status: 'archived' }) });
      await loadMessages(); renderSection();
    }));
    host.querySelectorAll('[data-delete-message]').forEach((button) => button.addEventListener('click', async () => {
      if (!confirm('Eliminar permanentemente esta mensagem?')) return;
      try {
        await api('contact_messages?id=eq.' + button.dataset.deleteMessage, { method: 'DELETE' });
        await loadMessages();
        renderSection();
      } catch (error) { alert(error.message); }
    }));
    return;
  }

  const list = records.filter((record) => record.content_type === activeSection);
  host.innerHTML = '<div class="section-toolbar"><p>' + list.length + ' registos</p><div><button id="seed-projects" class="button-secondary">' + (activeSection === 'project' ? 'Importar projetos atuais' : '') + '</button><button id="new-record" class="button-primary">Adicionar conteúdo +</button></div></div><div class="content-layout"><div class="record-list">' + list.map((record) => '<button class="record-item ' + (record.id === selectedId ? 'selected' : '') + '" data-id="' + record.id + '"><span>' + escapeHtml(record.slug) + '</span><small>' + escapeHtml(record.locale) + ' · ' + (record.published ? 'Publicado' : 'Rascunho') + '</small></button>').join('') + '</div><form id="record-editor" class="record-editor"><div class="editor-empty">Seleciona um registo ou cria conteúdo novo.</div></form></div>';
  const seed = host.querySelector('#seed-projects');
  if (seed && activeSection === 'project') seed.addEventListener('click', seedCurrentProjects);
  else if (seed) seed.remove();
  host.querySelector('#new-record').addEventListener('click', () => editRecord(null));
  host.querySelectorAll('[data-id]').forEach((button) => button.addEventListener('click', () => {
    selectedId = button.dataset.id;
    const record = records.find((item) => item.id === selectedId);
    editRecord(record);
    host.querySelectorAll('[data-id]').forEach((node) => node.classList.toggle('selected', node === button));
  }));
  if (selectedId) editRecord(records.find((item) => item.id === selectedId && item.content_type === activeSection) || null);
}
async function seedCurrentProjects() {
  const button = root.querySelector('#seed-projects');
  if (!confirm('Importar a lista inicial de projetos para o CMS? Os projetos já existentes com o mesmo identificador serão atualizados.')) return;
  button.disabled = true;
  button.textContent = 'A importar...';
  try {
    for (const project of seedProjects) {
      const slug = project.slug || slugify(project.name);
      const current = records.find((record) => record.content_type === 'project' && record.slug === slug && record.locale === 'all');
      const payload = { content_type: 'project', slug, locale: 'all', content: { ...project, slug }, published: true, sort_order: Number(project.number) || 0, updated_at: new Date().toISOString() };
      if (current) await api('portfolio_content?id=eq.' + current.id, { method: 'PATCH', body: JSON.stringify(payload) });
      else await api('portfolio_content', { method: 'POST', body: JSON.stringify(payload) });
    }
    selectedId = null;
    await loadRecords();
    renderSection();
  } catch (error) {
    alert(error.message);
    button.disabled = false;
    button.textContent = 'Importar projetos atuais';
  }
}
function editRecord(record) {
  const form = root.querySelector('#record-editor');
  if (!form) return;
  const current = record || { id: '', content_type: activeSection, slug: '', locale: 'all', content: {}, published: true, sort_order: 0 };
  const currentImage = current.content?.image
    ? '<div class="media-preview-wrap"><img class="media-preview" src="' + escapeHtml(current.content.image) + '" alt="Imagem atual do projeto" /><span>Imagem atualmente associada</span></div>'
    : '';
  const uploadField = activeSection === 'project'
    ? '<div class="media-upload-block"><label>Imagem do projeto<input id="media-upload" type="file" accept="image/jpeg,image/png,image/webp,image/avif" /></label>' + currentImage + '<span id="media-feedback" role="status">JPEG, PNG, WebP ou AVIF. Máximo 10 MB. O URL será colocado no campo image.</span></div>'
    : '';

  form.innerHTML =
    '<div class="editor-head"><div><p class="eyebrow">CONTENT ENTRY</p><h2>' + (record ? 'Editar conteúdo' : 'Novo conteúdo') + '</h2></div>' +
    (record ? '<button type="button" id="delete-record" class="button-danger">Eliminar</button>' : '') +
    '</div>' +
    '<label>Identificador / slug<input name="slug" required maxlength="100" value="' + escapeHtml(current.slug) + '" /></label>' +
    '<div class="editor-fields"><label>Idioma<select name="locale">' +
    ['all','pt-PT','en','es','fr','it','de','ja'].map((locale) => '<option ' + (current.locale === locale ? 'selected' : '') + '>' + locale + '</option>').join('') +
    '</select></label><label>Ordem<input name="sort_order" type="number" value="' + (Number(current.sort_order) || 0) + '" /></label></div>' +
    '<label>Conteúdo (JSON)<textarea name="content" spellcheck="false" required>' + escapeHtml(JSON.stringify(current.content || {}, null, 2)) + '</textarea></label>' +
    uploadField +
    '<label class="publish-check"><input name="published" type="checkbox" ' + (current.published ? 'checked' : '') + ' /> Publicado no site</label>' +
    '<div class="editor-actions"><button class="button-primary" type="submit">Guardar alterações</button><span id="editor-feedback" role="status"></span></div>';

  const mediaInput = form.querySelector('#media-upload');
  mediaInput?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const feedback = form.querySelector('#media-feedback');
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowedTypes.includes(file.type) || file.size > 10 * 1024 * 1024) {
      feedback.textContent = 'Ficheiro inválido. Usa JPEG, PNG, WebP ou AVIF até 10 MB.';
      event.target.value = '';
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    feedback.textContent = 'A carregar imagem...';
    try {
      const slug = slugify(form.querySelector('[name="slug"]').value || 'project');
      const safeName = file.name.normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(-90) || 'image';
      const objectPath = 'projects/' + slug + '/' + Date.now() + '-' + safeName;
      const encodedPath = objectPath.split('/').map(encodeURIComponent).join('/');
      const baseUrl = config.supabaseUrl.replace(/\/+$/, '');
      const response = await fetch(baseUrl + '/storage/v1/object/portfolio-media/' + encodedPath, {
        method: 'POST',
        headers: {
          apikey: config.supabasePublishableKey,
          Authorization: 'Bearer ' + session.access_token,
          'Content-Type': file.type,
          'x-upsert': 'true',
        },
        body: file,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || result.error || 'Não foi possível carregar a imagem.');
      const publicUrl = baseUrl + '/storage/v1/object/public/portfolio-media/' + encodedPath;
      const contentField = form.querySelector('[name="content"]');
      const content = JSON.parse(contentField.value || '{}');
      content.image = publicUrl;
      contentField.value = JSON.stringify(content, null, 2);
      feedback.textContent = 'Imagem carregada. O URL foi atualizado no conteúdo. Guarda as alterações para publicar.';
      let preview = form.querySelector('.media-preview');
      if (!preview) {
        const wrapper = document.createElement('div');
        wrapper.className = 'media-preview-wrap';
        wrapper.innerHTML = '<img class="media-preview" alt="Pré-visualização da imagem carregada" /><span>Pré-visualização</span>';
        feedback.before(wrapper);
        preview = wrapper.querySelector('img');
      }
      preview.src = publicUrl;
    } catch (error) {
      feedback.textContent = error.message;
    } finally {
      button.disabled = false;
      event.target.value = '';
    }
  });

  form.onsubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let content;
    try { content = JSON.parse(String(data.get('content'))); }
    catch { form.querySelector('#editor-feedback').textContent = 'O JSON não é válido.'; return; }
    const payload = {
      content_type: activeSection,
      slug: String(data.get('slug')).trim(),
      locale: String(data.get('locale')),
      sort_order: Number(data.get('sort_order')) || 0,
      published: data.get('published') === 'on',
      content,
      updated_at: new Date().toISOString(),
    };
    if (!payload.slug) return;
    const feedback = form.querySelector('#editor-feedback');
    const saveButton = form.querySelector('button[type="submit"]');
    saveButton.disabled = true;
    feedback.textContent = 'A guardar...';
    try {
      if (record?.id) await api('portfolio_content?id=eq.' + record.id, { method: 'PATCH', body: JSON.stringify(payload) });
      else await api('portfolio_content', { method: 'POST', body: JSON.stringify(payload) });
      selectedId = null;
      await loadRecords();
      renderSection();
    } catch (error) {
      feedback.textContent = error.message;
      saveButton.disabled = false;
    }
  };
  form.querySelector('#delete-record')?.addEventListener('click', async () => {
    if (!confirm('Eliminar este registo? Esta ação não pode ser anulada.')) return;
    try {
      await api('portfolio_content?id=eq.' + record.id, { method: 'DELETE' });
      selectedId = null;
      await loadRecords();
      renderSection();
    } catch (error) { alert(error.message); }
  });
}

async function boot() {
  try {
    await loadConfig();
    const cached = sessionStorage.getItem('portfolio-admin-session');
    if (cached) {
      try {
        session = JSON.parse(cached);
        await renderDashboard();
        return;
      } catch {
        session = null;
        sessionStorage.removeItem('portfolio-admin-session');
      }
    }
    renderLogin();
  } catch (error) {
    renderLogin(error.message);
  }
}
boot();
