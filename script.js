const form = document.getElementById('booking-form');
const success = document.getElementById('form-success');

const buildMailto = (data) => {
  const subject = encodeURIComponent(`New booking: ${data.services || 'Little Jonny\'s catering'}`);
  const cardText = data.card ? 'Yes, please enable card payments.' : 'Not requested';
  const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\nServices: ${data.services}\nCard payments: ${cardText}\nNotes: ${data.notes}`);
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
    success.style.color = '#f6b336';
    return;
  }

  const mailto = buildMailto(data);
  window.location.href = mailto;
  success.textContent = 'Thanks! Your email client will open with the booking details—hit send to finish.';
  success.style.color = '#f6b336';
  form.reset();
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
