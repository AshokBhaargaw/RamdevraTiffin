/**
 * Ramdevra Tiffin Services - Main Script
 * Lightweight, Fast, High-Converting Interactions & Netlify Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
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
      `Hello Ramdevra Tiffin Services,\n\nI want to order a tiffin meal.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🍱 Meal: ${plan}\n📍 Delivery Address: ${address}\n\nPlease confirm availability & delivery.`
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

    showToast(`Order details received! Directing to WhatsApp/Call...`);

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
    }, 700);
  });
}

// Phone Call Tracking
function initCallTracking() {
  const callButtons = document.querySelectorAll('a[href^="tel:"]');
  callButtons.forEach(btn => {
    btn.addEventListener('click', () => {
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
