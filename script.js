const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen.toString());
  });
}

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Booking form handling with Stripe payment link hand-off
const form = document.getElementById('booking-form');
const statusEl = document.querySelector('.form-status');
const stripe = window.Stripe ? window.Stripe('pk_test_replace_with_live_key') : null; // replace with live publishable key
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_replace_with_payment_link';

function validateFormData(data) {
  return (
    data.name &&
    data.email &&
    data.phone &&
    data.eventType &&
    data.date &&
    data.guests &&
    data.location
  );
}

function collectServices() {
  return Array.from(document.querySelectorAll('input[name="services[]"]:checked')).map((box) => box.value);
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const payload = {
    name: formData.get('name')?.toString().trim(),
    email: formData.get('email')?.toString().trim(),
    phone: formData.get('phone')?.toString().trim(),
    eventType: formData.get('eventType')?.toString(),
    date: formData.get('date')?.toString(),
    guests: formData.get('guests')?.toString(),
    location: formData.get('location')?.toString().trim(),
    payment: formData.get('payment')?.toString(),
    message: formData.get('message')?.toString().trim(),
    services: collectServices(),
  };

  if (!validateFormData(payload)) {
    statusEl.textContent = 'Please fill out all required fields before sending your booking.';
    statusEl.style.color = '#f7a300';
    return;
  }

  const summary = `Thanks ${payload.name}! We\'ve received your ${payload.eventType.toLowerCase()} enquiry for ${payload.date} in ${payload.location}.`;
  statusEl.textContent = summary + ' We will email a tailored quote shortly.';
  statusEl.style.color = 'var(--accent-2)';

  // Optional Stripe hand-off for deposits or prepayments
  if (payload.payment === 'Stripe card') {
    // If you have a Stripe payment link or Checkout session, redirect here.
    if (STRIPE_PAYMENT_LINK.includes('replace_with')) {
      console.warn('Replace STRIPE_PAYMENT_LINK with your live payment link.');
    } else {
      window.open(STRIPE_PAYMENT_LINK, '_blank');
    }

    // If using Stripe Checkout session creation via backend, uncomment and implement fetch call below.
    // fetch('/api/create-checkout-session', { method: 'POST', body: JSON.stringify(payload) })
    //   .then((res) => res.json())
    //   .then(({ sessionId }) => stripe?.redirectToCheckout({ sessionId }));
  }

  form.reset();
});
