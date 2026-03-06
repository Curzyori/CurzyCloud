/* =======================================
   CURZY CLOUD — Main Script
   Cart, Language, Animations, WhatsApp Checkout
   ======================================= */

// ===================== DATA =====================
const HOSTING_PLANS = [
    { id: 'r1', name: 'R1', ram: '1GB', disk: '10GB', cpu: 100, price: 10000 },
    { id: 'r2', name: 'R2', ram: '2GB', disk: '15GB', cpu: 200, price: 20000 },
    { id: 'r3', name: 'R3', ram: '3GB', disk: '20GB', cpu: 250, price: 30000 },
    { id: 'r4', name: 'R4', ram: '4GB', disk: '25GB', cpu: 300, price: 40000 },
    { id: 'r6', name: 'R6', ram: '6GB', disk: '35GB', cpu: 400, price: 60000 },
    { id: 'r8', name: 'R8', ram: '8GB', disk: '50GB', cpu: 500, price: 80000, badge: 'Rekomendasi', badgeType: 'recommend' },
    { id: 'r10', name: 'R10', ram: '10GB', disk: '55GB', cpu: 550, price: 100000 },
    { id: 'r14', name: 'R14', ram: '14GB', disk: '65GB', cpu: 650, price: 140000 },
    { id: 'r16', name: 'R16', ram: '16GB', disk: '70GB', cpu: 700, price: 160000, badge: 'Rekomendasi+', badgeType: 'recommend' },
    { id: 'r32', name: 'R32', ram: '32GB', disk: '850GB', cpu: 850, price: 320000, badge: 'Spesial', badgeType: 'special' },
];

const TRANSLATIONS = {
    id: {
        nav_home: "Home",
        nav_hosting: "Hosting",
        nav_automation: 'Automation',
        nav_info: 'Info Server',
        nav_contact: 'Kontak',
        hero_badge: 'Server Hosting & Automation',
        hero_subtitle: 'Solusi hosting game server terbaik dengan performa tinggi, harga terjangkau, dan dukungan 24/7.',
        hero_btn_hosting: 'Lihat Pricelist',
        hero_btn_automation: 'Automation',
        stat_uptime: 'Uptime',
        stat_users: 'Pengguna',
        stat_support: 'Support',
        info_tag: 'Mengapa Kami?',
        info_title: 'Keunggulan Server Kami',
        info_sg_title: 'Server Singapore',
        info_sg_desc: 'Lokasi server strategis di Singapore untuk latensi rendah ke Asia Tenggara.',
        info_ping_title: 'Ping Stable / Hijau',
        info_ping_desc: 'Koneksi stabil dengan ping rendah, memastikan pengalaman gaming yang lancar.',
        info_ddos_title: 'Anti DDoS',
        info_ddos_desc: 'Perlindungan DDoS tingkat lanjut untuk menjaga server tetap online.',
        info_active_title: 'Masa Aktif 25 Hari',
        info_active_desc: 'Semua paket hosting memiliki masa aktif 25 hari yang bisa diperpanjang.',
        info_garansi_title: 'Garansi 7 Hari',
        info_garansi_desc: 'Garansi penuh 7 hari. Tidak puas? Uang kembali!',
        info_backup_title: 'Free Auto Backup',
        info_backup_desc: 'Backup otomatis 24/7 ke Google Drive secara gratis untuk semua paket.',
        hosting_tag: 'Pricelist',
        hosting_title: 'Hosting Server',
        hosting_desc: 'Pilih paket hosting yang sesuai dengan kebutuhan server kamu.',
        port_desc: 'Tambahkan port custom untuk server kamu',
        btn_add: 'Tambah',
        btn_add_cart: 'Tambah ke Keranjang',
        auto_tag: 'Scripts',
        auto_title: 'Automation',
        auto_desc: 'Script otomatis untuk mempermudah pengelolaan server dan bot kamu.',
        auto_badge_popular: 'Populer',
        auto_badge_new: 'Baru',
        auto1_desc: 'Bot WhatsApp otomatis dengan fitur absensi dan anti deleted chat. Tidak pernah kehilangan pesan penting lagi.',
        auto1_f1: 'Auto Absen Otomatis',
        auto1_f2: 'Anti Deleted Chat',
        auto1_f3: 'Setup Mudah',
        auto1_f4: 'Support 24/7',
        auto2_desc: 'Backup VPS otomatis ke Google Drive. Data aman, tidur nyenyak. Script yang berjalan 24/7.',
        auto2_f1: 'Backup Otomatis 24/7',
        auto2_f2: 'Ke Google Drive',
        auto2_f3: 'Jadwal Fleksibel',
        auto2_f4: 'Notifikasi Status',
        cart_title: 'Keranjang',
        cart_empty: 'Keranjang kosong',
        cart_total: 'Total',
        cart_payment: 'Metode Pembayaran',
        cart_pay: 'BAYAR',
        footer_desc: 'Solusi hosting game server dan automation terbaik di Indonesia.',
        footer_social: 'Social Media',
        toast_added: 'ditambahkan ke keranjang!',
        toast_removed: 'dihapus dari keranjang',
        toast_select_payment: 'Pilih metode pembayaran!',
        toast_cart_empty: 'Keranjang masih kosong!',
        spec_ram: 'Ram',
        spec_disk: 'Disk',
        spec_cpu: 'CPU',
        period: '/ 25 hari',
    },
    en: {
        nav_home: "Home",
        nav_hosting: "Hosting",
        nav_automation: 'Automation',
        nav_info: 'Server Info',
        nav_contact: 'Contact',
        hero_badge: 'Server Hosting & Automation',
        hero_subtitle: 'The best game server hosting solution with high performance, affordable prices, and 24/7 support.',
        hero_btn_hosting: 'View Pricelist',
        hero_btn_automation: 'Automation',
        stat_uptime: 'Uptime',
        stat_users: 'Users',
        stat_support: 'Support',
        info_tag: 'Why Us?',
        info_title: 'Our Server Advantages',
        info_sg_title: 'Singapore Server',
        info_sg_desc: 'Strategic server location in Singapore for low latency to Southeast Asia.',
        info_ping_title: 'Stable Ping / Green',
        info_ping_desc: 'Stable connection with low ping, ensuring a smooth gaming experience.',
        info_ddos_title: 'Anti DDoS',
        info_ddos_desc: 'Advanced DDoS protection to keep your server online.',
        info_active_title: '25-Day Active Period',
        info_active_desc: 'All hosting packages have a 25-day active period that can be extended.',
        info_garansi_title: '7-Day Guarantee',
        info_garansi_desc: 'Full 7-day guarantee. Not satisfied? Money back!',
        info_backup_title: 'Free Auto Backup',
        info_backup_desc: 'Automatic 24/7 backup to Google Drive for free on all packages.',
        hosting_tag: 'Pricelist',
        hosting_title: 'Server Hosting',
        hosting_desc: 'Choose the hosting package that suits your server needs.',
        port_desc: 'Add a custom port for your server',
        btn_add: 'Add',
        btn_add_cart: 'Add to Cart',
        auto_tag: 'Scripts',
        auto_title: 'Automation',
        auto_desc: 'Automated scripts to simplify server and bot management.',
        auto_badge_popular: 'Popular',
        auto_badge_new: 'New',
        auto1_desc: 'Automatic WhatsApp bot with attendance and anti-deleted chat features. Never lose important messages again.',
        auto1_f1: 'Auto Attendance',
        auto1_f2: 'Anti Deleted Chat',
        auto1_f3: 'Easy Setup',
        auto1_f4: '24/7 Support',
        auto2_desc: 'Automatic VPS backup to Google Drive. Safe data, sleep well. Script running 24/7.',
        auto2_f1: 'Automatic 24/7 Backup',
        auto2_f2: 'To Google Drive',
        auto2_f3: 'Flexible Schedule',
        auto2_f4: 'Status Notifications',
        cart_title: 'Cart',
        cart_empty: 'Cart is empty',
        cart_total: 'Total',
        cart_payment: 'Payment Method',
        cart_pay: 'PAY',
        footer_desc: 'The best game server hosting and automation solution in Indonesia.',
        footer_social: 'Social Media',
        toast_added: 'added to cart!',
        toast_removed: 'removed from cart',
        toast_select_payment: 'Please select a payment method!',
        toast_cart_empty: 'Cart is still empty!',
        spec_ram: 'Ram',
        spec_disk: 'Disk',
        spec_cpu: 'CPU',
        period: '/ 25 days',
    }
};

// ===================== STATE =====================
let currentLang = 'id';
let cart = [];

// ===================== DOM ELEMENTS =====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollReveal();
    renderPricingCards();
    initNavbar();
    initCart();
    initLanguageToggle();
    animateCounters();
});

// ===================== PARTICLES =====================
function createParticles() {
    const container = $('#particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 10) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.width = (2 + Math.random() * 3) + 'px';
        p.style.height = p.style.width;
        container.appendChild(p);
    }
}

// ===================== PRICING CARDS =====================
function renderPricingCards() {
    const grid = $('#pricingGrid');
    if (!grid) return;

    const t = TRANSLATIONS[currentLang];

    grid.innerHTML = HOSTING_PLANS.map(plan => {
        const cardClass = plan.badgeType === 'recommend' ? 'recommended' :
            plan.badgeType === 'special' ? 'special' : '';
        const badgeHTML = plan.badge ?
            `<div class="pricing-badge ${plan.badgeType === 'recommend' ? 'recommend-badge' : 'special-badge'}">${plan.badge}</div>` : '';

        return `
        <div class="pricing-card ${cardClass} reveal">
            ${badgeHTML}
            <div class="pricing-name">${plan.name}</div>
            <div class="pricing-period">${t.period}</div>
            <div class="pricing-price">
                <span class="pricing-currency">IDR</span>
                <span class="pricing-amount">${formatPrice(plan.price)}</span>
            </div>
            <div class="pricing-specs">
                <div class="pricing-spec">
                    <i class="fas fa-memory"></i>
                    <span>${t.spec_ram}</span>
                    <strong>${plan.ram}</strong>
                </div>
                <div class="pricing-spec">
                    <i class="fas fa-hdd"></i>
                    <span>${t.spec_disk}</span>
                    <strong>${plan.disk}</strong>
                </div>
                <div class="pricing-spec">
                    <i class="fas fa-microchip"></i>
                    <span>${t.spec_cpu}</span>
                    <strong>${plan.cpu}%</strong>
                </div>
            </div>
            <button class="btn btn-primary btn-block add-to-cart-btn"
                    data-name="Hosting ${plan.ram}"
                    data-price="${plan.price}"
                    data-type="hosting">
                <i class="fas fa-cart-plus"></i>
                <span data-i18n="btn_add_cart">${t.btn_add_cart}</span>
            </button>
        </div>
        `;
    }).join('');

    // Re-init reveals for new cards
    if (revealObserver) {
        grid.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }

    // Re-bind cart buttons
    bindCartButtons();
}

// ===================== SCROLL REVEAL =====================
let revealObserver;

function initScrollReveal() {
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(el => revealObserver.observe(el));
}

// ===================== NAVBAR =====================
function initNavbar() {
    const navbar = $('#navbar');
    const mobileBtn = $('#mobileMenuBtn');
    const navLinks = $('#navLinks');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = $$('section[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                link.classList.toggle('active', scrollPos >= top && scrollPos < top + height);
            }
        });
    });
}

// ===================== COUNTER ANIMATION =====================
function animateCounters() {
    const counters = $$('.stat-number[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const duration = 2000;
                const start = performance.now();
                const isFloat = target % 1 !== 0;

                const animate = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const current = eased * target;
                    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===================== CART =====================
function initCart() {
    const cartBtn = $('#cartBtn');
    const cartClose = $('#cartClose');
    const overlay = $('#cartOverlay');
    const sidebar = $('#cartSidebar');
    const checkoutBtn = $('#checkoutBtn');

    cartBtn.addEventListener('click', () => openCart());
    cartClose.addEventListener('click', () => closeCart());
    overlay.addEventListener('click', () => closeCart());
    checkoutBtn.addEventListener('click', () => checkout());

    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCart();
    });

    bindCartButtons();
    loadCart();
}

function bindCartButtons() {
    $$('.add-to-cart-btn').forEach(btn => {
        if (btn.hasAttribute('data-bound')) return;
        btn.setAttribute('data-bound', 'true');

        btn.addEventListener('click', () => {
            const name = btn.dataset.name;
            const price = parseInt(btn.dataset.price);
            const type = btn.dataset.type;
            addToCart({ name, price, type });
        });
    });
}

function openCart() {
    $('#cartOverlay').classList.add('open');
    $('#cartSidebar').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    $('#cartOverlay').classList.remove('open');
    $('#cartSidebar').classList.remove('open');
    document.body.style.overflow = '';
}

function addToCart(item) {
    cart.push({ ...item, id: Date.now() + Math.random() });
    saveCart();
    renderCart();
    showToast(`${item.name} ${TRANSLATIONS[currentLang].toast_added}`);
}

function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    if (item) showToast(`${item.name} ${TRANSLATIONS[currentLang].toast_removed}`, 'info');
}

function renderCart() {
    const itemsContainer = $('#cartItems');
    const emptyEl = $('#cartEmpty');
    const footerEl = $('#cartFooter');
    const badge = $('#cartBadge');
    const totalEl = $('#cartTotalAmount');

    badge.textContent = cart.length;
    badge.classList.toggle('show', cart.length > 0);

    if (cart.length === 0) {
        emptyEl.style.display = '';
        footerEl.style.display = 'none';
        // Clear any existing items but keep empty div
        itemsContainer.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    emptyEl.style.display = 'none';
    footerEl.style.display = '';

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.textContent = `IDR ${formatPrice(total)}`;

    // Render items
    const existingItems = itemsContainer.querySelectorAll('.cart-item');
    existingItems.forEach(el => el.remove());

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-type">${item.type}</div>
            </div>
            <div class="cart-item-price">IDR ${formatPrice(item.price)}</div>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        div.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));
        itemsContainer.appendChild(div);
    });
}

function saveCart() {
    sessionStorage.setItem('curzyCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = sessionStorage.getItem('curzyCart');
    if (saved) {
        try { cart = JSON.parse(saved); } catch { cart = []; }
    }
    renderCart();
}

// ===================== CHECKOUT (WHATSAPP) =====================
function checkout() {
    const t = TRANSLATIONS[currentLang];

    if (cart.length === 0) {
        showToast(t.toast_cart_empty, 'warn');
        return;
    }

    const paymentInput = document.querySelector('input[name="payment"]:checked');
    if (!paymentInput) {
        showToast(t.toast_select_payment, 'warn');
        return;
    }

    const paymentMethod = paymentInput.value;
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Build message
    let msg = 'Hallo Admin Saya ingin beli\n\n';
    cart.forEach((item, i) => {
        msg += `${i + 1}. ${item.name}\n`;
    });
    msg += `\nTotal: IDR ${formatPrice(total)}`;
    msg += `\nVia: ${paymentMethod}`;

    // Open WhatsApp (replace with actual admin number)
    const waNumber = "6283132007175"; // Admin WA number
    const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waURL, '_blank');
}

// ===================== LANGUAGE TOGGLE =====================
function initLanguageToggle() {
    const btn = $('#langToggle');
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        applyLanguage();
    });
}

function applyLanguage() {
    const t = TRANSLATIONS[currentLang];
    const flag = $('#langFlag');
    const code = $('#langCode');

    flag.textContent = currentLang === 'id' ? '🇮🇩' : '🇺🇸';
    code.textContent = currentLang === 'id' ? 'ID' : 'EN';

    // Update all data-i18n elements
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });

    // Re-render pricing cards with new language
    renderPricingCards();
    // Re-render cart
    renderCart();
}

// ===================== TOAST NOTIFICATIONS =====================
function showToast(message, type = 'success') {
    const container = $('#toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';

    const iconMap = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warn: 'fas fa-exclamation-triangle',
    };

    toast.innerHTML = `<i class="${iconMap[type] || iconMap.success}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

// ===================== UTILS =====================
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
