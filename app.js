
/* ============================================================
   PhoneStock — gestion boutique téléphones & accessoires
   ============================================================ */

const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/><path d="M12 7v5l4 2"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  printer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 000 4h4v-4z"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  scan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2"/><path d="M17 3h2a2 2 0 012 2v2"/><path d="M21 17v2a2 2 0 01-2 2h-2"/><path d="M7 21H5a2 2 0 01-2-2v-2"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="11" y1="8" x2="11" y2="16"/><line x1="14" y1="8" x2="14" y2="16"/><line x1="17" y1="8" x2="17" y2="16"/></svg>`,
};

/* ---------------- Utilities ---------------- */
function uid(prefix) { return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function money(n) { return (Number(n) || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
// Keeps only digits and a single decimal point — used for text inputs that
// stand in for numeric fields (type="number" blocks cursor/selection APIs
// in real browsers, which breaks in-place editing).
function sanitizeDecimal(raw) {
  let cleaned = String(raw).replace(/[^0-9.]/g, '');
  const firstDot = cleaned.indexOf('.');
  if (firstDot !== -1) cleaned = cleaned.slice(0, firstDot + 1) + cleaned.slice(firstDot + 1).replace(/\./g, '');
  return cleaned;
}
function fmtDate(d) { return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }); }
function fmtDateTime(d) { return new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }

function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// Simple non-cryptographic hash — sufficient to avoid storing plain-text
// passwords in this lightweight, client-side tool. Not bank-grade security.
function hashPassword(pw) {
  let h = 5381;
  const s = 'ps_salt_' + pw;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) + s.charCodeAt(i);
  return 'h' + (h >>> 0).toString(36);
}

const CATEGORIES = ['Smartphones', 'Accessoires', 'Pièces détachées'];
const PRIV_MODULES = ['products', 'clients', 'payments'];
const PRIV_ACTIONS = ['view', 'create', 'edit', 'delete'];
const DEFAULT_PRIVILEGES = {
  products: { view: true, create: false, edit: false, delete: false, viewCosts: false },
  clients: { view: true, create: false, edit: false, delete: false },
  payments: { view: true, create: false, edit: false, delete: false },
};
const ADMIN_PRIVILEGES = {
  products: { view: true, create: true, edit: true, delete: true, viewCosts: true },
  clients: { view: true, create: true, edit: true, delete: true },
  payments: { view: true, create: true, edit: true, delete: true },
  manageUsers: true,
};
function clonePrivileges(p) { return JSON.parse(JSON.stringify(p)); }
// Upgrades accounts created under the old flat privilege model
// (manageProducts/manageClients/managePayments/viewCosts) to the new
// per-module view/create/edit/delete structure.
function migrateUserPrivileges(u) {
  if (u.role === 'admin') { u.privileges = clonePrivileges(ADMIN_PRIVILEGES); return; }
  const p = u.privileges || {};
  if (p.products && typeof p.products === 'object') return; // already migrated
  u.privileges = {
    products: { view: true, create: !!p.manageProducts, edit: !!p.manageProducts, delete: !!p.manageProducts, viewCosts: !!p.viewCosts },
    clients: { view: true, create: !!p.manageClients, edit: !!p.manageClients, delete: !!p.manageClients },
    payments: { view: true, create: !!p.managePayments, edit: !!p.managePayments, delete: !!p.managePayments },
  };
}

const state = {
  view: 'dashboard',
  theme: 'dark',
  loaded: false,
  products: [],
  clients: [],
  sales: [],
  users: [],
  payments: [],
  oplog: [],
  suppliers: [],
  purchases: [],
  invoices: [],
  session: null, // {userId}
  authError: '',
  authView: null, // 'setup' | 'login' when not logged in
  posCart: [],
  posSearch: '',
  posPayment: 'Espèces',
  posClientId: '',
  posCategory: 'Tous',
  posPaidOverride: null,
  posDiscount: '',
  posClientCodeInput: '',
  productSearch: '',
  clientSearch: '',
  editingProduct: null,
  editingClient: null,
  editingUser: null,
  paymentClientId: null,
  editingPayment: null,
  ledgerClientId: null,
  showInvoicedBons: false,
  invoiceDraft: null,
  settingsTab: 'profil',
  historyTab: 'ventes',
  purchasesTab: 'registre',
  editingSupplier: null,
  editingPurchase: null,
  purchaseDraftLines: null,
  purchaseFilters: { supplierId: '', from: '', to: '' },
  historyFilters: { status: 'Tous', sellerId: '', clientId: '', from: '', to: '' },
  sidebarOpen: false,
};

function currentUser() {
  if (!state.session) return null;
  return state.users.find(u => u.id === state.session.userId) || null;
}
function isAdmin() {
  const u = currentUser();
  return !!u && u.role === 'admin';
}
// hasPriv('products','edit') — module + action level check.
function hasPriv(module, action) {
  const u = currentUser();
  if (!u) return false;
  if (u.role === 'admin') return true;
  return !!(u.privileges && u.privileges[module] && u.privileges[module][action]);
}

/* ---------------- Storage layer ---------------- */
async function safeGet(key, shared) {
  try { return await window.storage.get(key, shared); }
  catch (e) { return null; }
}
async function safeSet(key, value, shared) {
  try { return await window.storage.set(key, value, shared); }
  catch (e) { console.error(e); toast('Erreur de sauvegarde'); return null; }
}

async function saveProducts() { await safeSet('shop:products', JSON.stringify(state.products), true); }
async function saveClients() { await safeSet('shop:clients', JSON.stringify(state.clients), true); }
async function saveSales() { await safeSet('shop:sales', JSON.stringify(state.sales), true); }
async function saveUsers() { await safeSet('shop:users', JSON.stringify(state.users), true); }
async function savePayments() { await safeSet('shop:payments', JSON.stringify(state.payments), true); }
async function saveOplog() { await safeSet('shop:oplog', JSON.stringify(state.oplog), true); }
async function saveSuppliers() { await safeSet('shop:suppliers', JSON.stringify(state.suppliers), true); }
async function savePurchases() { await safeSet('shop:purchases', JSON.stringify(state.purchases), true); }
async function saveInvoices() { await safeSet('shop:invoices', JSON.stringify(state.invoices), true); }

async function logOperation(action, details) {
  const u = currentUser();
  state.oplog.push({
    id: uid('log'), date: new Date().toISOString(),
    userId: u ? u.id : null, username: u ? u.username : 'système',
    action, details: details || '',
  });
  if (state.oplog.length > 2000) state.oplog = state.oplog.slice(-2000);
  await saveOplog();
}

function seedProducts() {
  return [
    { id: uid('p'), name: 'iPhone 14', brand: 'Apple', model: '128 Go / Minuit', category: 'Smartphones', costPrice: 7200, sellPrice: 8500, stock: 6, sku: 'APL-IP14-128', lowStock: 2 },
    { id: uid('p'), name: 'Galaxy A54', brand: 'Samsung', model: '256 Go / Noir', category: 'Smartphones', costPrice: 3100, sellPrice: 3800, stock: 3, sku: 'SAM-A54-256', lowStock: 3 },
    { id: uid('p'), name: 'Coque silicone', brand: 'Générique', model: 'iPhone 14', category: 'Accessoires', costPrice: 25, sellPrice: 60, stock: 24, sku: 'ACC-COQ-IP14', lowStock: 5 },
    { id: uid('p'), name: 'Chargeur rapide 20W', brand: 'Anker', model: 'USB-C', category: 'Accessoires', costPrice: 60, sellPrice: 120, stock: 15, sku: 'ANK-CHG-20W', lowStock: 4 },
    { id: uid('p'), name: 'Écouteurs Bluetooth', brand: 'JBL', model: 'Tune 130NC', category: 'Accessoires', costPrice: 220, sellPrice: 349, stock: 1, sku: 'JBL-T130NC', lowStock: 3 },
    { id: uid('p'), name: 'Vitre protection', brand: 'Générique', model: 'Verre trempé universel', category: 'Pièces détachées', costPrice: 8, sellPrice: 30, stock: 40, sku: 'ACC-VITRE-U', lowStock: 10 },
  ];
}
function seedClients() {
  return [
    { id: uid('c'), clientCode: 'CL-0001', name: 'Youssef Amrani', phone: '0612345678', email: '', notes: '' },
    { id: uid('c'), clientCode: 'CL-0002', name: 'Salma Idrissi', phone: '0678912345', email: 'salma@example.com', notes: 'Cliente fidèle' },
  ];
}
function nextClientCode() {
  let max = 0;
  state.clients.forEach(c => { const m = /^CL-(\d+)$/.exec(c.clientCode || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  return 'CL-' + String(max + 1).padStart(4, '0');
}
function nextSupplierCode() {
  let max = 0;
  state.suppliers.forEach(s => { const m = /^FR-(\d+)$/.exec(s.code || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  return 'FR-' + String(max + 1).padStart(4, '0');
}
function nextSaleNumber() {
  let max = 0;
  state.sales.forEach(s => { if (s.number) max = Math.max(max, s.number); });
  return max + 1;
}
function nextInvoiceNumber() {
  let max = 0;
  state.invoices.forEach(i => { if (i.number) max = Math.max(max, i.number); });
  return max + 1;
}

/* ---------------- Derived helpers ---------------- */
function stockStatus(p) {
  if (p.stock <= 0) return 'danger';
  if (p.stock <= p.lowStock) return 'warn';
  return 'ok';
}
function lowStockProducts() { return state.products.filter(p => p.stock <= p.lowStock); }
function todaySales() {
  const today = new Date().toDateString();
  return state.sales.filter(s => new Date(s.date).toDateString() === today);
}
function revenueOf(sales) { return sales.reduce((sum, s) => sum + s.total, 0); }
function marginOf(sales) {
  let m = 0;
  sales.forEach(s => s.items.forEach(it => {
    const p = state.products.find(pp => pp.id === it.productId);
    const cost = p ? p.costPrice : 0;
    m += (it.price - cost) * it.qty;
  }));
  return m;
}
function bestSellers(limit = 5) {
  const map = {};
  state.sales.forEach(s => s.items.forEach(it => { map[it.productId] = (map[it.productId] || 0) + it.qty; }));
  return Object.entries(map)
    .map(([id, qty]) => ({ product: state.products.find(p => p.id === id), qty }))
    .filter(x => x.product).sort((a, b) => b.qty - a.qty).slice(0, limit);
}
function effectivePaidAmount(sale) {
  if (!sale.clientId) return sale.paidAmount;
  // Allocate the client's journal payments (recorded after checkout) across
  // their sales in chronological order, so a sale's status reflects any
  // later payment even though the payment itself isn't tied to one bon.
  const sales = clientSales(sale.clientId).slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  let extra = clientPayments(sale.clientId).reduce((s, p) => s + p.amount, 0);
  let result = sale.paidAmount;
  for (const s of sales) {
    const remaining = Math.max(0, s.total - s.paidAmount);
    const applied = Math.min(remaining, extra);
    extra -= applied;
    if (s.id === sale.id) { result = s.paidAmount + applied; break; }
  }
  return result;
}
function saleStatus(s) {
  const paid = effectivePaidAmount(s);
  if (paid >= s.total - 0.009) return 'Payé';
  if (paid > 0) return 'Partiel';
  return 'Impayé';
}
function clientSales(clientId) { return state.sales.filter(s => s.clientId === clientId); }
function clientPayments(clientId) { return state.payments.filter(p => p.clientId === clientId); }
function clientBalance(clientId) {
  const sales = clientSales(clientId);
  const totalDue = sales.reduce((s, x) => s + x.total, 0);
  const paidAtSale = sales.reduce((s, x) => s + (x.paidAmount || 0), 0);
  const extraPayments = clientPayments(clientId).reduce((s, x) => s + x.amount, 0);
  return totalDue - paidAtSale - extraPayments;
}

/* ---------------- Auth ---------------- */
async function setupAdmin(username, name, password) {
  const user = {
    id: uid('u'), username: username.trim(), name: name.trim() || username.trim(),
    passwordHash: hashPassword(password), role: 'admin', privileges: clonePrivileges(ADMIN_PRIVILEGES),
  };
  state.users.push(user);
  await saveUsers();
  state.session = { userId: user.id };
  await safeSet('shop:session', JSON.stringify(state.session), false);
  await logOperation('Création compte admin', `Compte "${user.username}" créé`);
  state.authError = '';
  render();
}

async function login(username, password) {
  const u = state.users.find(x => x.username.toLowerCase() === username.trim().toLowerCase());
  if (!u || u.passwordHash !== hashPassword(password)) {
    state.authError = 'Identifiant ou mot de passe incorrect.';
    render();
    return;
  }
  state.session = { userId: u.id };
  await safeSet('shop:session', JSON.stringify(state.session), false);
  state.authError = '';
  await logOperation('Connexion', `${u.username} s'est connecté`);
  render();
}

async function logout() {
  const u = currentUser();
  if (u) await logOperation('Déconnexion', `${u.username} s'est déconnecté`);
  state.session = null;
  try { await window.storage.delete('shop:session', false); } catch (e) {}
  render();
}

/* ---------------- Init ---------------- */
async function loadAll() {
  try {
    const [p, c, s, u, pay, log, t, sess, sup, pur, inv] = await Promise.all([
      safeGet('shop:products', true), safeGet('shop:clients', true), safeGet('shop:sales', true),
      safeGet('shop:users', true), safeGet('shop:payments', true), safeGet('shop:oplog', true),
      safeGet('shop:theme-pref', false), safeGet('shop:session', false),
      safeGet('shop:suppliers', true), safeGet('shop:purchases', true), safeGet('shop:invoices', true),
    ]);
    state.products = p ? JSON.parse(p.value) : seedProducts();
    state.clients = c ? JSON.parse(c.value) : seedClients();
    state.sales = s ? JSON.parse(s.value) : [];
    state.users = u ? JSON.parse(u.value) : [];
    state.users.forEach(migrateUserPrivileges);
    state.payments = pay ? JSON.parse(pay.value) : [];
    state.oplog = log ? JSON.parse(log.value) : [];
    state.suppliers = sup ? JSON.parse(sup.value) : [];
    state.purchases = pur ? JSON.parse(pur.value) : [];
    state.invoices = inv ? JSON.parse(inv.value) : [];
    state.theme = t && (t.value === 'light' || t.value === 'dark') ? t.value : 'dark';
    migrateSaleNumbers();
    migrateClientCodes();
    if (!p) await saveProducts();
    if (!c) await saveClients();
    if (sess) {
      const parsed = JSON.parse(sess.value);
      if (parsed && state.users.find(x => x.id === parsed.userId)) state.session = parsed;
    }
  } catch (e) {
    console.error('load error', e);
    state.products = seedProducts();
    state.clients = seedClients();
    state.sales = [];
  }
  applyTheme();
  state.loaded = true;
  render();
}
// Assigns readable, sequential bon numbers to any sale that predates this feature.
function migrateSaleNumbers() {
  let changed = false;
  const sorted = [...state.sales].sort((a, b) => new Date(a.date) - new Date(b.date));
  let n = 0;
  sorted.forEach(s => { if (s.number) n = Math.max(n, s.number); });
  sorted.forEach(s => { if (!s.number) { n++; s.number = n; changed = true; } });
  if (changed) saveSales();
}
// Assigns a readable client code (CL-0001…) to any client that predates this feature.
function migrateClientCodes() {
  let changed = false;
  let max = 0;
  state.clients.forEach(c => { const m = /^CL-(\d+)$/.exec(c.clientCode || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });
  state.clients.forEach(c => { if (!c.clientCode) { max++; c.clientCode = 'CL-' + String(max).padStart(4, '0'); changed = true; } });
  if (changed) saveClients();
}
function applyTheme() { document.body.classList.toggle('theme-light', state.theme === 'light'); }
async function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(); render();
  await safeSet('shop:theme-pref', state.theme, false);
}

/* ---------------- Navigation ---------------- */
const NAV = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard' },
  { id: 'products', label: 'Produits', icon: 'box' },
  { id: 'stock', label: 'Stock', icon: 'layers' },
  { id: 'purchases', label: 'Achats', icon: 'download' },
  { id: 'pos', label: 'Caisse', icon: 'cart' },
  { id: 'clients', label: 'Clients', icon: 'users' },
  { id: 'history', label: 'Historique ventes', icon: 'history' },
  { id: 'settings', label: 'Paramètres', icon: 'settings' },
];

function getVisibleNav() {
  return NAV.filter(n => {
    if (n.id === 'products' || n.id === 'stock' || n.id === 'purchases') return hasPriv('products', 'view');
    if (n.id === 'clients') return hasPriv('clients', 'view');
    return true;
  });
}

function setView(v) { state.view = v; state.sidebarOpen = false; render(); }

/* ---------------- Root render ---------------- */
function render() {
  const root = document.getElementById('root');
  if (!state.loaded) {
    root.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100vh;color:var(--muted);font-family:var(--font-mono);font-size:13px;">Chargement…</div>`;
    return;
  }
  if (state.users.length === 0) { root.innerHTML = renderSetup(); bindAuthEvents(); return; }
  if (!currentUser()) { root.innerHTML = renderLogin(); bindAuthEvents(); return; }

  const visibleNav = getVisibleNav();
  if (!visibleNav.find(n => n.id === state.view)) { state.view = visibleNav[0] ? visibleNav[0].id : 'dashboard'; }
  const low = lowStockProducts();
  const u = currentUser();
  root.innerHTML = `
    ${state.sidebarOpen ? `<div class="sidebar-backdrop" id="sidebarBackdrop"></div>` : ''}
    <div class="sidebar ${state.sidebarOpen ? 'open' : ''}">
      <div class="brand">
        <div class="brand-mark">PS</div>
        <div>
          <div class="brand-name">PhoneStock</div>
          <div class="brand-sub">Gestion boutique</div>
        </div>
      </div>
      <nav class="navlist">
        ${visibleNav.map(n => `
          <button class="navitem ${state.view === n.id ? 'active' : ''}" data-nav="${n.id}">
            ${ICONS[n.icon]}
            <span>${n.label}</span>
            ${n.id === 'stock' && low.length && hasPriv('products', 'view') ? `<span class="nav-badge">${low.length}</span>` : ''}
          </button>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <button class="navitem" id="themeToggle" style="margin-bottom:10px;">
          ${ICONS[state.theme === 'dark' ? 'sun' : 'moon']}
          <span>${state.theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
        </button>
        <div class="user-chip">
          <div class="user-avatar">${esc(u.name || u.username).slice(0, 1).toUpperCase()}</div>
          <div class="user-meta">
            <div class="uname">${esc(u.name || u.username)}</div>
            <div class="urole">${u.role === 'admin' ? 'Administrateur' : 'Vendeur'}</div>
          </div>
        </div>
        <button class="navitem" id="logoutBtn">${ICONS.logout}<span>Déconnexion</span></button>
      </div>
    </div>
    <main>
      <div class="topbar">
        <div style="display:flex;align-items:center;gap:12px;">
          <button class="menu-toggle" id="menuToggle">${ICONS.menu}</button>
          <div>
            <h1>${NAV.find(n => n.id === state.view).label}</h1>
            <div class="sub">${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
          </div>
        </div>
        <div class="topbar-actions">${topbarAction()}</div>
      </div>
      <div class="content" id="content">${renderView()}</div>
    </main>
    ${state.editingProduct ? renderProductModal() : ''}
    ${state.editingClient ? renderClientModal() : ''}
    ${state.editingUser ? renderUserModal() : ''}
    ${(state.paymentClientId || state.editingPayment) ? renderPaymentModal() : ''}
    ${state.receiptSale ? renderReceiptModal() : ''}
    ${state.invoiceDraft !== null ? renderInvoiceModal() : ''}
    ${state.editingSupplier ? renderSupplierModal() : ''}
    ${state.editingPurchase ? renderPurchaseModal() : ''}
  `;
  bindEvents();
}

function renderSetup() {
  return `
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo">
        <div class="brand-mark">PS</div>
        <h1>Bienvenue sur PhoneStock</h1>
        <p>Créez le compte administrateur pour démarrer</p>
      </div>
      ${state.authError ? `<div class="auth-error">${esc(state.authError)}</div>` : ''}
      <div class="field"><label>Votre nom</label><input id="su_name" placeholder="Nom complet"></div>
      <div class="field"><label>Identifiant</label><input id="su_username" placeholder="admin"></div>
      <div class="field"><label>Mot de passe</label><input id="su_pass" type="password" placeholder="••••••••"></div>
      <div class="field"><label>Confirmer le mot de passe</label><input id="su_pass2" type="password" placeholder="••••••••"></div>
      <button class="btn btn-primary" id="setupSubmit" style="width:100%;justify-content:center;padding:11px 0;margin-top:6px;">Créer le compte administrateur</button>
    </div>
  </div>`;
}

function renderLogin() {
  return `
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo">
        <div class="brand-mark">PS</div>
        <h1>PhoneStock</h1>
        <p>Connectez-vous pour accéder à la boutique</p>
      </div>
      ${state.authError ? `<div class="auth-error">${esc(state.authError)}</div>` : ''}
      <div class="field"><label>Identifiant</label><input id="li_username" placeholder="Identifiant"></div>
      <div class="field"><label>Mot de passe</label><input id="li_pass" type="password" placeholder="••••••••"></div>
      <button class="btn btn-primary" id="loginSubmit" style="width:100%;justify-content:center;padding:11px 0;margin-top:6px;">Se connecter</button>
    </div>
  </div>`;
}

function bindAuthEvents() {
  const setupSubmit = document.getElementById('setupSubmit');
  if (setupSubmit) setupSubmit.addEventListener('click', async () => {
    const name = document.getElementById('su_name').value;
    const username = document.getElementById('su_username').value.trim();
    const pass = document.getElementById('su_pass').value;
    const pass2 = document.getElementById('su_pass2').value;
    if (!username || !pass) { state.authError = 'Identifiant et mot de passe requis.'; render(); return; }
    if (pass !== pass2) { state.authError = 'Les mots de passe ne correspondent pas.'; render(); return; }
    if (pass.length < 4) { state.authError = 'Le mot de passe doit contenir au moins 4 caractères.'; render(); return; }
    await setupAdmin(username, name, pass);
  });
  const loginSubmit = document.getElementById('loginSubmit');
  if (loginSubmit) {
    const doLogin = () => login(document.getElementById('li_username').value, document.getElementById('li_pass').value);
    loginSubmit.addEventListener('click', doLogin);
    const passField = document.getElementById('li_pass');
    if (passField) passField.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
  }
}

function topbarAction() {
  if (state.view === 'products' && hasPriv('products', 'create')) return `<button class="btn" id="scanProductBtn">${ICONS.scan}Scanner</button><button class="btn btn-primary" id="addProductBtn">${ICONS.plus}Nouveau produit</button>`;
  if (state.view === 'clients' && hasPriv('clients', 'create')) return `<button class="btn btn-primary" id="addClientBtn">${ICONS.plus}Nouveau client</button>`;
  if (state.view === 'history') return `<button class="btn" id="openInvoiceBtn">${ICONS.fileText}Facture par période</button>`;
  return '';
}

function renderView() {
  switch (state.view) {
    case 'dashboard': return renderDashboard();
    case 'products': return renderProducts();
    case 'stock': return renderStock();
    case 'purchases': return renderPurchases();
    case 'pos': return renderPOS();
    case 'clients': return state.ledgerClientId ? renderClientLedger() : renderClients();
    case 'history': return renderHistory();
    case 'settings': return renderSettings();
    default: return '';
  }
}

/* ---------------- Dashboard ---------------- */
function renderDashboard() {
  const ts = todaySales();
  const low = lowStockProducts();
  const best = bestSellers(5);
  const stockValue = state.products.reduce((s, p) => s + p.costPrice * p.stock, 0);
  const canViewCosts = hasPriv('products', 'viewCosts');

  return `
    <div class="grid dash-stats" style="margin-bottom:20px;">
      <div class="card stat-card">
        <div class="stat-label">Ventes aujourd'hui</div>
        <div class="stat-value lcd">${ts.length}</div>
        <div class="stat-delta">${ts.length === 0 ? "Aucune vente encore" : 'transactions'}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">Chiffre d'affaires du jour</div>
        <div class="stat-value lcd">${money(revenueOf(ts))} <span style="font-size:13px;color:var(--muted)">DH</span></div>
        <div class="stat-delta">${canViewCosts ? `Marge: ${money(marginOf(ts))} DH` : '\u00A0'}</div>
      </div>
      ${canViewCosts ? `
      <div class="card stat-card">
        <div class="stat-label">Valeur du stock</div>
        <div class="stat-value">${money(stockValue)} <span style="font-size:13px;color:var(--muted)">DH</span></div>
        <div class="stat-delta">${state.products.reduce((s, p) => s + p.stock, 0)} unités en stock</div>
      </div>` : `
      <div class="card stat-card">
        <div class="stat-label">Unités en stock</div>
        <div class="stat-value">${state.products.reduce((s, p) => s + p.stock, 0)}</div>
        <div class="stat-delta">tous produits confondus</div>
      </div>`}
      <div class="card stat-card">
        <div class="stat-label">Alertes stock bas</div>
        <div class="stat-value" style="color:${low.length ? 'var(--danger)' : 'var(--text)'}">${low.length}</div>
        <div class="stat-delta">produit${low.length !== 1 ? 's' : ''} à réapprovisionner</div>
      </div>
    </div>

    <div class="grid dash-main" style="align-items:start;">
      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;">Meilleures ventes</div>
        ${best.length === 0 ? `<div class="empty-state" style="padding:24px 0;"><div class="title">Pas encore de ventes</div><div>Les produits les plus vendus apparaîtront ici.</div></div>` : `
        <table class="rcard">
          <thead><tr><th>Produit</th><th>Catégorie</th><th style="text-align:right;">Quantité vendue</th></tr></thead>
          <tbody>
            ${best.map(b => `
              <tr>
                <td data-label="Produit"><strong>${esc(b.product.name)}</strong> <span class="muted">${esc(b.product.model)}</span></td>
                <td data-label="Catégorie" class="muted">${esc(b.product.category)}</td>
                <td data-label="Qté vendue" class="mono">${b.qty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>`}
      </div>

      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;">
          <span>Stock bas</span>
          ${low.length ? `<span class="pill pill-danger">${low.length}</span>` : ''}
        </div>
        ${low.length === 0 ? `<div class="empty-state" style="padding:24px 0;"><div class="title">Tout est en ordre</div><div>Aucun produit sous le seuil d'alerte.</div></div>` : `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${low.map(p => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;border-bottom:1px solid var(--border);">
              <div>
                <div style="font-size:13px;font-weight:600;">${esc(p.name)}</div>
                <div class="muted" style="font-size:11.5px;">${esc(p.model)}</div>
              </div>
              <span class="pill ${stockStatus(p) === 'danger' ? 'pill-danger' : 'pill-warn'}">${p.stock} restant${p.stock !== 1 ? 's' : ''}</span>
            </div>
          `).join('')}
        </div>`}
      </div>
    </div>
  `;
}

/* ---------------- Products ---------------- */
function renderProducts() {
  const q = state.productSearch.trim().toLowerCase();
  const list = state.products.filter(p =>
    !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
  );
  const canEdit = hasPriv('products', 'edit');
  const canDelete = hasPriv('products', 'delete');
  const canViewCosts = hasPriv('products', 'viewCosts');
  const showActionsCol = canEdit || canDelete;
  return `
    <div class="toolbar">
      <input class="search-input" id="productSearch" placeholder="Rechercher un produit, marque ou SKU…" value="${esc(state.productSearch)}">
      <div class="muted mono" style="font-size:12px;">${list.length} produit${list.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="card">
      ${list.length === 0 ? emptyState('box', 'Aucun produit', 'Ajoutez votre premier produit pour commencer.') : `
      <table class="rcard">
        <thead><tr>
          <th>Produit</th><th>Catégorie</th><th>SKU</th>
          ${canViewCosts ? `<th style="text-align:right;">Achat</th>` : ''}<th style="text-align:right;">Vente</th>
          <th style="text-align:right;">Stock</th>${showActionsCol ? '<th></th>' : ''}
        </tr></thead>
        <tbody>
          ${list.map(p => `
            <tr>
              <td data-label="Produit"><strong>${esc(p.name)}</strong><div class="muted" style="font-size:11.5px;">${esc(p.brand)} · ${esc(p.model)}</div></td>
              <td data-label="Catégorie" class="muted">${esc(p.category)}</td>
              <td data-label="SKU" class="mono muted">${esc(p.sku)}</td>
              ${canViewCosts ? `<td data-label="Achat" class="mono">${money(p.costPrice)}</td>` : ''}
              <td data-label="Vente" class="price">${money(p.sellPrice)}</td>
              <td data-label="Stock"><span class="pill ${stockStatus(p) === 'ok' ? 'pill-ok' : stockStatus(p) === 'warn' ? 'pill-warn' : 'pill-danger'}">${p.stock}</span></td>
              ${showActionsCol ? `
              <td data-label="">
                ${canEdit ? `<button class="btn btn-sm" data-edit-product="${p.id}">Modifier</button>` : ''}
                ${canDelete ? `<button class="btn btn-sm btn-danger" data-delete-product="${p.id}">Suppr.</button>` : ''}
              </td>` : ''}
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function emptyState(icon, title, sub) {
  return `<div class="empty-state">${ICONS[icon] || ICONS.empty}<div class="title">${title}</div><div>${sub}</div></div>`;
}

function renderProductModal() {
  const isNew = state.editingProduct === 'new';
  const p = isNew ? { name: '', brand: '', model: '', category: 'Smartphones', costPrice: '', sellPrice: '', stock: '', sku: '', lowStock: 3 } : state.editingProduct;
  return `
  <div class="modal-overlay" id="productModalOverlay">
    <div class="modal">
      <h2>${isNew ? 'Nouveau produit' : 'Modifier le produit'}</h2>
      <div class="field"><label>Nom du produit</label><input id="f_name" value="${esc(p.name)}" placeholder="iPhone 14, Coque silicone…"></div>
      <div class="field-row">
        <div class="field"><label>Marque</label><input id="f_brand" value="${esc(p.brand)}" placeholder="Apple, Samsung…"></div>
        <div class="field"><label>Modèle / variante</label><input id="f_model" value="${esc(p.model)}" placeholder="128 Go, Noir…"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Catégorie</label>
          <select id="f_category">${CATEGORIES.map(c => `<option ${p.category === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
        </div>
        <div class="field"><label>SKU / code produit</label><input id="f_sku" value="${esc(p.sku)}" placeholder="APL-IP14-128"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Prix d'achat (DH)</label><input id="f_cost" type="number" min="0" step="0.01" value="${p.costPrice}"></div>
        <div class="field"><label>Prix de vente (DH)</label><input id="f_sell" type="number" min="0" step="0.01" value="${p.sellPrice}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Quantité en stock</label><input id="f_stock" type="number" min="0" step="1" value="${p.stock}"></div>
        <div class="field"><label>Seuil d'alerte</label><input id="f_low" type="number" min="0" step="1" value="${p.lowStock}"></div>
      </div>
      ${isNew ? `
      <div class="field-row">
        <div class="field"><label>Fournisseur (optionnel)</label>
          <select id="f_supplier">
            <option value="">Non spécifié</option>
            ${state.suppliers.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Date d'achat</label><input id="f_purchase_date" type="date" value="${new Date().toISOString().slice(0, 10)}"></div>
      </div>
      <div class="muted" style="font-size:11.5px;margin:-8px 0 12px 0;">Si la quantité en stock est supérieure à 0, cet ajout sera automatiquement récapitulé dans le registre des achats.</div>
      ` : ''}
      <div class="modal-actions">
        <button class="btn" id="cancelProductModal">Annuler</button>
        <button class="btn btn-primary" id="saveProductModal">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- Stock ---------------- */
/* ---------------- Achats (Fournisseurs + Registre) ---------------- */
function renderPurchases() {
  const canView = hasPriv('products', 'view');
  return `
    <div class="settings-tabs">
      <button class="settings-tab ${state.purchasesTab === 'registre' ? 'active' : ''}" data-purchases-tab="registre">Registre des achats</button>
      <button class="settings-tab ${state.purchasesTab === 'fournisseurs' ? 'active' : ''}" data-purchases-tab="fournisseurs">Fournisseurs</button>
    </div>
    ${state.purchasesTab === 'fournisseurs' ? renderSuppliers() : renderPurchaseRegister()}
  `;
}

function renderPurchaseRegister() {
  const canCreate = hasPriv('products', 'create');
  const f = state.purchaseFilters;
  let sorted = [...state.purchases];
  if (f.supplierId) sorted = sorted.filter(pu => pu.supplierId === f.supplierId);
  if (f.from) { const fromD = new Date(f.from); sorted = sorted.filter(pu => new Date(pu.date) >= fromD); }
  if (f.to) { const toD = new Date(f.to); toD.setHours(23, 59, 59, 999); sorted = sorted.filter(pu => new Date(pu.date) <= toD); }
  sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalFiltered = sorted.reduce((s, pu) => s + pu.total, 0);
  const isFiltered = f.supplierId || f.from || f.to;
  return `
    <div class="toolbar">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
        <select id="pf_supplier" class="search-input" style="min-width:160px;">
          <option value="">Tous les fournisseurs</option>
          ${state.suppliers.map(s => `<option value="${s.id}" ${f.supplierId === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
        </select>
        <input type="date" id="pf_from" value="${f.from || ''}" title="Du">
        <input type="date" id="pf_to" value="${f.to || ''}" title="Au">
        ${isFiltered ? `<button class="btn btn-sm" id="pf_clear">Réinitialiser</button>` : ''}
      </div>
      ${canCreate ? `<button class="btn btn-primary" id="addPurchaseBtn">${ICONS.plus}Nouvel achat</button>` : ''}
    </div>
    <div class="muted mono" style="font-size:12px;margin-bottom:12px;">${sorted.length} achat${sorted.length !== 1 ? 's' : ''}${isFiltered ? ' (filtré)' : ''} · Total : ${money(totalFiltered)} DH</div>
    <div class="card">
      ${sorted.length === 0 ? emptyState('cart', 'Aucun achat', isFiltered ? 'Aucun résultat pour ces filtres.' : 'Enregistrez vos réceptions de marchandise pour suivre vos coûts.') : `
      <table class="rcard">
        <thead><tr><th>Date</th><th>Fournisseur</th><th>Produits</th><th style="text-align:right;">Coût total</th></tr></thead>
        <tbody>
          ${sorted.map(pu => {
            const sup = state.suppliers.find(s => s.id === pu.supplierId);
            return `
            <tr>
              <td data-label="Date" class="mono muted">${fmtDateTime(pu.date)}</td>
              <td data-label="Fournisseur">${sup ? esc(sup.name) : '<span class="muted">Non spécifié</span>'}</td>
              <td data-label="Produits">${pu.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td>
              <td data-label="Coût total" class="price">${money(pu.total)}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderSuppliers() {
  const canCreate = hasPriv('products', 'create');
  const canEdit = hasPriv('products', 'edit');
  const canDelete = hasPriv('products', 'delete');
  return `
    <div class="toolbar"><div class="muted mono" style="font-size:12px;">${state.suppliers.length} fournisseur${state.suppliers.length !== 1 ? 's' : ''}</div>
      ${canCreate ? `<button class="btn btn-primary" id="addSupplierBtn">${ICONS.plus}Nouveau fournisseur</button>` : ''}
    </div>
    <div class="card">
      ${state.suppliers.length === 0 ? emptyState('users', 'Aucun fournisseur', 'Ajoutez vos fournisseurs pour les lier à vos achats.') : `
      <table class="rcard">
        <thead><tr><th>ID</th><th>Nom</th><th>Téléphone</th><th>Email</th><th></th></tr></thead>
        <tbody>
          ${state.suppliers.map(s => `
            <tr>
              <td data-label="ID" class="mono muted">${esc(s.code)}</td>
              <td data-label="Nom"><strong>${esc(s.name)}</strong>${s.notes ? `<div class="muted" style="font-size:11.5px;">${esc(s.notes)}</div>` : ''}</td>
              <td data-label="Téléphone" class="mono">${esc(s.phone) || '—'}</td>
              <td data-label="Email" class="muted">${esc(s.email) || '—'}</td>
              <td data-label="">
                ${canEdit ? `<button class="btn btn-sm" data-edit-supplier="${s.id}">Modifier</button>` : ''}
                ${canDelete ? `<button class="btn btn-sm btn-danger" data-delete-supplier="${s.id}">Suppr.</button>` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderSupplierModal() {
  const isNew = state.editingSupplier === 'new';
  const s = isNew ? { code: nextSupplierCode(), name: '', phone: '', email: '', address: '', notes: '' } : state.editingSupplier;
  return `
  <div class="modal-overlay" id="supplierModalOverlay">
    <div class="modal">
      <h2>${isNew ? 'Nouveau fournisseur' : 'Modifier le fournisseur'}</h2>
      <div class="field-row">
        <div class="field"><label>Nom</label><input id="sup_name" value="${esc(s.name)}" placeholder="Nom du fournisseur"></div>
        <div class="field"><label>Identifiant</label><input id="sup_code" value="${esc(s.code)}" placeholder="FR-0001"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Téléphone</label><input id="sup_phone" value="${esc(s.phone)}" placeholder="05…"></div>
        <div class="field"><label>Email</label><input id="sup_email" value="${esc(s.email)}" placeholder="contact@fournisseur.com"></div>
      </div>
      <div class="field"><label>Adresse</label><input id="sup_address" value="${esc(s.address || '')}" placeholder="Adresse"></div>
      <div class="field"><label>Notes</label><textarea id="sup_notes" rows="2">${esc(s.notes)}</textarea></div>
      <div class="modal-actions">
        <button class="btn" id="cancelSupplierModal">Annuler</button>
        <button class="btn btn-primary" id="saveSupplierModal">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

function renderPurchaseModal() {
  const lines = state.purchaseDraftLines || [{ id: uid('pl'), productId: '', qty: '', unitCost: '' }];
  return `
  <div class="modal-overlay" id="purchaseModalOverlay">
    <div class="modal modal-wide">
      <h2>Nouvel achat</h2>
      <div class="field-row">
        <div class="field"><label>Fournisseur</label>
          <select id="pu_supplier">
            <option value="">Non spécifié</option>
            ${state.suppliers.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Date</label><input id="pu_date" type="date" value="${new Date().toISOString().slice(0, 10)}"></div>
      </div>
      <div class="field"><label>Produits reçus</label>
        <div id="purchaseLines">
          ${lines.map(l => `
            <div class="field-row" style="grid-template-columns:2fr 1fr 1fr auto;align-items:end;gap:8px;margin-bottom:8px;">
              <div><select id="pl_product_${l.id}">
                <option value="">Choisir un produit</option>
                ${state.products.map(p => `<option value="${p.id}" ${l.productId === p.id ? 'selected' : ''}>${esc(p.name)} — ${esc(p.model)}</option>`).join('')}
              </select></div>
              <div><input id="pl_qty_${l.id}" type="number" min="1" step="1" placeholder="Qté" value="${l.qty}"></div>
              <div><input id="pl_cost_${l.id}" type="number" min="0" step="0.01" placeholder="Coût unit." value="${l.unitCost}"></div>
              <button class="btn btn-sm btn-danger" data-remove-line="${l.id}" style="height:38px;">✕</button>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-sm" id="addPurchaseLine">${ICONS.plus}Ajouter une ligne</button>
      </div>
      <div class="field"><label>Note (optionnel)</label><input id="pu_note" placeholder="Référence bon de livraison…"></div>
      <div class="modal-actions">
        <button class="btn" id="cancelPurchaseModal">Annuler</button>
        <button class="btn btn-primary" id="savePurchaseModal">Enregistrer l'achat</button>
      </div>
    </div>
  </div>`;
}

function renderStock() {
  const sorted = [...state.products].sort((a, b) => (a.stock / Math.max(a.lowStock, 1)) - (b.stock / Math.max(b.lowStock, 1)));
  return `
    <div class="card">
      <table class="rcard">
        <thead><tr><th>Produit</th><th>Catégorie</th><th style="text-align:right;">Stock actuel</th><th style="text-align:right;">Seuil</th><th>Statut</th></tr></thead>
        <tbody>
          ${sorted.map(p => `
            <tr>
              <td data-label="Produit"><strong>${esc(p.name)}</strong><div class="muted" style="font-size:11.5px;">${esc(p.brand)} · ${esc(p.model)}</div></td>
              <td data-label="Catégorie" class="muted">${esc(p.category)}</td>
              <td data-label="Stock actuel" class="mono">${p.stock}</td>
              <td data-label="Seuil" class="mono muted">${p.lowStock}</td>
              <td data-label="Statut">
                ${stockStatus(p) === 'ok' ? `<span class="pill pill-ok">En stock</span>`
                  : stockStatus(p) === 'warn' ? `<span class="pill pill-warn">Stock bas</span>`
                  : `<span class="pill pill-danger">Rupture</span>`}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ---------------- POS / Caisse ---------------- */
/* Increments (or creates) a cart line and moves it to the top of the list,
   so the most recently added/touched product is always visible without scrolling. */
function bumpCartLine(productId, delta, maxQty) {
  const existing = state.posCart.find(l => l.productId === productId);
  let qty = existing ? existing.qty + delta : delta;
  qty = Math.max(1, Math.min(qty, maxQty));
  state.posCart = state.posCart.filter(l => l.productId !== productId);
  state.posCart.unshift({ productId, qty });
}

function renderPOS() {
  const q = state.posSearch.trim().toLowerCase();
  const cat = state.posCategory;
  const list = state.products.filter(p =>
    (cat === 'Tous' || p.category === cat) &&
    (!q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
  );
  const cartLines = state.posCart.map(line => {
    const p = state.products.find(pp => pp.id === line.productId);
    return p ? { p, qty: line.qty } : null;
  }).filter(Boolean);
  const subtotal = cartLines.reduce((s, l) => s + l.p.sellPrice * l.qty, 0);
  const discountNum = Math.max(0, Math.min(parseFloat(state.posDiscount) || 0, subtotal));
  const total = subtotal - discountNum;
  const paidNum = state.posPaidOverride === null ? total : (parseFloat(state.posPaidOverride) || 0);
  const paidDisplay = state.posPaidOverride === null ? String(total) : state.posPaidOverride;
  const codeQuery = state.posClientCodeInput.trim().toLowerCase();
  const matchedClient = codeQuery ? state.clients.find(c => (c.clientCode || '').toLowerCase() === codeQuery) : null;

  return `
    <div class="pos-layout" style="height:calc(100vh - 160px);">
      <div class="pos-products">
        <div class="toolbar">
          <input class="search-input" id="posSearch" placeholder="Rechercher par nom, marque ou code produit (SKU)…" value="${esc(state.posSearch)}">
          <button class="btn btn-primary btn-sm" id="scanPosBtn">${ICONS.scan}Scanner</button>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${['Tous', ...CATEGORIES].map(c => `<button class="btn btn-sm ${cat === c ? 'btn-primary' : ''}" data-pos-cat="${c}">${c}</button>`).join('')}
          </div>
        </div>
        <div class="pos-grid">
          ${list.map(p => `
            <button class="pos-product" data-add-cart="${p.id}" ${p.stock <= 0 ? 'disabled style="opacity:.45;cursor:not-allowed;"' : ''}>
              <div class="name">${esc(p.name)}</div>
              <div class="meta">${esc(p.brand)} · ${esc(p.model)}<br><span class="mono">${esc(p.sku)}</span></div>
              <div class="foot">
                <span class="price">${money(p.sellPrice)} DH</span>
                <span class="muted mono" style="font-size:10.5px;"><span class="stockdot" style="background:${stockStatus(p) === 'ok' ? 'var(--accent)' : stockStatus(p) === 'warn' ? 'var(--accent-2)' : 'var(--danger)'}"></span>${p.stock}</span>
              </div>
            </button>
          `).join('') || `<div style="grid-column:1/-1;">${emptyState('box', 'Aucun résultat', 'Essayez un autre nom ou code produit.')}</div>`}
        </div>
      </div>

      <div class="pos-right">
        <div class="cart-panel">
          <div class="cart-header">
            <h3>Panier${cartLines.length ? ` · ${cartLines.reduce((s, l) => s + l.qty, 0)}` : ''}</h3>
            ${cartLines.length ? `<button class="btn btn-sm btn-danger" id="clearCart">Vider</button>` : ''}
          </div>
          <div class="cart-items">
            ${cartLines.length === 0 ? emptyState('cart', 'Panier vide', 'Cliquez sur un produit pour l’ajouter.') : cartLines.map(l => `
              <div class="cart-item">
                <div class="cart-item-top"><span>${esc(l.p.name)}</span><span class="price">${money(l.p.sellPrice * l.qty)}</span></div>
                <div class="cart-item-controls">
                  <div class="qty-ctrl">
                    <button data-cart-dec="${l.p.id}">−</button>
                    <span>${l.qty}</span>
                    <button data-cart-inc="${l.p.id}" ${l.qty >= l.p.stock ? 'disabled' : ''}>+</button>
                  </div>
                  <button class="btn btn-sm btn-danger" data-cart-remove="${l.p.id}" style="padding:3px 8px;">✕</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="checkout-panel">
          ${cartLines.length > 0 ? `
          <div class="cart-total-row" style="margin-bottom:6px;"><span class="label" style="font-size:11px;">Sous-total</span><span class="mono" style="font-size:13px;">${money(subtotal)} DH</span></div>
          <div class="paid-row">
            <label>Réduction (DH)</label>
            <input type="text" inputmode="decimal" autocomplete="off" id="posDiscount" value="${esc(state.posDiscount)}" placeholder="0">
          </div>
          ` : ''}
          <div class="cart-total-row"><span class="label">Total</span><span class="lcd-total">${money(total)} DH</span></div>
          <select class="pay-select" id="paymentMethod">
            <option value="Espèces" ${state.posPayment === 'Espèces' ? 'selected' : ''}>Espèces</option>
            <option value="Carte" ${state.posPayment === 'Carte' ? 'selected' : ''}>Carte bancaire</option>
            <option value="Mobile money" ${state.posPayment === 'Mobile money' ? 'selected' : ''}>Mobile money</option>
          </select>
          <div class="paid-row">
            <label>Code client</label>
            <input type="text" id="posClientCode" value="${esc(state.posClientCodeInput)}" placeholder="CL-0001">
          </div>
          ${matchedClient ? `<div class="muted" style="font-size:11.5px;margin:-6px 0 8px 0;color:var(--accent);">→ ${esc(matchedClient.name)}</div>`
            : (codeQuery.length >= 2 ? `<div style="font-size:11.5px;margin:-6px 0 8px 0;color:var(--danger);">Aucun client avec ce code</div>` : '')}
          <select class="pay-select" id="posClient">
            <option value="" ${state.posClientId === '' ? 'selected' : ''}>Client de passage</option>
            ${state.clients.map(c => `<option value="${c.id}" ${state.posClientId === c.id ? 'selected' : ''}>${esc(c.name)} (${esc(c.clientCode || '')})</option>`).join('')}
          </select>
          <div class="paid-row">
            <label>Montant payé</label>
            <input type="text" inputmode="decimal" autocomplete="off" id="posPaidAmount" value="${esc(paidDisplay)}">
          </div>
          ${paidNum < total ? `<div class="muted" style="font-size:11.5px;margin-bottom:10px;">Reste dû : <strong style="color:var(--danger)">${money(total - paidNum)} DH</strong> — nécessite un client identifié</div>` : ''}
          <button class="btn btn-primary" id="checkoutBtn" style="width:100%;justify-content:center;padding:11px 0;font-size:14px;" ${cartLines.length === 0 ? 'disabled' : ''}>
            Encaisser la vente
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ---------------- Clients ---------------- */
function renderClients() {
  const canEdit = hasPriv('clients', 'edit');
  const canDelete = hasPriv('clients', 'delete');
  const canViewPayments = hasPriv('payments', 'view');
  const q = state.clientSearch.trim().toLowerCase();
  const list = state.clients.filter(c =>
    !q || c.name.toLowerCase().includes(q) || (c.phone || '').toLowerCase().includes(q) ||
    (c.email || '').toLowerCase().includes(q) || (c.clientCode || '').toLowerCase().includes(q)
  );
  return `
    <div class="toolbar">
      <input class="search-input" id="clientSearch" placeholder="Rechercher par nom, téléphone, email ou identifiant…" value="${esc(state.clientSearch)}">
      <div class="muted mono" style="font-size:12px;">${list.length} client${list.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="card">
      ${list.length === 0 ? emptyState('users', state.clients.length === 0 ? 'Aucun client' : 'Aucun résultat', state.clients.length === 0 ? 'Ajoutez votre premier client.' : 'Essayez un autre terme de recherche.') : `
      <table class="rcard">
        <thead><tr><th>ID</th><th>Nom</th><th>Téléphone</th><th style="text-align:right;">Achats</th>${canViewPayments ? '<th style="text-align:right;">Solde dû</th>' : ''}<th></th></tr></thead>
        <tbody>
          ${list.map(c => {
            const purchases = clientSales(c.id);
            const balance = clientBalance(c.id);
            return `
            <tr>
              <td data-label="ID" class="mono muted">${esc(c.clientCode || '—')}</td>
              <td data-label="Nom"><strong>${esc(c.name)}</strong>${c.notes ? `<div class="muted" style="font-size:11.5px;">${esc(c.notes)}</div>` : ''}</td>
              <td data-label="Téléphone" class="mono">${esc(c.phone) || '—'}</td>
              <td data-label="Achats" class="mono">${purchases.length} · ${money(revenueOf(purchases))} DH</td>
              ${canViewPayments ? `<td data-label="Solde dû">${balance > 0.009 ? `<span class="pill pill-danger">${money(balance)} DH</span>` : `<span class="pill pill-ok">Soldé</span>`}</td>` : ''}
              <td data-label="">
                <button class="btn btn-sm" data-view-ledger="${c.id}">Détails</button>
                ${canEdit ? `<button class="btn btn-sm" data-edit-client="${c.id}">Modifier</button>` : ''}
                ${canDelete ? `<button class="btn btn-sm btn-danger" data-delete-client="${c.id}">Suppr.</button>` : ''}
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function invoicedSaleIds() {
  const set = new Set();
  state.invoices.forEach(inv => inv.saleIds.forEach(id => set.add(id)));
  return set;
}

function renderClientLedger() {
  const c = state.clients.find(x => x.id === state.ledgerClientId);
  if (!c) { state.ledgerClientId = null; return renderClients(); }
  const allSales = [...clientSales(c.id)].sort((a, b) => new Date(b.date) - new Date(a.date));
  const invoicedIds = invoicedSaleIds();
  const showInvoiced = !!state.showInvoicedBons;
  const sales = showInvoiced ? allSales : allSales.filter(s => !invoicedIds.has(s.id));
  const hiddenCount = allSales.length - sales.length;
  const payments = [...clientPayments(c.id)].sort((a, b) => new Date(b.date) - new Date(a.date));
  const balance = clientBalance(c.id);
  const canViewPayments = hasPriv('payments', 'view');
  const canCreatePay = hasPriv('payments', 'create');
  const canEditPay = hasPriv('payments', 'edit');
  const canDeletePay = hasPriv('payments', 'delete');
  return `
    <button class="btn btn-sm" id="backToClients" style="margin-bottom:16px;">← Retour aux clients</button>
    <div class="grid" style="grid-template-columns:1fr 1fr 1fr;margin-bottom:20px;">
      <div class="card stat-card"><div class="stat-label">Client</div><div style="font-family:var(--font-display);font-weight:700;font-size:16px;margin-top:8px;">${esc(c.name)}</div><div class="stat-delta mono">${esc(c.clientCode || '')}${c.phone ? ' · ' + esc(c.phone) : ''}</div></div>
      <div class="card stat-card"><div class="stat-label">Total achats</div><div class="stat-value">${allSales.length}</div><div class="stat-delta">${money(revenueOf(allSales))} DH</div></div>
      ${canViewPayments ? `
      <div class="card stat-card"><div class="stat-label">Solde dû</div><div class="stat-value" style="color:${balance > 0.009 ? 'var(--danger)' : 'var(--accent)'}">${money(balance)} <span style="font-size:13px;color:var(--muted)">DH</span></div>
        ${canCreatePay ? `<button class="btn btn-sm btn-primary" id="addPaymentBtn" style="margin-top:8px;">${ICONS.wallet}Enregistrer un paiement</button>` : ''}
      </div>` : '<div></div>'}
    </div>
    <div class="grid" style="grid-template-columns:${canViewPayments ? '1.3fr 1fr' : '1fr'};align-items:start;">
      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <span>Bons non facturés</span>
          ${sales.length > 0 ? `<button class="btn btn-sm" id="genInvoiceFromSelection">${ICONS.fileText}Générer une facture</button>` : ''}
        </div>
        ${hiddenCount > 0 ? `
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);margin-bottom:12px;cursor:pointer;">
          <input type="checkbox" id="toggleShowInvoiced" ${showInvoiced ? 'checked' : ''}>
          Afficher aussi les ${hiddenCount} bon${hiddenCount !== 1 ? 's' : ''} déjà facturé${hiddenCount !== 1 ? 's' : ''}
        </label>` : ''}
        ${sales.length === 0 ? emptyState('cart', hiddenCount > 0 ? 'Tous les bons sont déjà facturés' : 'Aucun achat', hiddenCount > 0 ? 'Cochez la case ci-dessus pour les revoir.' : 'Les ventes de ce client apparaîtront ici.') : `
        <table class="rcard">
          <thead><tr><th style="width:26px;"><input type="checkbox" id="selectAllBons"></th><th>N°</th><th>Date</th><th>Articles</th><th style="text-align:right;">Total</th><th>Statut</th><th></th></tr></thead>
          <tbody>
            ${sales.map(s => {
              const isInvoiced = invoicedIds.has(s.id);
              return `
              <tr ${isInvoiced ? 'style="opacity:.6;"' : ''}>
                <td data-label=""><input type="checkbox" class="bon-check" value="${s.id}" ${isInvoiced ? 'disabled' : ''}></td>
                <td data-label="N°" class="mono">#${s.number || '—'}</td>
                <td data-label="Date" class="mono muted">${fmtDateTime(s.date)}</td>
                <td data-label="Articles">${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td>
                <td data-label="Total" class="price">${money(s.total)}</td>
                <td data-label="Statut">${isInvoiced ? `<span class="pill pill-warn">Facturé</span>` : `<span class="pill ${saleStatus(s) === 'Payé' ? 'pill-ok' : saleStatus(s) === 'Partiel' ? 'pill-warn' : 'pill-danger'}">${saleStatus(s)}</span>`}</td>
                <td data-label=""><button class="btn btn-sm" data-print-sale="${s.id}">${ICONS.printer}Bon</button></td>
              </tr>
            `; }).join('')}
          </tbody>
        </table>
        <div class="muted" style="font-size:11.5px;margin-top:8px;">Cochez un ou plusieurs bons puis cliquez sur "Générer une facture" pour les regrouper.</div>
        `}
      </div>
      ${canViewPayments ? `
      <div class="card" style="padding:18px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:14px;">Journal de paiement</div>
        ${payments.length === 0 ? emptyState('wallet', 'Aucun paiement enregistré', 'Les règlements apparaîtront ici.') : `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${payments.map(p => {
            const linkedSale = p.saleId ? state.sales.find(s => s.id === p.saleId) : null;
            return `
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;border-bottom:1px solid var(--border);gap:8px;">
              <div>
                <div style="font-size:13px;font-weight:600;">${money(p.amount)} DH ${linkedSale ? `<span class="pill pill-ok" style="margin-left:4px;">Bon #${linkedSale.number || '?'}</span>` : ''}</div>
                <div class="muted" style="font-size:11.5px;">${fmtDate(p.date)}${p.note ? ' · ' + esc(p.note) : ''}</div>
              </div>
              <div style="display:flex;gap:4px;flex-shrink:0;">
                ${canEditPay ? `<button class="btn btn-sm" data-edit-payment="${p.id}">Modifier</button>` : ''}
                ${canDeletePay ? `<button class="btn btn-sm btn-danger" data-delete-payment="${p.id}">Suppr.</button>` : ''}
              </div>
            </div>
          `; }).join('')}
        </div>`}
      </div>` : ''}
    </div>
  `;
}

function renderPaymentModal() {
  const isEdit = !!state.editingPayment;
  const clientId = isEdit ? state.editingPayment.clientId : state.paymentClientId;
  const c = state.clients.find(x => x.id === clientId);
  if (!c) return '';
  const balance = clientBalance(c.id);
  const amount = isEdit ? state.editingPayment.amount : (balance > 0 ? balance.toFixed(2) : '');
  const date = isEdit ? state.editingPayment.date.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const note = isEdit ? (state.editingPayment.note || '') : '';
  const selectedSaleId = isEdit ? (state.editingPayment.saleId || '') : '';
  const bons = [...clientSales(c.id)].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
  <div class="modal-overlay" id="paymentModalOverlay">
    <div class="modal">
      <h2>${isEdit ? 'Modifier le paiement' : 'Enregistrer un paiement'}</h2>
      <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Client : <strong style="color:var(--text)">${esc(c.name)}</strong> · Solde dû actuel : <strong style="color:var(--danger)">${money(balance)} DH</strong></div>
      <div class="field"><label>Montant reçu (DH)</label><input id="pay_amount" type="number" min="0" step="0.01" value="${amount}"></div>
      <div class="field"><label>Date</label><input id="pay_date" type="date" value="${date}"></div>
      <div class="field"><label>Lier à un bon (optionnel)</label>
        <select id="pay_sale">
          <option value="">Aucun bon spécifique</option>
          ${bons.map(s => `<option value="${s.id}" ${selectedSaleId === s.id ? 'selected' : ''}>Bon #${s.number || '?'} — ${fmtDate(s.date)} — ${money(s.total)} DH</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Note (optionnel)</label><input id="pay_note" value="${esc(note)}" placeholder="Espèces, virement…"></div>
      <div class="modal-actions">
        <button class="btn" id="cancelPaymentModal">Annuler</button>
        <button class="btn btn-primary" id="savePaymentModal">${isEdit ? 'Enregistrer' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

function renderClientModal() {
  const isNew = state.editingClient === 'new';
  const c = isNew ? { clientCode: nextClientCode(), name: '', phone: '', email: '', notes: '' } : state.editingClient;
  return `
  <div class="modal-overlay" id="clientModalOverlay">
    <div class="modal">
      <h2>${isNew ? 'Nouveau client' : 'Modifier le client'}</h2>
      <div class="field-row">
        <div class="field"><label>Nom complet</label><input id="c_name" value="${esc(c.name)}" placeholder="Nom du client"></div>
        <div class="field"><label>Identifiant client</label><input id="c_code" value="${esc(c.clientCode || '')}" placeholder="CL-0001"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Téléphone</label><input id="c_phone" value="${esc(c.phone)}" placeholder="06…"></div>
        <div class="field"><label>Email</label><input id="c_email" value="${esc(c.email)}" placeholder="email@exemple.com"></div>
      </div>
      <div class="field"><label>Notes</label><textarea id="c_notes" rows="2" placeholder="Notes optionnelles">${esc(c.notes)}</textarea></div>
      <div class="modal-actions">
        <button class="btn" id="cancelClientModal">Annuler</button>
        <button class="btn btn-primary" id="saveClientModal">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- Sales history ---------------- */
function renderHistory() {
  return `
    <div class="settings-tabs">
      <button class="settings-tab ${state.historyTab === 'ventes' ? 'active' : ''}" data-history-tab="ventes">Ventes</button>
      <button class="settings-tab ${state.historyTab === 'factures' ? 'active' : ''}" data-history-tab="factures">Factures</button>
    </div>
    ${state.historyTab === 'factures' ? renderInvoiceHistory() : renderSalesHistory()}
  `;
}

function renderSalesHistory() {
  const f = state.historyFilters;
  const sellers = [...new Map(state.sales.filter(s => s.sellerId).map(s => [s.sellerId, s.sellerName])).entries()];
  let sorted = [...state.sales];
  if (f.status !== 'Tous') sorted = sorted.filter(s => saleStatus(s) === f.status);
  if (f.sellerId) sorted = sorted.filter(s => s.sellerId === f.sellerId);
  if (f.clientId) sorted = sorted.filter(s => s.clientId === f.clientId);
  if (f.from) { const fromD = new Date(f.from); sorted = sorted.filter(s => new Date(s.date) >= fromD); }
  if (f.to) { const toD = new Date(f.to); toD.setHours(23, 59, 59, 999); sorted = sorted.filter(s => new Date(s.date) <= toD); }
  sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalFiltered = sorted.reduce((s, x) => s + x.total, 0);
  const isFiltered = f.status !== 'Tous' || f.sellerId || f.clientId || f.from || f.to;
  return `
    <div class="toolbar">
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
        <select id="hf_status" class="search-input" style="min-width:120px;">
          ${['Tous', 'Payé', 'Partiel', 'Impayé'].map(v => `<option value="${v}" ${f.status === v ? 'selected' : ''}>${v === 'Tous' ? 'Tous les statuts' : v}</option>`).join('')}
        </select>
        <select id="hf_seller" class="search-input" style="min-width:140px;">
          <option value="">Tous les vendeurs</option>
          ${sellers.map(([id, name]) => `<option value="${id}" ${f.sellerId === id ? 'selected' : ''}>${esc(name)}</option>`).join('')}
        </select>
        <select id="hf_client" class="search-input" style="min-width:140px;">
          <option value="">Tous les clients</option>
          ${state.clients.map(c => `<option value="${c.id}" ${f.clientId === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
        </select>
        <input type="date" id="hf_from" value="${f.from || ''}" title="Du">
        <input type="date" id="hf_to" value="${f.to || ''}" title="Au">
        ${isFiltered ? `<button class="btn btn-sm" id="hf_clear">Réinitialiser</button>` : ''}
      </div>
    </div>
    <div class="muted mono" style="font-size:12px;margin-bottom:12px;">${sorted.length} vente${sorted.length !== 1 ? 's' : ''}${isFiltered ? ' (filtré)' : ''} · Total : ${money(totalFiltered)} DH</div>
    <div class="card">
      ${sorted.length === 0 ? emptyState('history', 'Aucune vente', isFiltered ? 'Aucun résultat pour ces filtres.' : 'Les ventes réalisées à la caisse apparaîtront ici.') : `
      <table class="rcard">
        <thead><tr><th>N°</th><th>Date</th><th>Articles</th><th>Client</th><th>Vendeur</th><th>Paiement</th><th>Statut</th><th style="text-align:right;">Total</th><th></th></tr></thead>
        <tbody>
          ${sorted.map(s => {
            const client = state.clients.find(c => c.id === s.clientId);
            return `
            <tr>
              <td data-label="N°" class="mono">#${s.number || '—'}</td>
              <td data-label="Date" class="mono muted">${fmtDateTime(s.date)}</td>
              <td data-label="Articles">${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td>
              <td data-label="Client">${client ? esc(client.name) : '<span class="muted">Client de passage</span>'}</td>
              <td data-label="Vendeur" class="muted">${esc(s.sellerName || '—')}</td>
              <td data-label="Paiement" class="muted">${esc(s.payment)}</td>
              <td data-label="Statut"><span class="pill ${saleStatus(s) === 'Payé' ? 'pill-ok' : saleStatus(s) === 'Partiel' ? 'pill-warn' : 'pill-danger'}">${saleStatus(s)}</span></td>
              <td data-label="Total" class="price">${money(s.total)}</td>
              <td data-label=""><button class="btn btn-sm" data-print-sale="${s.id}">${ICONS.printer}</button></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderInvoiceHistory() {
  const sorted = [...state.invoices].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `
    <div class="card">
      ${sorted.length === 0 ? emptyState('fileText', 'Aucune facture générée', 'Les factures générées depuis une fiche client apparaîtront ici.') : `
      <table class="rcard">
        <thead><tr><th>N°</th><th>Émise le</th><th>Client</th><th style="text-align:right;">Bons inclus</th><th style="text-align:right;">Total</th><th style="text-align:right;">Reste dû</th><th></th></tr></thead>
        <tbody>
          ${sorted.map(inv => {
            const client = state.clients.find(c => c.id === inv.clientId);
            return `
            <tr>
              <td data-label="N°" class="mono">FAC-${String(inv.number).padStart(4, '0')}</td>
              <td data-label="Émise le" class="mono muted">${fmtDateTime(inv.date)}</td>
              <td data-label="Client">${client ? esc(client.name) : '<span class="muted">Client supprimé</span>'}</td>
              <td data-label="Bons inclus" class="mono">${inv.saleIds.length}</td>
              <td data-label="Total" class="price">${money(inv.total)}</td>
              <td data-label="Reste dû" class="mono">${money(inv.total - inv.paid)}</td>
              <td data-label=""><button class="btn btn-sm" data-reprint-invoice="${inv.id}">${ICONS.printer}Réimprimer</button></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

/* ---------------- Print: Bon (receipt) ---------------- */
function renderReceiptModal() {
  const s = state.receiptSale;
  if (!s) return '';
  const client = state.clients.find(c => c.id === s.clientId);
  return `
  <div class="modal-overlay" id="receiptModalOverlay">
    <div class="modal">
      <h2>Vente encaissée</h2>
      <div class="receipt-preview" style="background:var(--surface-2);border-radius:10px;padding:16px;margin-bottom:16px;">
        ${buildReceiptHTML(s, client)}
      </div>
      <div class="modal-actions">
        <button class="btn" id="closeReceiptModal">Fermer</button>
        <button class="btn btn-primary" id="printReceiptBtn">${ICONS.printer}Imprimer le bon</button>
      </div>
    </div>
  </div>`;
}

function buildReceiptHTML(s, client) {
  return `
    <div class="receipt">
      <h2>PHONESTOCK</h2>
      <div class="center">Boutique téléphones &amp; accessoires</div>
      <hr>
      <div>Date : ${fmtDateTime(s.date)}</div>
      <div>Bon N° : ${s.number ? '#' + s.number : esc(s.id)}</div>
      <div>Client : ${client ? esc(client.name) + (client.clientCode ? ' (' + esc(client.clientCode) + ')' : '') : 'Client de passage'}</div>
      <div>Vendeur : ${esc(s.sellerName || '—')}</div>
      <hr>
      <table>
        ${s.items.map(it => `<tr><td>${it.qty}× ${esc(it.name)}</td><td style="text-align:right;">${money(it.price * it.qty)}</td></tr>`).join('')}
      </table>
      <hr>
      <table>
        ${s.discount > 0 ? `
        <tr><td>Sous-total</td><td style="text-align:right;">${money(s.subtotal)} DH</td></tr>
        <tr><td>Réduction</td><td style="text-align:right;">− ${money(s.discount)} DH</td></tr>
        ` : ''}
        <tr><td><strong>TOTAL</strong></td><td style="text-align:right;"><strong>${money(s.total)} DH</strong></td></tr>
        <tr><td>Payé</td><td style="text-align:right;">${money(s.paidAmount)} DH</td></tr>
        ${s.paidAmount < s.total ? `<tr><td>Reste dû</td><td style="text-align:right;">${money(s.total - s.paidAmount)} DH</td></tr>` : ''}
      </table>
      <hr>
      <div>Paiement : ${esc(s.payment)}</div>
      <div class="center" style="margin-top:8px;">Merci de votre confiance !</div>
    </div>
  `;
}

function printHTML(html) {
  const area = document.getElementById('printArea');
  area.innerHTML = html;
  setTimeout(() => window.print(), 50);
}

/* ---------------- Print: Facture par période ---------------- */
function invoiceSalesFor(d) {
  if (d.saleIds && d.saleIds.length) {
    return d.saleIds.map(id => state.sales.find(s => s.id === id)).filter(Boolean).sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if (d.clientId && d.from && d.to) {
    const fromD = new Date(d.from); const toD = new Date(d.to); toD.setHours(23, 59, 59, 999);
    return clientSales(d.clientId).filter(s => { const dt = new Date(s.date); return dt >= fromD && dt <= toD; })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  return [];
}

function renderInvoiceModal() {
  const d = state.invoiceDraft;
  const client = state.clients.find(c => c.id === d.clientId);
  const sales = client ? invoiceSalesFor(d) : [];
  const isSelection = !!(d.saleIds && d.saleIds.length);
  const total = sales.reduce((s, x) => s + x.total, 0);
  const paid = sales.reduce((s, x) => s + effectivePaidAmount(x), 0);
  const canShow = client && sales.length > 0;
  return `
  <div class="modal-overlay" id="invoiceModalOverlay">
    <div class="modal modal-wide">
      <h2>${isSelection ? `Facture — ${sales.length} bon${sales.length !== 1 ? 's' : ''} sélectionné${sales.length !== 1 ? 's' : ''}` : 'Facture par période'}</h2>
      ${isSelection ? `
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Client : <strong style="color:var(--text)">${esc(client.name)}</strong></div>
      ` : `
      <div class="field-row">
        <div class="field"><label>Client</label>
          <select id="inv_client">
            <option value="">Sélectionner un client</option>
            ${state.clients.map(c => `<option value="${c.id}" ${d.clientId === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Du</label><input id="inv_from" type="date" value="${d.from || ''}"></div>
        <div class="field"><label>Au</label><input id="inv_to" type="date" value="${d.to || ''}"></div>
      </div>
      <button class="btn btn-sm" id="inv_apply" style="margin-bottom:16px;">Afficher les bons</button>
      `}
      ${canShow ? `
        <div style="background:var(--surface-2);border-radius:10px;padding:14px;max-height:280px;overflow-y:auto;">
          <table style="width:100%;font-size:12.5px;">
            <thead><tr><th style="text-align:left;">Date</th><th style="text-align:left;">Articles</th><th style="text-align:right;">Total</th></tr></thead>
            <tbody>
              ${sales.map(s => `<tr><td>${fmtDate(s.date)}</td><td>${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td><td style="text-align:right;">${money(s.total)}</td></tr>`).join('')}
            </tbody>
          </table>
          <div style="margin-top:10px;text-align:right;font-size:13px;">
            <div>Total : <strong class="price">${money(total)} DH</strong></div>
            <div class="muted">Payé : ${money(paid)} DH · Reste dû : ${money(total - paid)} DH</div>
          </div>
        </div>
      ` : (isSelection ? '' : `<div class="muted" style="font-size:12.5px;">Choisissez un client et une période, puis cliquez sur "Afficher les bons".</div>`)}
      <div class="modal-actions">
        <button class="btn" id="closeInvoiceModal">Fermer</button>
        <button class="btn btn-primary" id="printInvoiceBtn" ${!canShow ? 'disabled' : ''}>${ICONS.printer}Imprimer la facture</button>
      </div>
    </div>
  </div>`;
}

function buildInvoiceHTML(client, sales, from, to) {
  const total = sales.reduce((s, x) => s + x.total, 0);
  const paid = sales.reduce((s, x) => s + effectivePaidAmount(x), 0);
  const periodLabel = from && to ? `<div>Période : du ${fmtDate(from)} au ${fmtDate(to)}</div>` : `<div>${sales.length} bon${sales.length !== 1 ? 's' : ''} sélectionné${sales.length !== 1 ? 's' : ''}</div>`;
  return `
    <div class="invoice-doc">
      <h2>Facture — PhoneStock</h2>
      <div>Client : <strong>${esc(client.name)}</strong> ${client.phone ? '· ' + esc(client.phone) : ''}</div>
      ${periodLabel}
      <div>Émise le : ${fmtDate(new Date())}</div>
      <table>
        <thead><tr><th>Date</th><th>Articles</th><th>Statut</th><th style="text-align:right;">Total</th></tr></thead>
        <tbody>
          ${sales.map(s => `<tr><td>${fmtDate(s.date)}</td><td>${s.items.map(it => `${it.qty}× ${esc(it.name)}`).join(', ')}</td><td>${saleStatus(s)}</td><td style="text-align:right;">${money(s.total)} DH</td></tr>`).join('')}
        </tbody>
      </table>
      <div style="margin-top:16px;text-align:right;">
        <div style="font-size:16px;"><strong>Total : ${money(total)} DH</strong></div>
        <div>Payé : ${money(paid)} DH</div>
        <div>Reste dû : ${money(total - paid)} DH</div>
      </div>
    </div>
  `;
}

/* ---------------- Settings ---------------- */
function renderSettings() {
  const admin = isAdmin();
  const tabs = admin
    ? [{ id: 'profil', label: 'Mon profil' }, { id: 'vendeurs', label: 'Comptes vendeurs' }, { id: 'historique', label: "Historique d'opérations" }, { id: 'sauvegarde', label: 'Sauvegarde' }]
    : [{ id: 'profil', label: 'Mon profil' }];
  const tab = tabs.find(t => t.id === state.settingsTab) ? state.settingsTab : 'profil';
  return `
    <div class="settings-tabs">
      ${tabs.map(t => `<button class="settings-tab ${tab === t.id ? 'active' : ''}" data-settings-tab="${t.id}">${t.label}</button>`).join('')}
    </div>
    ${tab === 'profil' ? renderSettingsProfil() : ''}
    ${tab === 'vendeurs' && admin ? renderSettingsVendeurs() : ''}
    ${tab === 'historique' && admin ? renderSettingsHistorique() : ''}
    ${tab === 'sauvegarde' && admin ? renderSettingsSauvegarde() : ''}
  `;
}

function renderSettingsProfil() {
  const u = currentUser();
  return `
    <div class="card" style="padding:20px;max-width:420px;">
      <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:16px;">Modifier mes identifiants</div>
      <div class="field"><label>Nom affiché</label><input id="prof_name" value="${esc(u.name)}"></div>
      <div class="field"><label>Identifiant</label><input id="prof_username" value="${esc(u.username)}"></div>
      <div class="field"><label>Nouveau mot de passe (laisser vide pour ne pas changer)</label><input id="prof_pass" type="password" placeholder="••••••••"></div>
      <button class="btn btn-primary" id="saveProfileBtn" style="margin-top:6px;">Enregistrer</button>
    </div>
  `;
}

function renderSettingsVendeurs() {
  const vendeurs = state.users.filter(u => u.role !== 'admin');
  return `
    <div class="toolbar"><div></div><button class="btn btn-primary" id="addUserBtn">${ICONS.plus}Nouveau compte vendeur</button></div>
    <div class="card">
      ${vendeurs.length === 0 ? emptyState('users', 'Aucun vendeur', 'Créez un compte pour votre équipe.') : `
      <table class="rcard">
        <thead><tr><th>Nom</th><th>Identifiant</th><th>Privilèges</th><th></th></tr></thead>
        <tbody>
          ${vendeurs.map(v => `
            <tr>
              <td data-label="Nom"><strong>${esc(v.name)}</strong></td>
              <td data-label="Identifiant" class="mono">${esc(v.username)}</td>
              <td data-label="Privilèges" class="muted" style="font-size:12px;">${privilegeSummary(v.privileges)}</td>
              <td data-label="">
                <button class="btn btn-sm" data-edit-user="${v.id}">Modifier</button>
                <button class="btn btn-sm btn-danger" data-delete-user="${v.id}">Suppr.</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}
function privilegeSummary(p) {
  if (!p || !p.products) return '—';
  const labels = { products: 'Produits', clients: 'Clients', payments: 'Paiements' };
  const actionLabels = { view: 'voir', create: 'créer', edit: 'modifier', delete: 'supprimer' };
  const parts = Object.keys(labels).map(mod => {
    const m = p[mod]; if (!m) return null;
    const acts = PRIV_ACTIONS.filter(a => m[a]).map(a => actionLabels[a]);
    return acts.length ? `${labels[mod]} : ${acts.join(', ')}` : null;
  }).filter(Boolean);
  return parts.length ? parts.join(' · ') : 'Aucun accès';
}

function permRow(moduleKey, moduleLabel, priv) {
  const m = priv[moduleKey] || {};
  return `
    <tr>
      <td style="padding:7px 6px 7px 0;font-weight:600;">${moduleLabel}</td>
      ${PRIV_ACTIONS.map(a => `<td style="text-align:center;padding:7px 4px;"><input type="checkbox" id="priv_${moduleKey}_${a}" ${m[a] ? 'checked' : ''}></td>`).join('')}
    </tr>`;
}

function renderUserModal() {
  const isNew = state.editingUser === 'new';
  const u = isNew ? { name: '', username: '', privileges: clonePrivileges(DEFAULT_PRIVILEGES) } : state.editingUser;
  const priv = u.privileges && u.privileges.products ? u.privileges : clonePrivileges(DEFAULT_PRIVILEGES);
  return `
  <div class="modal-overlay" id="userModalOverlay">
    <div class="modal modal-wide">
      <h2>${isNew ? 'Nouveau compte vendeur' : 'Modifier le compte'}</h2>
      <div class="field-row">
        <div class="field"><label>Nom complet</label><input id="u_name" value="${esc(u.name)}"></div>
        <div class="field"><label>Identifiant</label><input id="u_username" value="${esc(u.username)}"></div>
      </div>
      <div class="field"><label>${isNew ? 'Mot de passe' : 'Nouveau mot de passe (laisser vide pour ne pas changer)'}</label><input id="u_pass" type="password" placeholder="••••••••"></div>
      <div class="field">
        <label>Privilèges par module</label>
        <div style="overflow-x:auto;">
        <table style="width:100%;font-size:12px;border-collapse:collapse;min-width:340px;">
          <thead><tr>
            <th style="text-align:left;padding:6px 6px 6px 0;"></th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Visualiser</th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Créer</th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Modifier</th>
            <th style="padding:6px 4px;font-weight:600;color:var(--muted);">Supprimer</th>
          </tr></thead>
          <tbody>
            ${permRow('products', 'Produits', priv)}
            ${permRow('clients', 'Clients', priv)}
            ${permRow('payments', 'Paiements', priv)}
          </tbody>
        </table>
        </div>
        <div class="checkbox-row" style="margin-top:8px;">
          <input type="checkbox" id="priv_products_costs" ${priv.products && priv.products.viewCosts ? 'checked' : ''}>
          <label for="priv_products_costs" style="margin:0;">Voir les prix d'achat et marges (Produits)</label>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn" id="cancelUserModal">Annuler</button>
        <button class="btn btn-primary" id="saveUserModal">${isNew ? 'Créer le compte' : 'Enregistrer'}</button>
      </div>
    </div>
  </div>`;
}

function renderSettingsHistorique() {
  const sorted = [...state.oplog].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 500);
  return `
    <div class="toolbar"><div class="muted mono" style="font-size:12px;">${state.oplog.length} opération${state.oplog.length !== 1 ? 's' : ''} enregistrée${state.oplog.length !== 1 ? 's' : ''}</div>
      <button class="btn" id="exportOplogBtn">${ICONS.download}Exporter en Excel (.xlsx)</button>
    </div>
    <div class="card">
      ${sorted.length === 0 ? emptyState('history', 'Aucune opération', "L'historique des actions apparaîtra ici.") : `
      <table class="rcard">
        <thead><tr><th>Date</th><th>Utilisateur</th><th>Action</th><th>Détails</th></tr></thead>
        <tbody>
          ${sorted.map(l => `
            <tr>
              <td data-label="Date" class="mono muted">${fmtDateTime(l.date)}</td>
              <td data-label="Utilisateur">${esc(l.username)}</td>
              <td data-label="Action"><strong>${esc(l.action)}</strong></td>
              <td data-label="Détails" class="muted">${esc(l.details)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>`}
    </div>
  `;
}

function renderSettingsSauvegarde() {
  return `
    <div class="grid" style="grid-template-columns:1fr 1fr;max-width:700px;">
      <div class="card" style="padding:20px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;">Sauvegarder les données</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">Télécharge un fichier contenant tous vos produits, clients, ventes, paiements et comptes.</div>
        <button class="btn btn-primary" id="backupBtn">${ICONS.download}Télécharger la sauvegarde</button>
      </div>
      <div class="card" style="padding:20px;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:14.5px;margin-bottom:8px;">Restaurer les données</div>
        <div class="muted" style="font-size:12.5px;margin-bottom:14px;">⚠️ Remplace toutes les données actuelles par celles du fichier sélectionné.</div>
        <input type="file" id="restoreFile" accept="application/json" style="display:none;">
        <button class="btn" id="restoreBtn">${ICONS.upload}Choisir un fichier de sauvegarde</button>
      </div>
    </div>
  `;
}

/* ---------------- Export / Backup ---------------- */
function exportOplogXLSX() {
  if (typeof XLSX === 'undefined') { toast("Bibliothèque Excel indisponible — vérifiez votre connexion."); return; }
  const rows = [...state.oplog].sort((a, b) => new Date(b.date) - new Date(a.date)).map(l => ({
    Date: fmtDateTime(l.date), Utilisateur: l.username, Action: l.action, Détails: l.details,
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Historique');
  XLSX.writeFile(wb, `phonestock-historique-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

function downloadBackup() {
  const payload = {
    exportedAt: new Date().toISOString(),
    products: state.products, clients: state.clients, sales: state.sales,
    users: state.users, payments: state.payments, oplog: state.oplog,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `phonestock-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

async function restoreFromFile(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data || !Array.isArray(data.products) || !Array.isArray(data.clients)) { toast('Fichier de sauvegarde invalide.'); return; }
    if (!confirm('Ceci va remplacer toutes les données actuelles. Continuer ?')) return;
    state.products = data.products || [];
    state.clients = data.clients || [];
    state.sales = data.sales || [];
    state.users = data.users || state.users;
    state.payments = data.payments || [];
    state.oplog = data.oplog || [];
    await Promise.all([saveProducts(), saveClients(), saveSales(), saveUsers(), savePayments(), saveOplog()]);
    await logOperation('Restauration', 'Données restaurées depuis un fichier de sauvegarde');
    toast('Données restaurées avec succès');
    render();
  } catch (e) {
    console.error(e);
    toast('Impossible de lire ce fichier.');
  }
}

/* ---------------- Events ---------------- */
function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => setView(el.dataset.nav)));
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) menuToggle.addEventListener('click', (e) => { e.stopPropagation(); state.sidebarOpen = !state.sidebarOpen; render(); });
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', () => { state.sidebarOpen = false; render(); });
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  /* Products */
  const addProductBtn = document.getElementById('addProductBtn');
  if (addProductBtn) addProductBtn.addEventListener('click', () => { state.editingProduct = 'new'; render(); });
  const scanProductBtn = document.getElementById('scanProductBtn');
  if (scanProductBtn) scanProductBtn.addEventListener('click', () => openScanner('products'));
  const productSearch = document.getElementById('productSearch');
  if (productSearch) productSearch.addEventListener('input', (e) => { state.productSearch = e.target.value; refreshContent(); });
  document.querySelectorAll('[data-edit-product]').forEach(el => el.addEventListener('click', () => { state.editingProduct = state.products.find(p => p.id === el.dataset.editProduct); render(); }));
  document.querySelectorAll('[data-delete-product]').forEach(el => el.addEventListener('click', async () => {
    if (!confirm('Supprimer ce produit ?')) return;
    const p = state.products.find(pp => pp.id === el.dataset.deleteProduct);
    state.products = state.products.filter(p => p.id !== el.dataset.deleteProduct);
    await saveProducts(); await logOperation('Suppression produit', p ? p.name : '');
    render();
  }));
  const cancelProductModal = document.getElementById('cancelProductModal');
  if (cancelProductModal) cancelProductModal.addEventListener('click', () => { state.editingProduct = null; render(); });
  const productModalOverlay = document.getElementById('productModalOverlay');
  if (productModalOverlay) productModalOverlay.addEventListener('click', (e) => { if (e.target === productModalOverlay) { state.editingProduct = null; render(); } });
  const saveProductModal = document.getElementById('saveProductModal');
  if (saveProductModal) saveProductModal.addEventListener('click', async () => {
    const name = document.getElementById('f_name').value.trim();
    if (!name) { toast('Le nom du produit est requis'); return; }
    const isNewProduct = state.editingProduct === 'new';
    const data = {
      name, brand: document.getElementById('f_brand').value.trim(), model: document.getElementById('f_model').value.trim(),
      category: document.getElementById('f_category').value, sku: document.getElementById('f_sku').value.trim(),
      costPrice: parseFloat(document.getElementById('f_cost').value) || 0, sellPrice: parseFloat(document.getElementById('f_sell').value) || 0,
      stock: parseInt(document.getElementById('f_stock').value) || 0, lowStock: parseInt(document.getElementById('f_low').value) || 0,
    };
    if (isNewProduct) {
      const newProduct = { id: uid('p'), ...data };
      state.products.push(newProduct);
      toast('Produit ajouté');
      await logOperation('Ajout produit', name);
      await saveProducts();
      // Auto-record the initial stock as a purchase, so it's recapped in the register.
      if (data.stock > 0) {
        const supplierId = document.getElementById('f_supplier').value || null;
        const purchaseDateStr = document.getElementById('f_purchase_date').value || new Date().toISOString().slice(0, 10);
        const purchase = {
          id: uid('pu'), date: new Date(purchaseDateStr).toISOString(), supplierId,
          items: [{ productId: newProduct.id, name: newProduct.name, qty: data.stock, unitCost: data.costPrice }],
          total: data.stock * data.costPrice, note: 'Stock initial à la création du produit',
        };
        state.purchases.push(purchase);
        await savePurchases();
        const sup = state.suppliers.find(s => s.id === supplierId);
        await logOperation('Achat enregistré (auto)', `${money(purchase.total)} DH · ${newProduct.name}${sup ? ' · ' + sup.name : ''}`);
      }
    } else {
      Object.assign(state.editingProduct, data);
      toast('Produit mis à jour');
      await logOperation('Modification produit', name);
      await saveProducts();
    }
    state.editingProduct = null; render();
  });

  /* Clients */
  const addClientBtn = document.getElementById('addClientBtn');
  if (addClientBtn) addClientBtn.addEventListener('click', () => { state.editingClient = 'new'; render(); });
  document.querySelectorAll('[data-edit-client]').forEach(el => el.addEventListener('click', () => { state.editingClient = state.clients.find(c => c.id === el.dataset.editClient); render(); }));
  document.querySelectorAll('[data-delete-client]').forEach(el => el.addEventListener('click', async () => {
    if (!confirm('Supprimer ce client ?')) return;
    const c = state.clients.find(cc => cc.id === el.dataset.deleteClient);
    state.clients = state.clients.filter(c => c.id !== el.dataset.deleteClient);
    await saveClients(); await logOperation('Suppression client', c ? c.name : '');
    render();
  }));
  document.querySelectorAll('[data-view-ledger]').forEach(el => el.addEventListener('click', () => { state.ledgerClientId = el.dataset.viewLedger; state.showInvoicedBons = false; render(); }));
  const backToClients = document.getElementById('backToClients');
  if (backToClients) backToClients.addEventListener('click', () => { state.ledgerClientId = null; state.showInvoicedBons = false; render(); });
  const toggleShowInvoiced = document.getElementById('toggleShowInvoiced');
  if (toggleShowInvoiced) toggleShowInvoiced.addEventListener('change', (e) => { state.showInvoicedBons = e.target.checked; refreshContent(); });
  const clientSearch = document.getElementById('clientSearch');
  if (clientSearch) clientSearch.addEventListener('input', (e) => { state.clientSearch = e.target.value; refreshContent(); });
  const cancelClientModal = document.getElementById('cancelClientModal');
  if (cancelClientModal) cancelClientModal.addEventListener('click', () => { state.editingClient = null; render(); });
  const clientModalOverlay = document.getElementById('clientModalOverlay');
  if (clientModalOverlay) clientModalOverlay.addEventListener('click', (e) => { if (e.target === clientModalOverlay) { state.editingClient = null; render(); } });
  const saveClientModal = document.getElementById('saveClientModal');
  if (saveClientModal) saveClientModal.addEventListener('click', async () => {
    const name = document.getElementById('c_name').value.trim();
    if (!name) { toast('Le nom du client est requis'); return; }
    const clientCode = document.getElementById('c_code').value.trim() || nextClientCode();
    const dupCode = state.clients.find(c => c.clientCode === clientCode && c.id !== (state.editingClient === 'new' ? null : state.editingClient.id));
    if (dupCode) { toast('Cet identifiant client est déjà utilisé'); return; }
    const data = { name, clientCode, phone: document.getElementById('c_phone').value.trim(), email: document.getElementById('c_email').value.trim(), notes: document.getElementById('c_notes').value.trim() };
    if (state.editingClient === 'new') { state.clients.push({ id: uid('c'), ...data }); toast('Client ajouté'); await logOperation('Ajout client', name); }
    else { Object.assign(state.editingClient, data); toast('Client mis à jour'); await logOperation('Modification client', name); }
    await saveClients(); state.editingClient = null; render();
  });

  /* Payments */
  const addPaymentBtn = document.getElementById('addPaymentBtn');
  if (addPaymentBtn) addPaymentBtn.addEventListener('click', () => { state.paymentClientId = state.ledgerClientId; state.editingPayment = null; render(); });
  document.querySelectorAll('[data-edit-payment]').forEach(el => el.addEventListener('click', () => {
    state.editingPayment = state.payments.find(p => p.id === el.dataset.editPayment);
    state.paymentClientId = null;
    render();
  }));
  document.querySelectorAll('[data-delete-payment]').forEach(el => el.addEventListener('click', async () => {
    if (!confirm('Supprimer ce paiement ?')) return;
    const p = state.payments.find(pp => pp.id === el.dataset.deletePayment);
    state.payments = state.payments.filter(pp => pp.id !== el.dataset.deletePayment);
    await savePayments();
    await logOperation('Suppression paiement', p ? `${money(p.amount)} DH` : '');
    render();
  }));
  const cancelPaymentModal = document.getElementById('cancelPaymentModal');
  if (cancelPaymentModal) cancelPaymentModal.addEventListener('click', () => { state.paymentClientId = null; state.editingPayment = null; render(); });
  const paymentModalOverlay = document.getElementById('paymentModalOverlay');
  if (paymentModalOverlay) paymentModalOverlay.addEventListener('click', (e) => { if (e.target === paymentModalOverlay) { state.paymentClientId = null; state.editingPayment = null; render(); } });
  const savePaymentModal = document.getElementById('savePaymentModal');
  if (savePaymentModal) savePaymentModal.addEventListener('click', async () => {
    const amount = parseFloat(document.getElementById('pay_amount').value) || 0;
    if (amount <= 0) { toast('Montant invalide'); return; }
    const date = document.getElementById('pay_date').value || new Date().toISOString().slice(0, 10);
    const note = document.getElementById('pay_note').value.trim();
    const saleId = document.getElementById('pay_sale').value || null;
    if (state.editingPayment) {
      Object.assign(state.editingPayment, { amount, date: new Date(date).toISOString(), note, saleId });
      await savePayments();
      await logOperation('Modification paiement', `${money(amount)} DH`);
      state.editingPayment = null; toast('Paiement mis à jour');
    } else {
      const c = state.clients.find(cc => cc.id === state.paymentClientId);
      state.payments.push({ id: uid('pay'), clientId: state.paymentClientId, amount, date: new Date(date).toISOString(), note, saleId });
      await savePayments();
      await logOperation('Paiement enregistré', `${money(amount)} DH · ${c ? c.name : ''}`);
      state.paymentClientId = null; toast('Paiement enregistré');
    }
    render();
  });

  /* Users (vendeurs) */
  const addUserBtn = document.getElementById('addUserBtn');
  if (addUserBtn) addUserBtn.addEventListener('click', () => { state.editingUser = 'new'; render(); });
  document.querySelectorAll('[data-edit-user]').forEach(el => el.addEventListener('click', () => { state.editingUser = state.users.find(u => u.id === el.dataset.editUser); render(); }));
  document.querySelectorAll('[data-delete-user]').forEach(el => el.addEventListener('click', async () => {
    if (!confirm('Supprimer ce compte vendeur ?')) return;
    const u = state.users.find(uu => uu.id === el.dataset.deleteUser);
    state.users = state.users.filter(u => u.id !== el.dataset.deleteUser);
    await saveUsers(); await logOperation('Suppression compte', u ? u.username : '');
    render();
  }));
  const cancelUserModal = document.getElementById('cancelUserModal');
  if (cancelUserModal) cancelUserModal.addEventListener('click', () => { state.editingUser = null; render(); });
  const userModalOverlay = document.getElementById('userModalOverlay');
  if (userModalOverlay) userModalOverlay.addEventListener('click', (e) => { if (e.target === userModalOverlay) { state.editingUser = null; render(); } });
  const saveUserModal = document.getElementById('saveUserModal');
  if (saveUserModal) saveUserModal.addEventListener('click', async () => {
    const name = document.getElementById('u_name').value.trim();
    const username = document.getElementById('u_username').value.trim();
    const pass = document.getElementById('u_pass').value;
    if (!name || !username) { toast('Nom et identifiant requis'); return; }
    const dup = state.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.id !== (state.editingUser === 'new' ? null : state.editingUser.id));
    if (dup) { toast('Cet identifiant est déjà utilisé'); return; }
    const readModule = (mod) => {
      const m = {};
      PRIV_ACTIONS.forEach(a => { const el = document.getElementById(`priv_${mod}_${a}`); m[a] = el ? el.checked : false; });
      return m;
    };
    const privileges = {
      products: { ...readModule('products'), viewCosts: document.getElementById('priv_products_costs').checked },
      clients: readModule('clients'),
      payments: readModule('payments'),
    };
    if (state.editingUser === 'new') {
      if (!pass) { toast('Mot de passe requis'); return; }
      state.users.push({ id: uid('u'), name, username, passwordHash: hashPassword(pass), role: 'vendeur', privileges });
      toast('Compte créé'); await logOperation('Création compte vendeur', username);
    } else {
      Object.assign(state.editingUser, { name, username, privileges });
      if (pass) state.editingUser.passwordHash = hashPassword(pass);
      toast('Compte mis à jour'); await logOperation('Modification compte vendeur', username);
    }
    await saveUsers(); state.editingUser = null; render();
  });

  /* Settings tabs & profile */
  document.querySelectorAll('[data-settings-tab]').forEach(el => el.addEventListener('click', () => { state.settingsTab = el.dataset.settingsTab; render(); }));
  const saveProfileBtn = document.getElementById('saveProfileBtn');
  if (saveProfileBtn) saveProfileBtn.addEventListener('click', async () => {
    const u = currentUser();
    const name = document.getElementById('prof_name').value.trim();
    const username = document.getElementById('prof_username').value.trim();
    const pass = document.getElementById('prof_pass').value;
    if (!name || !username) { toast('Nom et identifiant requis'); return; }
    const dup = state.users.find(x => x.username.toLowerCase() === username.toLowerCase() && x.id !== u.id);
    if (dup) { toast('Cet identifiant est déjà utilisé'); return; }
    u.name = name; u.username = username;
    if (pass) { if (pass.length < 4) { toast('Mot de passe trop court (min. 4 caractères)'); return; } u.passwordHash = hashPassword(pass); }
    await saveUsers(); await logOperation('Modification profil', username);
    toast('Profil mis à jour'); render();
  });
  const exportOplogBtn = document.getElementById('exportOplogBtn');
  if (exportOplogBtn) exportOplogBtn.addEventListener('click', exportOplogXLSX);
  const backupBtn = document.getElementById('backupBtn');
  if (backupBtn) backupBtn.addEventListener('click', async () => { downloadBackup(); await logOperation('Sauvegarde exportée', ''); });
  const restoreBtn = document.getElementById('restoreBtn');
  const restoreFile = document.getElementById('restoreFile');
  if (restoreBtn && restoreFile) {
    restoreBtn.addEventListener('click', () => restoreFile.click());
    restoreFile.addEventListener('change', (e) => { if (e.target.files[0]) restoreFromFile(e.target.files[0]); });
  }

  /* POS */
  const posSearch = document.getElementById('posSearch');
  if (posSearch) posSearch.addEventListener('input', (e) => { state.posSearch = e.target.value; refreshPOS(); });
  const scanPosBtn = document.getElementById('scanPosBtn');
  if (scanPosBtn) scanPosBtn.addEventListener('click', () => openScanner('pos'));
  document.querySelectorAll('[data-pos-cat]').forEach(el => el.addEventListener('click', () => { state.posCategory = el.dataset.posCat; refreshPOS(); }));
  document.querySelectorAll('[data-add-cart]').forEach(el => el.addEventListener('click', () => {
    const id = el.dataset.addCart; const p = state.products.find(pp => pp.id === id);
    if (!p || p.stock <= 0) return;
    bumpCartLine(id, 1, p.stock);
    state.posPaidOverride = null;
    refreshPOS();
  }));
  document.querySelectorAll('[data-cart-inc]').forEach(el => el.addEventListener('click', () => {
    const p = state.products.find(pp => pp.id === el.dataset.cartInc);
    if (p) bumpCartLine(el.dataset.cartInc, 1, p.stock);
    state.posPaidOverride = null; refreshPOS();
  }));
  document.querySelectorAll('[data-cart-dec]').forEach(el => el.addEventListener('click', () => {
    const line = state.posCart.find(l => l.productId === el.dataset.cartDec);
    if (line) { line.qty--; if (line.qty <= 0) state.posCart = state.posCart.filter(l => l !== line); }
    state.posPaidOverride = null; refreshPOS();
  }));
  document.querySelectorAll('[data-cart-remove]').forEach(el => el.addEventListener('click', () => {
    state.posCart = state.posCart.filter(l => l.productId !== el.dataset.cartRemove);
    state.posPaidOverride = null; refreshPOS();
  }));
  const clearCart = document.getElementById('clearCart');
  if (clearCart) clearCart.addEventListener('click', () => { state.posCart = []; state.posPaidOverride = null; state.posDiscount = ''; refreshPOS(); });
  const paymentMethod = document.getElementById('paymentMethod');
  if (paymentMethod) paymentMethod.addEventListener('change', (e) => { state.posPayment = e.target.value; });
  const posClient = document.getElementById('posClient');
  if (posClient) posClient.addEventListener('change', (e) => {
    state.posClientId = e.target.value;
    const c = state.clients.find(cc => cc.id === e.target.value);
    state.posClientCodeInput = c ? (c.clientCode || '') : '';
    refreshPOS();
  });
  const posClientCode = document.getElementById('posClientCode');
  if (posClientCode) posClientCode.addEventListener('input', (e) => {
    const value = e.target.value;
    state.posClientCodeInput = value;
    const query = value.trim().toLowerCase();
    if (!query) { state.posClientId = ''; }
    else {
      const match = state.clients.find(c => (c.clientCode || '').toLowerCase() === query);
      if (match) state.posClientId = match.id;
    }
    refreshPOS();
  });
  const posPaidAmount = document.getElementById('posPaidAmount');
  if (posPaidAmount) posPaidAmount.addEventListener('input', (e) => { state.posPaidOverride = sanitizeDecimal(e.target.value); refreshPOS(); });
  const posDiscount = document.getElementById('posDiscount');
  if (posDiscount) posDiscount.addEventListener('input', (e) => { state.posDiscount = sanitizeDecimal(e.target.value); state.posPaidOverride = null; refreshPOS(); });

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', async () => {
    if (state.posCart.length === 0) return;
    const payment = state.posPayment;
    const clientId = state.posClientId || null;
    const items = state.posCart.map(l => { const p = state.products.find(pp => pp.id === l.productId); return { productId: p.id, name: p.name, qty: l.qty, price: p.sellPrice }; });
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const discount = Math.max(0, Math.min(parseFloat(state.posDiscount) || 0, subtotal));
    const total = subtotal - discount;
    let paidAmount = state.posPaidOverride === null ? total : Math.max(0, Math.min(parseFloat(state.posPaidOverride) || 0, total));
    if (paidAmount < total && !clientId) { toast('Un client doit être sélectionné pour une vente à crédit (paiement partiel)'); return; }
    const u = currentUser();
    const sale = {
      id: uid('s'), number: nextSaleNumber(), date: new Date().toISOString(), items, subtotal, discount, total, payment, clientId, paidAmount,
      sellerId: u ? u.id : null, sellerName: u ? (u.name || u.username) : '—',
    };
    state.sales.push(sale);
    items.forEach(it => { const p = state.products.find(pp => pp.id === it.productId); if (p) p.stock = Math.max(0, p.stock - it.qty); });
    await Promise.all([saveSales(), saveProducts()]);
    await logOperation('Vente encaissée', `Bon N°${sale.number} · ${money(total)} DH · ${items.length} article(s)`);
    state.posCart = []; state.posPayment = 'Espèces'; state.posClientId = ''; state.posClientCodeInput = ''; state.posPaidOverride = null; state.posDiscount = '';
    state.receiptSale = sale;
    render();
    toast(`Vente encaissée · ${money(total)} DH`);
  });

  /* Print receipt */
  document.querySelectorAll('[data-print-sale]').forEach(el => el.addEventListener('click', () => {
    const s = state.sales.find(x => x.id === el.dataset.printSale);
    if (s) { state.receiptSale = s; render(); }
  }));
  const closeReceiptModal = document.getElementById('closeReceiptModal');
  if (closeReceiptModal) closeReceiptModal.addEventListener('click', () => { state.receiptSale = null; render(); });
  const receiptModalOverlay = document.getElementById('receiptModalOverlay');
  if (receiptModalOverlay) receiptModalOverlay.addEventListener('click', (e) => { if (e.target === receiptModalOverlay) { state.receiptSale = null; render(); } });
  const printReceiptBtn = document.getElementById('printReceiptBtn');
  if (printReceiptBtn) printReceiptBtn.addEventListener('click', () => {
    const s = state.receiptSale; const client = state.clients.find(c => c.id === s.clientId);
    printHTML(buildReceiptHTML(s, client));
  });

  /* Invoice */
  const openInvoiceBtn = document.getElementById('openInvoiceBtn');
  if (openInvoiceBtn) openInvoiceBtn.addEventListener('click', () => { state.invoiceDraft = { clientId: '', from: '', to: '', saleIds: null }; render(); });
  const closeInvoiceModal = document.getElementById('closeInvoiceModal');
  if (closeInvoiceModal) closeInvoiceModal.addEventListener('click', () => { state.invoiceDraft = null; render(); });
  const invoiceModalOverlay = document.getElementById('invoiceModalOverlay');
  if (invoiceModalOverlay) invoiceModalOverlay.addEventListener('click', (e) => { if (e.target === invoiceModalOverlay) { state.invoiceDraft = null; render(); } });
  const inv_apply = document.getElementById('inv_apply');
  if (inv_apply) inv_apply.addEventListener('click', () => {
    state.invoiceDraft = {
      clientId: document.getElementById('inv_client').value,
      from: document.getElementById('inv_from').value,
      to: document.getElementById('inv_to').value,
      saleIds: null,
    };
    render();
  });
  const printInvoiceBtn = document.getElementById('printInvoiceBtn');
  if (printInvoiceBtn) printInvoiceBtn.addEventListener('click', async () => {
    const d = state.invoiceDraft;
    const client = state.clients.find(c => c.id === d.clientId);
    if (!client) return;
    const sales = invoiceSalesFor(d);
    if (sales.length === 0) return;
    printHTML(buildInvoiceHTML(client, sales, d.from, d.to));
    const total = sales.reduce((s, x) => s + x.total, 0);
    const paid = sales.reduce((s, x) => s + effectivePaidAmount(x), 0);
    const record = { id: uid('inv'), number: nextInvoiceNumber(), date: new Date().toISOString(), clientId: client.id, saleIds: sales.map(s => s.id), total, paid };
    state.invoices.push(record);
    await saveInvoices();
    await logOperation('Facture générée', `FAC-${String(record.number).padStart(4, '0')} · ${esc(client.name)} · ${money(total)} DH`);
  });

  /* Generate invoice from selected bons (client ledger) */
  const selectAllBons = document.getElementById('selectAllBons');
  if (selectAllBons) selectAllBons.addEventListener('change', (e) => {
    document.querySelectorAll('.bon-check').forEach(cb => { cb.checked = e.target.checked; });
  });
  const genInvoiceFromSelection = document.getElementById('genInvoiceFromSelection');
  if (genInvoiceFromSelection) genInvoiceFromSelection.addEventListener('click', () => {
    const ids = Array.from(document.querySelectorAll('.bon-check:checked')).map(cb => cb.value);
    if (ids.length === 0) { toast('Sélectionnez au moins un bon'); return; }
    state.invoiceDraft = { clientId: state.ledgerClientId, from: null, to: null, saleIds: ids };
    render();
  });

  /* Invoice history (reprint) */
  document.querySelectorAll('[data-reprint-invoice]').forEach(el => el.addEventListener('click', () => {
    const inv = state.invoices.find(i => i.id === el.dataset.reprintInvoice);
    if (!inv) return;
    const client = state.clients.find(c => c.id === inv.clientId);
    if (!client) { toast('Client introuvable pour cette facture'); return; }
    const sales = inv.saleIds.map(id => state.sales.find(s => s.id === id)).filter(Boolean).sort((a, b) => new Date(a.date) - new Date(b.date));
    printHTML(buildInvoiceHTML(client, sales, null, null));
  }));

  /* History tabs */
  document.querySelectorAll('[data-history-tab]').forEach(el => el.addEventListener('click', () => { state.historyTab = el.dataset.historyTab; render(); }));

  /* Sales history filters */
  const hf_status = document.getElementById('hf_status');
  if (hf_status) hf_status.addEventListener('change', (e) => { state.historyFilters.status = e.target.value; refreshContent(); });
  const hf_seller = document.getElementById('hf_seller');
  if (hf_seller) hf_seller.addEventListener('change', (e) => { state.historyFilters.sellerId = e.target.value; refreshContent(); });
  const hf_client = document.getElementById('hf_client');
  if (hf_client) hf_client.addEventListener('change', (e) => { state.historyFilters.clientId = e.target.value; refreshContent(); });
  const hf_from = document.getElementById('hf_from');
  if (hf_from) hf_from.addEventListener('change', (e) => { state.historyFilters.from = e.target.value; refreshContent(); });
  const hf_to = document.getElementById('hf_to');
  if (hf_to) hf_to.addEventListener('change', (e) => { state.historyFilters.to = e.target.value; refreshContent(); });
  const hf_clear = document.getElementById('hf_clear');
  if (hf_clear) hf_clear.addEventListener('click', () => { state.historyFilters = { status: 'Tous', sellerId: '', clientId: '', from: '', to: '' }; refreshContent(); });

  /* ---------------- Achats: Fournisseurs & Registre ---------------- */
  document.querySelectorAll('[data-purchases-tab]').forEach(el => el.addEventListener('click', () => { state.purchasesTab = el.dataset.purchasesTab; render(); }));

  /* Purchase register filters */
  const pf_supplier = document.getElementById('pf_supplier');
  if (pf_supplier) pf_supplier.addEventListener('change', (e) => { state.purchaseFilters.supplierId = e.target.value; refreshContent(); });
  const pf_from = document.getElementById('pf_from');
  if (pf_from) pf_from.addEventListener('change', (e) => { state.purchaseFilters.from = e.target.value; refreshContent(); });
  const pf_to = document.getElementById('pf_to');
  if (pf_to) pf_to.addEventListener('change', (e) => { state.purchaseFilters.to = e.target.value; refreshContent(); });
  const pf_clear = document.getElementById('pf_clear');
  if (pf_clear) pf_clear.addEventListener('click', () => { state.purchaseFilters = { supplierId: '', from: '', to: '' }; refreshContent(); });

  /* Suppliers */
  const addSupplierBtn = document.getElementById('addSupplierBtn');
  if (addSupplierBtn) addSupplierBtn.addEventListener('click', () => { state.editingSupplier = 'new'; render(); });
  document.querySelectorAll('[data-edit-supplier]').forEach(el => el.addEventListener('click', () => { state.editingSupplier = state.suppliers.find(s => s.id === el.dataset.editSupplier); render(); }));
  document.querySelectorAll('[data-delete-supplier]').forEach(el => el.addEventListener('click', async () => {
    if (!confirm('Supprimer ce fournisseur ?')) return;
    const s = state.suppliers.find(ss => ss.id === el.dataset.deleteSupplier);
    state.suppliers = state.suppliers.filter(ss => ss.id !== el.dataset.deleteSupplier);
    await saveSuppliers(); await logOperation('Suppression fournisseur', s ? s.name : '');
    render();
  }));
  const cancelSupplierModal = document.getElementById('cancelSupplierModal');
  if (cancelSupplierModal) cancelSupplierModal.addEventListener('click', () => { state.editingSupplier = null; render(); });
  const supplierModalOverlay = document.getElementById('supplierModalOverlay');
  if (supplierModalOverlay) supplierModalOverlay.addEventListener('click', (e) => { if (e.target === supplierModalOverlay) { state.editingSupplier = null; render(); } });
  const saveSupplierModal = document.getElementById('saveSupplierModal');
  if (saveSupplierModal) saveSupplierModal.addEventListener('click', async () => {
    const name = document.getElementById('sup_name').value.trim();
    if (!name) { toast('Le nom du fournisseur est requis'); return; }
    const code = document.getElementById('sup_code').value.trim() || nextSupplierCode();
    const dup = state.suppliers.find(s => s.code === code && s.id !== (state.editingSupplier === 'new' ? null : state.editingSupplier.id));
    if (dup) { toast('Cet identifiant fournisseur est déjà utilisé'); return; }
    const data = {
      name, code, phone: document.getElementById('sup_phone').value.trim(), email: document.getElementById('sup_email').value.trim(),
      address: document.getElementById('sup_address').value.trim(), notes: document.getElementById('sup_notes').value.trim(),
    };
    if (state.editingSupplier === 'new') { state.suppliers.push({ id: uid('sup'), ...data }); toast('Fournisseur ajouté'); await logOperation('Ajout fournisseur', name); }
    else { Object.assign(state.editingSupplier, data); toast('Fournisseur mis à jour'); await logOperation('Modification fournisseur', name); }
    await saveSuppliers(); state.editingSupplier = null; render();
  });

  /* Purchase register */
  const addPurchaseBtn = document.getElementById('addPurchaseBtn');
  if (addPurchaseBtn) addPurchaseBtn.addEventListener('click', () => {
    state.purchaseDraftLines = [{ id: uid('pl'), productId: '', qty: '', unitCost: '' }];
    state.editingPurchase = 'new';
    render();
  });
  const cancelPurchaseModal = document.getElementById('cancelPurchaseModal');
  if (cancelPurchaseModal) cancelPurchaseModal.addEventListener('click', () => { state.editingPurchase = null; state.purchaseDraftLines = null; render(); });
  const purchaseModalOverlay = document.getElementById('purchaseModalOverlay');
  if (purchaseModalOverlay) purchaseModalOverlay.addEventListener('click', (e) => { if (e.target === purchaseModalOverlay) { state.editingPurchase = null; state.purchaseDraftLines = null; render(); } });
  const addPurchaseLine = document.getElementById('addPurchaseLine');
  if (addPurchaseLine) addPurchaseLine.addEventListener('click', () => {
    state.purchaseDraftLines.push({ id: uid('pl'), productId: '', qty: '', unitCost: '' });
    render();
  });
  document.querySelectorAll('[data-remove-line]').forEach(el => el.addEventListener('click', () => {
    if (state.purchaseDraftLines.length <= 1) { toast('Au moins une ligne est requise'); return; }
    state.purchaseDraftLines = state.purchaseDraftLines.filter(l => l.id !== el.dataset.removeLine);
    render();
  }));
  const savePurchaseModal = document.getElementById('savePurchaseModal');
  if (savePurchaseModal) savePurchaseModal.addEventListener('click', async () => {
    const supplierId = document.getElementById('pu_supplier').value || null;
    const date = document.getElementById('pu_date').value || new Date().toISOString().slice(0, 10);
    const note = document.getElementById('pu_note').value.trim();
    const items = [];
    for (const l of state.purchaseDraftLines) {
      const productId = document.getElementById(`pl_product_${l.id}`).value;
      const qty = parseInt(document.getElementById(`pl_qty_${l.id}`).value) || 0;
      const unitCost = parseFloat(document.getElementById(`pl_cost_${l.id}`).value) || 0;
      if (!productId || qty <= 0) continue;
      const p = state.products.find(pp => pp.id === productId);
      if (!p) continue;
      items.push({ productId, name: p.name, qty, unitCost });
    }
    if (items.length === 0) { toast('Ajoutez au moins un produit avec une quantité valide'); return; }
    const total = items.reduce((s, it) => s + it.qty * it.unitCost, 0);
    const purchase = { id: uid('pu'), date: new Date(date).toISOString(), supplierId, items, total, note };
    state.purchases.push(purchase);
    items.forEach(it => {
      const p = state.products.find(pp => pp.id === it.productId);
      if (p) { p.stock += it.qty; if (it.unitCost > 0) p.costPrice = it.unitCost; }
    });
    await Promise.all([savePurchases(), saveProducts()]);
    const sup = state.suppliers.find(s => s.id === supplierId);
    await logOperation('Achat enregistré', `${money(total)} DH · ${items.length} produit(s)${sup ? ' · ' + sup.name : ''}`);
    state.editingPurchase = null; state.purchaseDraftLines = null;
    toast('Achat enregistré et stock mis à jour');
    render();
  });
}

function refreshContent() {
  const c = document.getElementById('content');
  if (!c) return;
  const active = document.activeElement;
  const activeId = active && c.contains(active) ? active.id : null;
  // Reading .selectionStart throws a DOMException on number/date/email inputs
  // in real browsers (unlike text inputs) — must be wrapped, or the exception
  // aborts this function before the re-render even happens.
  let selStart = null, selEnd = null;
  if (active) {
    try { selStart = active.selectionStart; selEnd = active.selectionEnd; }
    catch (e) { selStart = null; selEnd = null; }
  }
  c.innerHTML = renderView();
  bindEvents();
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.focus();
      if (selStart !== null) {
        try { el.setSelectionRange(selStart, selEnd); } catch (e) {}
      }
    }
  }
}
function refreshPOS() { refreshContent(); }

/* ============================================================
   Barcode scanner (Produits & Caisse)
   Lives outside #root in its own #scannerOverlay node so that the
   live camera stream is never destroyed by the app's normal render()
   cycle (which replaces #root's innerHTML wholesale).
   ============================================================ */
let scannerInstance = null;
let scannerRunning = false;
let scannerContext = null; // 'products' | 'pos'
let lastScanCode = null;
let lastScanTime = 0;

function scannerModalHTML() {
  return `
    <div class="modal-overlay" id="scannerModalOverlay">
      <div class="modal">
        <h2>Scanner un code-barres</h2>
        <div id="scannerReader" class="scanner-reader"></div>
        <div class="scanner-controls">
          <button class="btn btn-primary" id="scannerStartBtn">${ICONS.scan}Démarrer la caméra</button>
          <button class="btn" id="scannerStopBtn" style="display:none;">Arrêter</button>
        </div>
        <div class="field" style="margin-top:12px;">
          <label>Ou saisir le code manuellement</label>
          <div style="display:flex;gap:8px;">
            <input type="text" id="scannerManualInput" placeholder="Code-barres / SKU" autocomplete="off">
            <button class="btn" id="scannerManualBtn">Valider</button>
          </div>
        </div>
        <div class="scanner-status" id="scannerStatusText"></div>
        <div class="modal-actions">
          <button class="btn" id="scannerCloseBtn">Fermer</button>
        </div>
      </div>
    </div>`;
}

function openScanner(context) {
  scannerContext = context;
  const overlay = document.getElementById('scannerOverlay');
  overlay.innerHTML = scannerModalHTML();
  overlay.style.display = 'flex';
  bindScannerEvents();
  setScannerStatus(context === 'pos'
    ? 'Scannez un article pour l’ajouter au panier, ou saisissez son code manuellement.'
    : 'Scannez le code du produit, ou saisissez-le manuellement.');
}

async function closeScanner() {
  await stopScannerCamera();
  const overlay = document.getElementById('scannerOverlay');
  overlay.style.display = 'none';
  overlay.innerHTML = '';
  scannerContext = null;
}

function setScannerStatus(msg, isError) {
  const el = document.getElementById('scannerStatusText');
  if (el) { el.textContent = msg; el.style.color = isError ? 'var(--danger)' : 'var(--muted)'; }
}

function bindScannerEvents() {
  document.getElementById('scannerCloseBtn').addEventListener('click', closeScanner);
  document.getElementById('scannerModalOverlay').addEventListener('click', (e) => { if (e.target.id === 'scannerModalOverlay') closeScanner(); });
  document.getElementById('scannerStartBtn').addEventListener('click', startScannerCamera);
  document.getElementById('scannerStopBtn').addEventListener('click', stopScannerCamera);
  const manualBtn = document.getElementById('scannerManualBtn');
  const manualInput = document.getElementById('scannerManualInput');
  manualBtn.addEventListener('click', () => {
    const code = manualInput.value.trim();
    if (code) { handleScannedCode(code); manualInput.value = ''; }
  });
  manualInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') manualBtn.click(); });
  setTimeout(() => manualInput.focus(), 50);
}

async function startScannerCamera() {
  if (scannerRunning) return;
  setScannerStatus('Activation de la caméra…');
  try {
    if (typeof Html5Qrcode === 'undefined') {
      setScannerStatus('Bibliothèque de scan indisponible — vérifiez votre connexion internet, ou utilisez la saisie manuelle.', true);
      return;
    }
    scannerInstance = new Html5Qrcode('scannerReader');
    await scannerInstance.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 260, height: 140 } },
      (decodedText) => {
        const now = Date.now();
        if (decodedText === lastScanCode && now - lastScanTime < 1800) return; // ignore repeated reads of the same code
        lastScanCode = decodedText; lastScanTime = now;
        handleScannedCode(decodedText);
      },
      () => { /* per-frame decode misses are expected, ignore */ }
    );
    scannerRunning = true;
    const startBtn = document.getElementById('scannerStartBtn');
    const stopBtn = document.getElementById('scannerStopBtn');
    if (startBtn) startBtn.style.display = 'none';
    if (stopBtn) stopBtn.style.display = 'inline-flex';
    setScannerStatus('Caméra active — visez un code-barres.');
  } catch (err) {
    console.error(err);
    setScannerStatus("Impossible d'accéder à la caméra. Autorisez l'accès dans votre navigateur ou utilisez la saisie manuelle.", true);
  }
}

async function stopScannerCamera() {
  if (scannerInstance && scannerRunning) {
    try { await scannerInstance.stop(); scannerInstance.clear(); } catch (e) {}
  }
  scannerRunning = false;
  const startBtn = document.getElementById('scannerStartBtn');
  const stopBtn = document.getElementById('scannerStopBtn');
  if (startBtn) startBtn.style.display = 'inline-flex';
  if (stopBtn) stopBtn.style.display = 'none';
}

function handleScannedCode(code) {
  const trimmed = code.trim();
  if (!trimmed) return;
  const product = state.products.find(p => p.sku && p.sku.toLowerCase() === trimmed.toLowerCase());
  playScanBeep();

  if (scannerContext === 'pos') {
    if (product) {
      if (product.stock <= 0) { setScannerStatus(`Rupture de stock : ${product.name}`, true); return; }
      bumpCartLine(product.id, 1, product.stock);
      state.posPaidOverride = null;
      refreshPOS(); // only touches #content inside #root — the scanner overlay is untouched
      setScannerStatus(`✓ Ajouté au panier : ${product.name}`);
    } else {
      setScannerStatus(`Aucun produit trouvé avec le code "${trimmed}".`, true);
    }
  } else if (scannerContext === 'products') {
    if (product) {
      closeScanner();
      state.editingProduct = product;
      render();
      toast('Produit existant trouvé : ' + product.name);
    } else {
      closeScanner();
      state.editingProduct = 'new';
      render();
      setTimeout(() => { const el = document.getElementById('f_sku'); if (el) el.value = trimmed; }, 30);
      toast('Nouveau produit — code pré-rempli, complétez les informations');
    }
  }
}

function playScanBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 880;
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    osc.start(); osc.stop(ctx.currentTime + 0.09);
  } catch (e) {}
}

/* ---------------- Init ---------------- */
loadAll();
