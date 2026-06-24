const downloadBtn = document.getElementById('downloadCv');
const contactBtn = document.getElementById('contactBtn');
const contactPanel = document.getElementById('contactPanel');
const portfolioList = document.getElementById('portfolioList');

const projects = [
    {
        title: 'Responsive Portfolio Site',
        description: 'A modern personal portfolio with animated cards, responsive layout, and custom sections.',
        link: '#'
    },
    {
        title: 'Landing Page Design',
        description: 'A clean landing page for a startup with bold visuals and mobile-first styling.',
        link: '#'
    },
    {
        title: 'Web App Interface',
        description: 'An interactive dashboard concept with chart previews and user controls.',
        link: '#'
    },
    {
        title: 'E-commerce Product Page',
        description: 'A product card layout with clear CTAs, image gallery, and detail sections.',
        link: '#'
    }
];

function createPortfolioCards() {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
    `;
        portfolioList.appendChild(card);
    });
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = './docs/Kinjal_CV.pdf';
    link.download = 'Kinjal_CV.pdf';
    link.click();
}

function showContactInfo() {
    contactPanel.classList.remove('hidden');
    contactPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

if (downloadBtn) {
    downloadBtn.addEventListener('click', event => {
        event.preventDefault();
        downloadCV();
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', event => {
        event.preventDefault();
        showContactInfo();
    });
}

createPortfolioCards();
