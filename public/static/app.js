// PractiConnect - Frontend JavaScript

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Tab switching
function switchTab(tabId, groupClass) {
  const tabs = document.querySelectorAll('.' + (groupClass || 'tab-content'));
  tabs.forEach(tab => tab.classList.add('hidden'));
  const target = document.getElementById(tabId);
  if (target) target.classList.remove('hidden');

  const buttons = document.querySelectorAll('[data-tab]');
  buttons.forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-gray-100', 'text-gray-600');
  });
  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('bg-blue-600', 'text-white');
    activeBtn.classList.remove('bg-gray-100', 'text-gray-600');
  }
}

// Calendar navigation
let currentCalDate = new Date();

function prevMonth() {
  currentCalDate.setMonth(currentCalDate.getMonth() - 1);
  renderCalendar();
}
function nextMonth() {
  currentCalDate.setMonth(currentCalDate.getMonth() + 1);
  renderCalendar();
}

function renderCalendar() {
  const cal = document.getElementById('calendar-grid');
  if (!cal) return;

  const year = currentCalDate.getFullYear();
  const month = currentCalDate.getMonth();

  const label = document.getElementById('calendar-month-label');
  if (label) {
    label.textContent = `${year}年${month + 1}月`;
  }

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  // Sample slots for demo
  const sampleSlots = {
    5: [{ genre: 'コーチング', time: '10:00', color: 'blue' }],
    10: [{ genre: 'NLP', time: '14:00', color: 'green' }],
    15: [{ genre: 'カウンセリング', time: '19:00', color: 'pink' }],
    20: [{ genre: 'ヒプノ', time: '11:00', color: 'purple' }],
    25: [{ genre: 'コーチング', time: '16:00', color: 'blue' }, { genre: 'NLP', time: '20:00', color: 'green' }],
  };

  let html = '';
  // Day labels
  const days = ['日', '月', '火', '水', '木', '金', '土'];

  // Blank cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="calendar-cell bg-gray-50 opacity-50"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = (today.getFullYear() === year && today.getMonth() === month && today.getDate() === d);
    const slots = sampleSlots[d] || [];
    const hasSlot = slots.length > 0;
    const dayOfWeek = (firstDay + d - 1) % 7;
    const textColor = dayOfWeek === 0 ? 'text-red-500' : dayOfWeek === 6 ? 'text-blue-500' : 'text-gray-800';

    let slotsHtml = slots.map(s => {
      const colors = { blue: 'bg-blue-100 text-blue-700', green: 'bg-green-100 text-green-700', pink: 'bg-pink-100 text-pink-700', purple: 'bg-purple-100 text-purple-700' };
      return `<div class="text-xs rounded px-1 mt-0.5 ${colors[s.color] || 'bg-gray-100'} truncate">${s.time} ${s.genre}</div>`;
    }).join('');

    html += `
      <div class="calendar-cell ${isToday ? 'today' : ''} ${hasSlot ? 'has-slot' : ''}" onclick="openSlotModal(${d})">
        <div class="text-xs font-semibold ${textColor} ${isToday ? 'bg-amber-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs' : ''}">${d}</div>
        ${slotsHtml}
      </div>
    `;
  }

  cal.innerHTML = html;
}

function openSlotModal(day) {
  const modal = document.getElementById('slot-modal');
  if (modal) {
    const label = modal.querySelector('#modal-date-label');
    if (label) {
      label.textContent = `${currentCalDate.getFullYear()}年${currentCalDate.getMonth() + 1}月${day}日`;
    }
    modal.classList.remove('hidden');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
}

// Profile image preview
function previewProfileImage(input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.getElementById('profile-img-preview');
      if (img) img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Genre multi-select
function toggleGenre(el, genre) {
  el.classList.toggle('ring-2');
  el.classList.toggle('ring-blue-500');
  el.classList.toggle('opacity-50');
}

// Search filter
function applyFilter() {
  const genre = document.getElementById('filter-genre')?.value || '';
  const role = document.getElementById('filter-role')?.value || '';
  const tool = document.getElementById('filter-tool')?.value || '';
  const cards = document.querySelectorAll('.member-card');
  
  cards.forEach(card => {
    let show = true;
    if (genre && !card.dataset.genre?.includes(genre)) show = false;
    if (role && card.dataset.role !== role && role !== '') show = false;
    if (tool && !card.dataset.tool?.includes(tool)) show = false;
    card.style.display = show ? 'block' : 'none';
  });
  
  const count = document.getElementById('search-count');
  if (count) {
    const visible = [...cards].filter(c => c.style.display !== 'none').length;
    count.textContent = `${visible}件`;
  }
}

// Notification badge
function markAllRead() {
  const badges = document.querySelectorAll('.notif-badge');
  badges.forEach(b => b.classList.add('hidden'));
  const list = document.getElementById('notif-list');
  if (list) {
    list.querySelectorAll('.unread').forEach(el => {
      el.classList.remove('bg-blue-50');
      el.classList.remove('unread');
    });
  }
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;
  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(el => {
    if (!el.value.trim()) {
      el.classList.add('border-red-500');
      valid = false;
    } else {
      el.classList.remove('border-red-500');
    }
  });
  return valid;
}

// Toast notification
function showToast(message, type = 'success') {
  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-amber-500'
  };
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2 fade-in`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// Password strength
function checkPasswordStrength(val) {
  const bar = document.getElementById('pw-strength');
  if (!bar) return;
  let strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;
  
  const colors = ['bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'];
  const labels = ['弱い', '普通', '強い', 'とても強い'];
  bar.style.width = `${strength * 25}%`;
  bar.className = `h-2 rounded-full transition-all ${colors[strength - 1] || 'bg-gray-200'}`;
  const label = document.getElementById('pw-strength-label');
  if (label && val.length > 0) label.textContent = labels[strength - 1] || '';
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  
  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
