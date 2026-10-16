/**
 * Ramdevra Tiffin Services - Main Script
 * High-Converting Interactions & Netlify Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initPricingToggle();
  initWeeklyMenuTabs();
  initFaqAccordion();
  initOrderForm();
  initCallTracking();
});

// Sticky Header Styling on Scroll
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Pricing Plan Toggle: Daily vs Monthly
function initPricingToggle() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const priceElements = document.querySelectorAll('.plan-price');
  const periodElements = document.querySelectorAll('.plan-period');
  const planCards = document.querySelectorAll('.plan-card');

  if (!toggleButtons.length) return;

  const pricingData = {
    daily: [
      { price: '70', period: '/ meal' },
      { price: '120', period: '/ day (Lunch + Dinner)' },
      { price: '150', period: '/ meal' }
    ],
    monthly: [
      { price: '1,999', period: '/ month (Save ₹200)' },
      { price: '3,399', period: '/ month (Save ₹400)' },
      { price: '4,299', period: '/ month (Save ₹600)' }
    ]
  };

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.period; // 'daily' or 'monthly'
      const data = pricingData[mode];

      priceElements.forEach((el, index) => {
        if (data[index]) {
          // Smooth numeric update animation
          el.style.opacity = '0';
          setTimeout(() => {
            el.textContent = data[index].price;
            el.style.opacity = '1';
          }, 150);
        }
      });

      periodElements.forEach((el, index) => {
        if (data[index]) {
          el.textContent = data[index].period;
        }
      });
    });
  });
}

// Weekly Rotating Menu Tabs
function initWeeklyMenuTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const lunchItems = document.getElementById('lunch-menu-items');
  const dinnerItems = document.getElementById('dinner-menu-items');
  const dayNameEl = document.getElementById('current-menu-day');

  if (!tabButtons.length || !lunchItems || !dinnerItems) return;

  const weeklySchedule = {
    mon: {
      day: 'Monday Special',
      lunch: ['4 Desi Ghee Phulka Rotis', 'Aloo Matar Paneer Rasa', 'Yellow Dal Tadka', 'Jeera Rice & Salad', 'Pickle & Roasted Papad'],
      dinner: ['4 Fresh Tawa Rotis', 'Mix Veg Sukha Gravy', 'Moong Dal Fry', 'Steamed Rice', 'Green Mint Chutney']
    },
    tue: {
      day: 'Tuesday Special',
      lunch: ['4 Butter Phulkas', 'Shahi Paneer Gravy', 'Panchmel Dal', 'Jeera Pulao Rice', 'Cucumber Raita & Salad'],
      dinner: ['4 Hot Tawa Rotis', 'Bhindi Masala Fry', 'Chana Dal Fry', 'Steamed Rice', 'Lemon Pickle']
    },
    wed: {
      day: 'Wednesday Special',
      lunch: ['4 Desi Ghee Rotis', 'Traditional Gatte Ki Sabzi', 'Dal Makhani', 'Steamed Basmati Rice', 'Boondi Raita & Salad'],
      dinner: ['4 Fresh Phulkas', 'Aloo Gobi Adraki', 'Toor Dal Tadka', 'Jeera Rice', 'Roasted Papad']
    },
    thu: {
      day: 'Thursday Special',
      lunch: ['4 Soft Chapatis', 'Amritsari Chole Masala', 'Yellow Dal Fry', 'Fragrant Jeera Rice', 'Onion Salad & Pickle'],
      dinner: ['4 Hot Rotis', 'Lauki Kofta Curry', 'Masoor Dal Tadka', 'Steamed Rice', 'Crisp Papad']
    },
    fri: {
      day: 'Friday Special',
      lunch: ['4 Desi Ghee Rotis', 'Kadhi Pakoda Rajasthani Style', 'Aloo Jeera Dry', 'Khichdi / Steamed Rice', 'Papad & Sweet Halwa'],
      dinner: ['4 Fresh Phulkas', 'Sev Tamatar Ki Sabzi', 'Mix Dal Tadka', 'Jeera Rice', 'Green Chutney']
    },
    sat: {
      day: 'Saturday Special',
      lunch: ['4 Butter Phulkas', 'Paneer Do Pyaza', 'Dal Fry with Desi Tadka', 'Peas Pulao', 'Veg Raita & Salad'],
      dinner: ['4 Hot Rotis', 'Rajma Masala Curry', 'Arhar Dal Tadka', 'Steamed Rice', 'Pickle & Papad']
    },
    sun: {
      day: 'Sunday Royal Feast',
      lunch: ['5 Desi Ghee Phulkas / Poori', 'Special Kadhai Paneer', 'Dal Baati Churma / Dal Fry', 'Jeera Pulao', 'Gulab Jamun Sweet (1 pc)'],
      dinner: ['4 Fresh Tawa Rotis', 'Paneer Bhurji / Dum Aloo', 'Moong Dal Tadka', 'Steamed Rice', 'Fresh Salad & Pickle']
    }
  };

  // Set today's day active by default
  const daysMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const todayIndex = new Date().getDay();
  const currentDayKey = daysMap[todayIndex];

  tabButtons.forEach(btn => {
    if (btn.dataset.day === currentDayKey) {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(currentDayKey);
    }

    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.day);
    });
  });

  function renderMenu(dayKey) {
    const data = weeklySchedule[dayKey] || weeklySchedule['mon'];
    if (dayNameEl) dayNameEl.textContent = data.day;

    lunchItems.innerHTML = data.lunch.map(item => `
      <li><i class="ri-checkbox-circle-fill"></i> ${item}</li>
    `).join('');

    dinnerItems.innerHTML = data.dinner.map(item => `
      <li><i class="ri-checkbox-circle-fill"></i> ${item}</li>
    `).join('');
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other items
      faqItems.forEach(i => i.classList.remove('active'));
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Netlify Order & Callback Form with Instant WhatsApp Dialing
function initOrderForm() {
  const form = document.getElementById('tiffin-order-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Request...</span>';
    }

    const formData = new FormData(form);
    const name = formData.get('name') || 'Customer';
    const phone = formData.get('phone') || '';
    const plan = formData.get('plan') || 'Daily Tiffin';
    const address = formData.get('address') || '';

    // Prepare WhatsApp Order link
    const waText = encodeURIComponent(
      `Hello Ramdevra Tiffin Services,\n\nI want to order a tiffin / meal.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🍱 Plan: ${plan}\n📍 Delivery Address: ${address}\n\nPlease confirm availability & delivery time.`
    );
    const waUrl = `https://wa.me/917014372575?text=${waText}`;

    // Netlify Forms AJAX Submission
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
    } catch (err) {
      console.warn('Form offline or fallback:', err);
    }

    showToast(`Order details received! Redirecting to confirm with phone call...`);

    // Reset button
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      form.reset();

      // Open WhatsApp or dialer
      const openWa = confirm(`Order registered! Would you like to confirm instantly on WhatsApp? Click OK for WhatsApp or Cancel to directly call.`);
      if (openWa) {
        window.open(waUrl, '_blank');
      } else {
        window.location.href = 'tel:+917014372575';
      }
    }, 800);
  });
}

// Phone Call Tracking
function initCallTracking() {
  const callButtons = document.querySelectorAll('a[href^="tel:"]');
  callButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Analytics push if configured
      if (typeof gtag === 'function') {
        gtag('event', 'phone_call_click', {
          'event_category': 'conversion',
          'event_label': '7014372575'
        });
      }
      console.log('Customer initiated call to 7014372575');
    });
  });
}

// Toast Helper
function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="ri-check-line" style="color: #22c55e; font-size: 1.4rem;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
