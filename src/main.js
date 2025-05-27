// Select DOM elements
const header = document.getElementById('header');
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const tabs = document.querySelectorAll('.tab-button');
const animatedElements = document.querySelectorAll('.animate');

// Handle header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('header-scrolled');
  } else {
    header?.classList.remove('header-scrolled');
  }
});

// Toggle mobile menu
menuButton?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinksElements = document.querySelectorAll('.nav-links a');
for (const link of navLinksElements) {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
}

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (const anchor of anchorLinks) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    }
  });
}

// Tab functionality
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    for (const t of tabs) {
      t.classList.remove('active');
    }

    // Add active class to clicked tab
    tab.classList.add('active');

    // Show content related to the active tab
    const tabId = tab.getAttribute('data-tab');
    if (tabId) {
      const scheduleContents = document.querySelectorAll('.schedule-content');
      for (const content of scheduleContents) {
        content.style.display = 'none';
      }

      const activeContent = document.getElementById(tabId);
      if (activeContent) {
        activeContent.style.display = 'block';
      }
    }
  });
}

// Contact form submission
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const formElements = contactForm.elements;
  const name = formElements[0].value;
  const email = formElements[1].value;
  // const subject = formElements[2].value; // Unused variable
  const message = formElements[3].value;

  // Basic form validation
  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Here you would normally send the form data to a backend
  // For this demo, we'll just show a success message
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  contactForm.reset();
});

// Initialize animations
function initAnimations() {
  for (const element of animatedElements) {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      element.style.opacity = '1';
    }
  }
}

// Run animations on page load
window.addEventListener('load', initAnimations);

// Run animations on scroll
window.addEventListener('scroll', initAnimations);

// Countdown timer for the event
function updateCountdown() {
  const eventDate = new Date('April 29, 2025 08:30:00').getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // If event has passed
  if (timeLeft < 0) {
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update countdown if element exists
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    countdownElement.innerHTML = `
      <div>${days}<span>Dias</span></div>
      <div>${hours}<span>Horas</span></div>
      <div>${minutes}<span>Minutos</span></div>
      <div>${seconds}<span>Segundos</span></div>
    `;
  }
}

// Initialize countdown if there's a countdown element
if (document.getElementById('countdown')) {
  setInterval(updateCountdown, 1000);
  updateCountdown();
}
