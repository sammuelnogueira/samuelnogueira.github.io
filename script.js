// =====================================
// MENU MOBILE - HAMBURGER
// =====================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu ao clicar no hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// =====================================
// NAVBAR - EFEITO AO SCROLL
// =====================================

const navbar = document.querySelector('.navbar');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollPosition = currentScroll;
});

// =====================================
// BOTÃO CTA - SMOOTH SCROLL
// =====================================

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
});

// =====================================
// COURSE CARDS - EFEITO DE HOVER
// =====================================

const courseButtons = document.querySelectorAll('.course-button');

// courseButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         // const courseCard = button.closest('.course-card');
//         // const courseTitle = courseCard.querySelector('h3').textContent;
//         // alert(`Você selecionou: ${courseTitle}\n\nEm breve mais informações!`);
//     });
// });

// =====================================
// MATERIAL CARDS - EFEITO DE CLIQUE
// =====================================

const materialLinks = document.querySelectorAll('.material-link');

materialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const materialCard = link.closest('.material-card');
        const materialTitle = materialCard.querySelector('h3').textContent;
        alert(`Acessando: ${materialTitle}\n\nEm breve o acesso ao material!`);
    });
});

// =====================================
// FORM DE CONTATO
// =====================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[placeholder="Seu nome"]').value;

        // Simulação de envio
        alert(`Obrigado ${name}!\n\nSua mensagem foi recebida. Responderemos em breve!`);

        // Limpar formulário
        contactForm.reset();
    });
}

// =====================================
// ANIMAÇÃO DE SCROLL - ELEMENTOS
// =====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Observar material cards
document.querySelectorAll('.material-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// =====================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================
// CONTADOR ANIMADO - STATS
// =====================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }

        if (isPercentage) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Observar stats
const statsObserverOptions = {
    threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target.querySelector('h3');
            const text = stat.textContent;
            const number = parseInt(text);

            animateCounter(stat, number);
            statsObserver.unobserve(entry.target);
        }
    });
}, statsObserverOptions);

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

function initDarkMode() {
    // Verificar preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Implementar lógica de tema escuro no futuro
}

initDarkMode();


window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;

    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

console.log('Site carregado com sucesso!');
