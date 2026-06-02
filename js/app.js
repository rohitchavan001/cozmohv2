const grid = document.getElementById('grid');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');

let templates = [];
let searchDebounce = null;

function showToast(msg) {
  toast.querySelector('span') ? toast.querySelector('span').textContent = msg : toast.innerHTML = `<span>${msg}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._hideTimeout);
  toast._hideTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(el);
    return ok;
  }
}

function escapeHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function performFilter(instant = false) {
  const apply = () => {
    const query = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;

    const filtered = templates.filter(t => {
      const mSearch = !query ||
        (t.name || '').toLowerCase().includes(query) ||
        (t.tags || '').toLowerCase().includes(query) ||
        (t.category || '').toLowerCase().includes(query);
      const mCat = !cat || t.category === cat;
      return mSearch && mCat;
    });
    render(filtered);
  };

  clearTimeout(searchDebounce);
  if (instant) apply();
  else searchDebounce = setTimeout(apply, 300);
}

// Typing is debounced, dropdown is instant
searchInput.addEventListener('input', () => performFilter(false));
categoryFilter.addEventListener('change', () => performFilter(true));

function render(data) {
  grid.innerHTML = '';
  if (!data || data.length === 0) {
    grid.innerHTML = '<li class="no-results">No templates found.</li>';
    return;
  }

  const frag = document.createDocumentFragment();
  data.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'card';
    if (i < 12) li.style.animationDelay = `${i * 0.05}s`;

    const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%231e293b" width="100%25" height="100%25"/%3E%3C/svg%3E';
    const imgSrc = t.thumbnail ? t.thumbnail : placeholder;

    li.innerHTML = `
      <div class="thumb" style="cursor:pointer">
        <img alt="${escapeHtml(t.name)}" src="${escapeHtml(imgSrc)}" loading="lazy" onerror="this.src='${placeholder}'">
      </div>
      <div class="card-body">
        <div class="card-meta"><span class="category-tag">${escapeHtml(t.category || 'Other')}</span></div>
        <div class="name" style="cursor:pointer">${escapeHtml(t.name)}</div>
        <div class="actions">
          <button class="copy" data-link="${escapeHtml(t.templateLink)}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Link
          </button>
          <button class="delete-btn" data-id="${t.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `;

    li.querySelector('.copy').onclick = async (e) => {
      if (await copyText(e.currentTarget.dataset.link)) showToast('Link copied!');
    };

    li.querySelector('.delete-btn').onclick = (e) => {
      if (!confirm('Delete this template?')) return;
      const id = e.currentTarget.dataset.id;
      templates = templates.filter(item => item.id != id);
      localStorage.setItem('cozmoh_templates', JSON.stringify(templates));
      performFilter(true);
      showToast('Template deleted');
    };

    li.querySelectorAll('.thumb, .name').forEach(el => {
      el.onclick = () => window.open(t.templateLink, '_blank');
    });

    frag.appendChild(li);
  });
  grid.appendChild(frag);
}

// Section Switching
function switchSection(id) {
  const isDash = id === 'dashboard';
  document.getElementById('dashboard-section').className = isDash ? 'active-section' : 'hidden-section';
  document.getElementById('add-template-section').className = isDash ? 'hidden-section' : 'active-section';
  document.getElementById('nav-dashboard').className = isDash ? 'active' : '';
  document.getElementById('nav-add-template').className = isDash ? '' : 'active';
}

document.getElementById('nav-dashboard').onclick = (e) => { e.preventDefault(); switchSection('dashboard'); };
document.getElementById('nav-add-template').onclick = (e) => { e.preventDefault(); switchSection('add-template'); };

// Form
document.getElementById('add-template-form').onsubmit = async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const oldText = btn.textContent;
  btn.textContent = 'Processing...';
  btn.disabled = true;

  try {
    const formData = new FormData(e.target);
    const templateName = (formData.get('template-name') || '').trim();
    let templateLink = (formData.get('template-link') || '').trim();
    let templateCategory = (formData.get('template-category') || '').trim();

    if (!templateName || !templateLink) {
      showToast('Template name and link are required.');
      return;
    }

    // Auto-fix protocol
    if (!/^https?:\/\//i.test(templateLink)) {
      templateLink = "https://" + templateLink;
    }

    // Validate URL format
    try {
      new URL(templateLink);
    } catch (_) {
      showToast('Invalid URL format.');
      return;
    }

    // Check for duplicate
    const isDuplicate = templates.some(t => t.templateLink === templateLink);
    if (isDuplicate) {
      showToast('This template link already exists.');
      return;
    }

    // Auto-generate tags
    let tags = templateName.toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/ /g, ',');

    // Auto-categorization Logic
    if (!templateCategory) {
      const map = {
        'Finance': ['finance', 'bank', 'invest', 'crypto', 'wallet', 'fintech'],
        'Real Estate': ['real estate', 'property', 'apartment', 'realtor', 'estate', 'construction'],
        'Home Decor': ['decor', 'interior', 'furniture', 'home', 'living', 'cleaning'],
        'Health': ['health', 'doctor', 'medical', 'gym', 'fitness', 'yoga', 'dental', 'clinic', 'wellness'],
        'IT Services': ['cyber', 'security', 'software', 'app', 'saas', 'tech', 'hosting', 'cloud'],
        'Digital Marketing': ['marketing', 'seo', 'agency', 'social', 'advertising'],
        'Media Production': ['studio', 'video', 'production', 'film', 'photo', 'creative'],
        'Consultancy': ['consult', 'advisor', 'lawyer', 'legal', 'law'],
        'Education / Training': ['education', 'course', 'school', 'university', 'learn', 'study', 'tutor'],
        'Restaurant & Cafe': ['food', 'restaurant', 'cafe', 'pizza', 'bakery', 'coffee', 'steak', 'wine'],
        'Retail': ['shop', 'store', 'retail', 'fashion', 'clothing', 'shoes', 'barber', 'salon'],
        'Travel': ['travel', 'tour', 'trip', 'hotel', 'resort', 'vacation', 'holiday'],
        'Portfolio': ['portfolio', 'resume', 'cv', 'personal', 'bio'],
        'E-commerce': ['e-commerce', 'cart', 'market', 'wooshop']
      };

      const text = `${templateName} ${tags}`.toLowerCase();
      for (const [cat, keywords] of Object.entries(map)) {
        if (keywords.some(k => text.includes(k))) {
          templateCategory = cat;
          break;
        }
      }
    }

    // Client-side Screenshot generation using Microlink
    let thumbnail = '';
    try {
      const cleanLink = encodeURIComponent(templateLink);
      const res = await fetch(`https://api.microlink.io/?url=${cleanLink}&screenshot.type=jpeg&screenshot.quality=80&meta=false&waitForTimeout=6000`);
      const resData = await res.json();
      if (resData.status === 'success' && resData.data.screenshot && resData.data.screenshot.url) {
        thumbnail = resData.data.screenshot.url;
      }
    } catch (err) {
      console.warn('Could not generate live preview, using default placeholder: ', err);
    }

    // Generate unique ID
    const newId = templates.length > 0 ? Math.max(...templates.map(t => t.id || 0)) + 1 : 1;

    const newTemplate = {
      id: newId,
      name: templateName,
      thumbnail: thumbnail,
      templateLink: templateLink,
      tags: tags,
      category: templateCategory || ''
    };

    templates.push(newTemplate);
    localStorage.setItem('cozmoh_templates', JSON.stringify(templates));

    showToast('Template Added!');
    e.target.reset();
    performFilter(true);
    switchSection('dashboard');
  } catch (err) {
    showToast('An error occurred');
    console.error(err);
  } finally {
    btn.textContent = oldText;
    btn.disabled = false;
  }
};

async function loadTemplates() {
  grid.innerHTML = '<li class="skeleton-card"></li>'.repeat(8);
  await new Promise(resolve => setTimeout(resolve, 300));
  try {
    let localData = localStorage.getItem('cozmoh_templates');
    if (!localData) {
      const initialData = typeof INITIAL_TEMPLATES !== 'undefined' ? INITIAL_TEMPLATES : [];
      localStorage.setItem('cozmoh_templates', JSON.stringify(initialData));
      templates = initialData;
    } else {
      templates = JSON.parse(localData);
    }
    render(templates);
  } catch (e) {
    console.error('Error loading templates:', e);
    grid.innerHTML = '<li class="no-results">Error loading templates from localStorage.</li>';
  }
}

loadTemplates();
