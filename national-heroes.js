// ====================================
// National Heroes Page - JavaScript
// ====================================

// Extended list of National Heroes - Scientists, Teachers, Engineers, Doctors, Economists, Musicians & Nation Builders
const nationalHeroes = [
    {
        name: "Dr. Sarvepalli Radhakrishnan",
        lifespan: "1888 - 1975",
        image: "assets/freedom-fighters/Dr_ Sarvapalli Radhakrishnan.jpg",
        contribution: "Renowned philosopher, teacher, and second President of India. He revolutionized education in India and believed that education shapes the future of nations. His birthday is celebrated as Teachers' Day.",
        quote: "Teachers should be the best minds in the country. The profession of teaching should be the noblest profession.",
        role: "Philosopher, educator, President of India",
        title: "Teacher & Philosopher"
    },
    {
        name: "Dr. Vikram Sarabhai",
        lifespan: "1919 - 1971",
        image: "assets/freedom-fighters/vikram sarabhai.jpg",
        contribution: "Visionary scientist and founder of the Indian Space Research Organization (ISRO). He transformed India's space program and laid the foundation for India's scientific advancement in space technology.",
        quote: "There are dangers in unbridled technological advancement without corresponding human and moral advancement.",
        role: "Scientist, founder of ISRO",
        title: "Father of Indian Space Program"
    },
    {
        name: "Dr. Homi Jehangir Bhabha",
        lifespan: "1909 - 1966",
        image: "assets/freedom-fighters/homijahagir bhabha.jpg",
        contribution: "Distinguished physicist and founder of India's atomic energy program. He established the Tata Institute of Fundamental Research and worked towards India's atomic power development.",
        quote: "Science and its applications are the principal sources of man's material progress in the modern age.",
        role: "Physicist, nuclear scientist",
        title: "Father of Indian Nuclear Program"
    },
    {
        name: "Dr. C.V. Raman",
        lifespan: "1888 - 1970",
        image: "assets/freedom-fighters/cv raman.jpg",
        contribution: "First Indian to win the Nobel Prize in Physics. His discovery of the Raman Effect revolutionized molecular spectroscopy and brought international recognition to Indian science.",
        quote: "What is the use of this knowledge if it is not used for building up the nation?",
        role: "Physicist, Nobel laureate",
        title: "Scientist Extraordinaire"
    },
    {
        name: "Dr. A.P.J. Abdul Kalam",
        lifespan: "1931 - 2015",
        image: "assets/freedom-fighters/dr apj abdulkalam.jpg",
        contribution: "Aerospace scientist and 11th President of India. Known as the 'Missile Man of India', he led India's missile and space programs. His vision transformed India into a scientific superpower.",
        quote: "Dream is not that which comes in sleep, dream is something which removes sleep from the eyes.",
        role: "Aerospace engineer, President of India",
        title: "Missile Man of India"
    },
    {
        name: "Dr. Brijmohan Lall Munjal",
        lifespan: "1923 - 2012",
        image: "assets/freedom-fighters/dr brijmohanlal munjal.jpeg",
        contribution: "Industrialist and founder of Hero Cycles, which became Hero Honda. He revolutionized Indian manufacturing and automobile industry, creating millions of jobs and contributing to economic development.",
        quote: "Quality is not an act, it is a habit. Success is not final, failure is not fatal.",
        role: "Industrialist, engineer, entrepreneur",
        title: "Industrial Pioneer"
    },
    {
        name: "Dr. Rajendra Prasad",
        lifespan: "1884 - 1963",
        image: "assets/freedom-fighters/dr rajendra prasad.jpeg",
        contribution: "First President of India and farmer, he promoted agricultural sciences and development. He played a crucial role in shaping modern India's democratic institutions.",
        quote: "Education is the foundation of every society and nation. It is the most important factor in nation building.",
        role: "First President, freedom fighter",
        title: "Founding President"
    },
    {
        name: "Dr. Verghese Kurien",
        lifespan: "1921 - 2012",
        image: "assets/freedom-fighters/dr verghesh kurien.jpeg",
        contribution: "Father of the White Revolution in India. He founded AMUL and transformed India's dairy industry, making it self-sufficient in milk production and improving farmers' livelihoods.",
        quote: "A Cooperative structure along with technology leads to progress. Technology without heart leads to disasters.",
        role: "Engineer, dairy cooperative pioneer",
        title: "Father of White Revolution"
    },
    {
        name: "Dr. MS Swaminathan",
        lifespan: "1925 - Present",
        image: "assets/freedom-fighters/Ms swaminathan.png",
        contribution: "Geneticist and agriculturist who led the Green Revolution in India. He increased food production dramatically through high-yielding crop varieties and modern farming techniques, saving millions from hunger.",
        quote: "Sustainable agriculture must have its foundation in ecology.",
        role: "Agriculturist, geneticist, Green Revolution architect",
        title: "Father of Green Revolution"
    },
    {
        name: "Ravi Shankar",
        lifespan: "1920 - 2012",
        image: "assets/freedom-fighters/Ravi Shankar.png",
        contribution: "Master musician and sitar virtuoso who brought Indian classical music to the world stage. He served as UNESCO Ambassador for Culture and preserved the rich heritage of Indian classical tradition.",
        quote: "Music is the universal language of mankind. It touches our hearts and enriches our souls.",
        role: "Musician, cultural ambassador",
        title: "Sitarist & Cultural Legend"
    },
    {
        name: "Dr. Pyarimohan Mohapatra",
        lifespan: "1931 - 2019",
        image: "assets/freedom-fighters/dr  pyarimohan mohapatra.jpeg",
        contribution: "Renowned meteorologist and environmental scientist. He contributed significantly to weather forecasting in India and environmental conservation, helping save millions from natural disasters.",
        quote: "Science serves humanity best when it is guided by wisdom and compassion.",
        role: "Meteorologist, environmental scientist",
        title: "Weather Science Pioneer"
    },
    {
        name: "Savitribai Phule",
        lifespan: "1831 - 1897",
        image: "assets/freedom-fighters/savitribaiphule.png",
        contribution: "Pioneer of women's education and social reformer. She opened one of the first schools for girls in India and fought against social evils like child marriage and caste discrimination.",
        quote: "Women's education is the key to the progress and prosperity of a nation.",
        role: "Educator, social reformer, women's rights activist",
        title: "Pioneer of Women's Education"
    },
    {
        name: "Jiddu Krishnamurti",
        lifespan: "1895 - 1986",
        image: "assets/freedom-fighters/jiddu krishnamurti.png",
        contribution: "Philosopher and educator who revolutionized education philosophy in India. He founded schools promoting holistic development and free thinking, influencing generations of educators worldwide.",
        quote: "It is no measure of health to be well adjusted to a profoundly sick society. Education must help us think for ourselves.",
        role: "Philosopher, educator",
        title: "Educational Revolutionary"
    },
    {
        name: "Dr. B.R. Ambedkar",
        lifespan: "1891 - 1956",
        image: "assets/freedom-fighters/ambedkar.jpeg",
        contribution: "Chief Architect of the Indian Constitution and paramount social reformer of modern India. He dedicated his entire life to human dignity, social equality, and the rights of the oppressed. Through his groundbreaking drafting of the Constitution, he enshrined principles of democracy, equality, and justice. As a scholar earning multiple PhDs, he fought tirelessly against caste discrimination and social exploitation. His legacy continues to inspire millions in the struggle for human rights and dignity.",
        quote: "I measure the progress of a community by the degree of progress which women have achieved. Constitutional morality is not a natural sentiment. It has to be cultivated and it has to be reinforced by the various institutions of the State.",
        role: "Chief Architect of the Indian Constitution, social reformer, philosopher, and champion of Dalit rights and human dignity",
        title: "Baba Saheb - Constitutional Architect"
    }
];

// Display Heroes
function displayNationalHeroes() {
    const heroesGrid = document.getElementById('heroesGrid');
    if (!heroesGrid) return;
    
    heroesGrid.innerHTML = '';
    
    nationalHeroes.forEach((hero, index) => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.innerHTML = `
            <div class="hero-image">
                <img src="${hero.image}" alt="${hero.name}" onerror="this.onerror=null; this.parentElement.innerHTML='${hero.name.charAt(0)}'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.style.fontSize='5rem'; this.parentElement.style.color='white';">
            </div>
            <div class="hero-info">
                <h3>${hero.name}</h3>
                <p class="hero-title">${hero.title || ''}</p>
                <p class="hero-lifespan">${hero.lifespan}</p>
                <p class="hero-contribution">${hero.contribution.substring(0, 120)}...</p>
            </div>
        `;
        
        card.addEventListener('click', function() {
            openHeroModal(hero);
        });
        
        heroesGrid.appendChild(card);
    });
}

// Open Hero Modal
function openHeroModal(hero) {
    const modal = document.getElementById('heroModal');
    const modalBody = document.getElementById('modalBody');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <div class="hero-detail-image">
                <img src="${hero.image}" alt="${hero.name}" onerror="this.onerror=null; this.parentElement.innerHTML='${hero.name.charAt(0)}'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.style.fontSize='5rem'; this.parentElement.style.color='white'; this.parentElement.style.borderRadius='50%';">
            </div>
            <h2>${hero.name}</h2>
            ${hero.title ? `<p class="hero-modal-title"><strong>${hero.title}</strong></p>` : ''}
            <p><strong>Lifespan:</strong> ${hero.lifespan}</p>
            <p><strong>Contribution:</strong> ${hero.contribution}</p>
            <p><strong>Role:</strong> ${hero.role}</p>
            <div class="quote-display">"${hero.quote}"</div>
        `;
        
        modal.classList.add('show');
    }
}

// Close Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('heroModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    // Display heroes
    displayNationalHeroes();
    
    // Mobile menu setup
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});

