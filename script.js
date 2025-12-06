const form = document.getElementById('booking-form');
const success = document.getElementById('form-success');
const orderForm = document.getElementById('order-form');
const orderSuccess = document.getElementById('order-success');

const buildMailto = (data) => {
  const subject = encodeURIComponent(`New booking: ${data.services || "Little Jonny's catering"}`);
  const cardText = data.card ? 'Yes, please enable card payments.' : 'Not requested';
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\nServices: ${data.services}\nCard payments: ${cardText}\nNotes: ${data.notes}`
  );
  return `mailto:info@littlejonnys.co.uk?subject=${subject}&body=${body}`;
};

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    date: form.date.value,
    guests: form.guests.value,
    services: form.services.value,
    notes: form.notes.value.trim(),
    card: form.card.checked,
  };

  if (!data.name || !data.email || !data.phone || !data.date || !data.guests || !data.services) {
    success.textContent = 'Please fill out the required fields.';
    success.style.color = '#ffdb00';
    return;
  }

  const mailto = buildMailto(data);
  window.location.href = mailto;
  success.textContent = 'Thanks! Your email client will open with the booking details—hit send to finish.';
  success.style.color = '#ffdb00';
  form.reset();
});

// Order form builder mirroring the printed price list
orderForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const packageSelections = Array.from(orderForm.querySelectorAll('input[name="packages"]:checked')).map((item) => item.value);

  if (!packageSelections.length) {
    orderSuccess.textContent = 'Choose at least one package so we can lock it in.';
    orderSuccess.style.color = '#ffdb00';
    return;
  }

  const data = {
    name: orderForm['order-name'].value.trim(),
    email: orderForm['order-email'].value.trim(),
    phone: orderForm['order-phone'].value.trim(),
    date: orderForm['order-date'].value,
    guests: orderForm['order-guests'].value,
    notes: orderForm['order-notes'].value.trim(),
    card: orderForm['order-card'].checked,
    packages: packageSelections.join(', '),
  };

  if (!data.name || !data.email || !data.phone || !data.date || !data.guests) {
    orderSuccess.textContent = 'Add your contact, date, and guests so we can reply with timings and payment links.';
    orderSuccess.style.color = '#ffdb00';
    return;
  }

  const cardText = data.card ? 'Card payment requested' : 'Card payment not requested';
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\nPackages: ${data.packages}\nNotes: ${data.notes}\n${cardText}`
  );
  const subject = encodeURIComponent('Little Jonny order form');
  const mailto = `mailto:info@littlejonnys.co.uk?subject=${subject}&body=${body}`;

  window.location.href = mailto;
  orderSuccess.textContent = 'Order captured. Your email client will open with the price list selections—hit send to confirm.';
  orderSuccess.style.color = '#ffdb00';
  orderForm.reset();
});

// Smooth scroll for in-page anchors
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#' || href === '#top') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Menu tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach((btn) => btn.classList.remove('is-active'));
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panel === target);
    });
    tab.classList.add('is-active');
  });
});
