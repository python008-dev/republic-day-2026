
// Patriotic Quotes
const patrioticQuotes = [
    "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge. - Jawaharlal Nehru",
    "Swaraj is my birthright and I shall have it. - Bal Gangadhar Tilak",
    "Inquilab Zindabad! - Bhagat Singh",
    "Give me blood, and I will give you freedom! - Netaji Subhas Chandra Bose",
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "Satyameva Jayate - Truth alone triumphs. - From Mundaka Upanishad",
    "Duniya mein rehna hai to kaam kar Insaan ka, varna zinda rehne ka koi matlab nahi. - Shaheed Bhagat Singh",
    "Freedom is not given, it is taken. - Netaji Subhas Chandra Bose",
    "Unity is strength. When there is teamwork and collaboration, wonderful things can be achieved. - Dr. B.R. Ambedkar",
    "I measure the progress of a community by the degree of progress which women have achieved. - Dr. B.R. Ambedkar",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "Jai Hind! - Netaji Subhas Chandra Bose"
];

// Freedom Fighters Data
const freedomFighters = [
    {
        name: "Mahatma Gandhi",
        lifespan: "1869 - 1948",
        image: "assets/freedom-fighters/gandhi.jpeg",
        contribution: "Father of the Nation, led India's independence movement through non-violent civil disobedience. His philosophy of Satyagraha inspired millions to fight for freedom.",
        quote: "Be the change you wish to see in the world.",
        role: "Leader of India's independence movement, advocate of non-violence and civil disobedience."
    },
    {
        name: "Bhagat Singh",
        lifespan: "1907 - 1931",
        image: "assets/freedom-fighters/bhagat-singh.jpeg",
        contribution: "Revolutionary freedom fighter who sacrificed his life at the age of 23. His courage and sacrifice inspired the youth of India to join the freedom struggle.",
        quote: "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit.",
        role: "Revolutionary socialist who fought against British colonial rule, inspiring generations of Indians."
    },
    {
        name: "Subhas Chandra Bose",
        lifespan: "1897 - 1945",
        image: "assets/freedom-fighters/bose.jpeg",
        contribution: "Netaji led the Indian National Army (INA) and fought against British rule. His famous slogan 'Give me blood, and I will give you freedom' inspired many.",
        quote: "Give me blood, and I will give you freedom!",
        role: "Nationalist leader who formed the Indian National Army to fight for India's independence."
    },
    {
        name: "Rani Lakshmibai",
        lifespan: "1828 - 1858",
        image: "assets/freedom-fighters/rani-lakshamibai.jpeg",
        contribution: "The Queen of Jhansi who bravely fought against British forces during the 1857 rebellion. She is remembered as one of the leading figures of the Indian Rebellion of 1857.",
        quote: "I will not give my Jhansi.",
        role: "Warrior queen who led her forces against the British in the First War of Indian Independence."
    },
    {
        name: "Rani Jhalkaribai",
        lifespan: "1830 - 1858",
        image: "assets/freedom-fighters/rani-lakshamibai.jpeg",
        contribution: "Courageous warrior and close associate of Rani Lakshmibai, she fought valiantly during the Jhansi Rebellion of 1857. Known for her bravery and military skills, she played a crucial role in defending Jhansi against British forces alongside the Queen.",
        quote: "A woman warrior fights not for herself, but for her nation and her honor.",
        role: "Freedom fighter and warrior queen who battled the British in the 1857 rebellion."
    },
    {
        name: "Sardar Vallabhbhai Patel",
        lifespan: "1875 - 1950",
        image: "assets/freedom-fighters/patel.jpeg",
        contribution: "Iron Man of India, played a crucial role in India's independence movement and integration of princely states into the Indian Union after independence.",
        quote: "Manpower without unity is not a strength unless it is harmonized and united properly.",
        role: "First Deputy Prime Minister of India, instrumental in unifying India after independence."
    }
];

// Fundamental Rights
const fundamentalRights = [
    "Right to Equality - All citizens are equal before law and have equal protection of law.",
    "Right to Freedom - Freedom of speech, assembly, association, movement, residence, and profession.",
    "Right against Exploitation - Prohibition of trafficking, forced labor, and child labor.",
    "Right to Freedom of Religion - Freedom to practice, profess, and propagate any religion.",
    "Cultural and Educational Rights - Right to conserve culture and establish educational institutions.",
    "Right to Constitutional Remedies - Right to move to courts for enforcement of fundamental rights.",
    "Right to Life and Personal Liberty - Protection of life and personal liberty except according to procedure established by law."
];

// Fundamental Duties
const fundamentalDuties = [
    "To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem.",
    "To cherish and follow the noble ideals which inspired our national struggle for freedom.",
    "To uphold and protect the sovereignty, unity, and integrity of India.",
    "To defend the country and render national service when called upon to do so.",
    "To promote harmony and the spirit of common brotherhood amongst all people of India.",
    "To value and preserve the rich heritage of our composite culture.",
    "To protect and improve the natural environment including forests, lakes, rivers, and wildlife.",
    "To develop the scientific temper, humanism, and the spirit of inquiry and reform.",
    "To safeguard public property and to abjure violence.",
    "To strive towards excellence in all spheres of individual and collective activity."
];

// Constitution Quotes
const constitutionQuotes = [
    "The Constitution is not a mere lawyers' document, it is a vehicle of Life, and its spirit is always the spirit of Age. - Dr. B.R. Ambedkar",
    "We are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality. - Dr. B.R. Ambedkar",
    "The Constitution of India is the longest written constitution of any sovereign country in the world.",
    "The Preamble to the Constitution of India is a brief introductory statement that sets out the guiding purpose and principles of the document.",
    "Justice, Liberty, Equality, and Fraternity - these are the four pillars of our Constitution."
];

// ====================================
// Quiz Questions Data
// ====================================

const quizQuestions = [
    {
        question: "On which date was the Constitution of India adopted?",
        options: [
            "26 January 1950",
            "15 August 1947",
            "26 January 1949",
            "26 November 1949"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Dr. B.R. Ambedkar",
            "Sardar Vallabhbhai Patel"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "What is the motto of the Republic of India?",
        options: [
            "Vande Mataram",
            "Jai Hind",
            "Satyameva Jayate",
            "Inquilab Zindabad"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "How many spokes does the Ashoka Chakra on the Indian flag have?",
        options: [
            "22",
            "24",
            "26",
            "28"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Which article of the Indian Constitution deals with the Right to Equality?",
        options: [
            "Article 14-18",
            "Article 19-22",
            "Article 23-24",
            "Article 25-28"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "What is the national animal of India?",
        options: [
            "Lion",
            "Tiger",
            "Elephant",
            "Leopard"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Who was the first President of India?",
        options: [
            "Dr. Rajendra Prasad",
            "Dr. S. Radhakrishnan",
            "Jawaharlal Nehru",
            "C. Rajagopalachari"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "The Preamble of the Indian Constitution mentions which four ideals?",
        options: [
            "Justice, Liberty, Equality, Fraternity",
            "Sovereignty, Socialism, Secularism, Democracy",
            "Unity, Integrity, Dignity, Progress",
            "Freedom, Peace, Harmony, Development"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Which freedom fighter is known as 'Netaji'?",
        options: [
            "Bhagat Singh",
            "Subhas Chandra Bose",
            "Chandra Shekhar Azad",
            "Ram Prasad Bismil"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "What is the national bird of India?",
        options: [
            "Peacock",
            "Eagle",
            "Parrot",
            "Swan"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Which year did India become a Republic?",
        options: [
            "1947",
            "1948",
            "1949",
            "1950"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "How many Fundamental Rights are guaranteed by the Indian Constitution?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Which freedom fighter said 'Inquilab Zindabad'?",
        options: [
            "Mahatma Gandhi",
            "Bhagat Singh",
            "Subhas Chandra Bose",
            "Bal Gangadhar Tilak"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "What is the national flower of India?",
        options: [
            "Rose",
            "Lotus",
            "Sunflower",
            "Marigold"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "The Indian Constitution has how many articles?",
        options: [
            "395",
            "400",
            "450",
            "500"
        ],
        correctAnswerIndex: 0
    }
];

// ====================================
// DOM Content Loaded
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ====================================
// Initialization
// ====================================

// Initialize Ashoka Chakra with 24 rotating spokes
function initializeChakraSpokes() {
    const chakraSpokesContainer = document.querySelector('.chakra-spokes');
    
    if (chakraSpokesContainer) {
        // Clear existing content
        chakraSpokesContainer.innerHTML = '';
        
        // Create 24 spokes
        const totalSpokes = 24;
        const anglePerSpoke = 360 / totalSpokes;
        
        for (let i = 0; i < totalSpokes; i++) {
            const spoke = document.createElement('div');
            spoke.className = 'chakra-spoke';
            spoke.style.transform = `rotate(${i * anglePerSpoke}deg)`;
            chakraSpokesContainer.appendChild(spoke);
        }
    }
}

function initializeWebsite() {
    // Navigation
    setupNavigation();
    
    // Mobile Menu
    setupMobileMenu();
    
    // Ashoka Chakra Spokes
    initializeChakraSpokes();
    
    // Today's Significance
    updateTodaysSignificance();
    
    // Quotes
    displayRandomQuote();
    document.getElementById('nextQuoteBtn').addEventListener('click', displayRandomQuote);
    
    // Constitution Snapshot (Home)
    updateConstitutionSnapshot();
    
    // Constitution Section
    updateConstitutionContent();
    
    // Freedom Fighters
    displayFreedomFighters();
    
    // Scroll Animations
    setupScrollAnimations();
    
    // Navbar Scroll Effect
    setupNavbarScroll();
}

// ====================================
// Navigation Functions
// ====================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenu();
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// ====================================
// Mobile Menu
// ====================================

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// ====================================
// Today's Significance
// ====================================

function updateTodaysSignificance() {
    const today = new Date();
    const month = today.getMonth(); // 0-based (January = 0)
    const date = today.getDate();
    
    const significanceElement = document.getElementById('todaySignificance');
    if (significanceElement) {
        if (month === 0 && date === 26) {
            significanceElement.textContent = "Today is Republic Day of India 🇮🇳";
            significanceElement.style.color = '#138808';
            significanceElement.style.fontWeight = 'bold';
            significanceElement.style.fontSize = '1.3rem';
        } else {
            significanceElement.textContent = "Republic Day is celebrated on 26 January every year";
            significanceElement.style.color = '#2c3e50';
        }
    }
}

// ====================================
// Quote Functions
// ====================================

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * patrioticQuotes.length);
    const quoteText = document.getElementById('quoteText');
    if (quoteText) {
        quoteText.textContent = patrioticQuotes[randomIndex];
    }
}

// ====================================
// Constitution Functions
// ====================================

function updateConstitutionSnapshot() {
    const rightIndex = Math.floor(Math.random() * fundamentalRights.length);
    const dutyIndex = Math.floor(Math.random() * fundamentalDuties.length);
    
    const rightElement = document.getElementById('fundamentalRight');
    const dutyElement = document.getElementById('fundamentalDuty');
    
    if (rightElement) {
        rightElement.textContent = fundamentalRights[rightIndex];
    }
    
    if (dutyElement) {
        dutyElement.textContent = fundamentalDuties[dutyIndex];
    }
}

function updateConstitutionContent() {
    const rightIndex = Math.floor(Math.random() * fundamentalRights.length);
    const dutyIndex = Math.floor(Math.random() * fundamentalDuties.length);
    const quoteIndex = Math.floor(Math.random() * constitutionQuotes.length);
    
    const rightElement = document.getElementById('constitutionRight');
    const dutyElement = document.getElementById('constitutionDuty');
    const quoteElement = document.getElementById('constitutionQuote');
    
    if (rightElement) {
        rightElement.textContent = fundamentalRights[rightIndex];
    }
    
    if (dutyElement) {
        dutyElement.textContent = fundamentalDuties[dutyIndex];
    }
    
    if (quoteElement) {
        quoteElement.textContent = constitutionQuotes[quoteIndex];
    }
}

// Make it accessible globally for the button
window.updateConstitutionContent = updateConstitutionContent;

// ====================================
// Freedom Fighters
// ====================================

function displayFreedomFighters() {
    const fightersGrid = document.getElementById('fightersGrid');
    if (!fightersGrid) return;
    
    fightersGrid.innerHTML = '';
    
    freedomFighters.forEach((fighter, index) => {
        const card = document.createElement('div');
        card.className = 'fighter-card';
        card.innerHTML = `
            <div class="fighter-image">
                <img src="${fighter.image}" alt="${fighter.name}" onerror="this.onerror=null; this.parentElement.innerHTML='${fighter.name.charAt(0)}'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.style.fontSize='5rem'; this.parentElement.style.color='white';">
            </div>
            <div class="fighter-info">
                <h3>${fighter.name}</h3>
                <p class="fighter-lifespan">${fighter.lifespan}</p>
                <p class="fighter-contribution">${fighter.contribution}</p>
            </div>
        `;
        
        card.addEventListener('click', function() {
            openFighterModal(fighter);
        });
        
        fightersGrid.appendChild(card);
    });
}

function openFighterModal(fighter) {
    const modal = document.getElementById('fighterModal');
    const modalBody = document.getElementById('modalBody');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <div class="fighter-detail-image">
                <img src="${fighter.image}" alt="${fighter.name}" onerror="this.onerror=null; this.parentElement.innerHTML='${fighter.name.charAt(0)}'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.style.fontSize='5rem'; this.parentElement.style.color='white'; this.parentElement.style.borderRadius='50%';">
            </div>
            <h2>${fighter.name}</h2>
            <p><strong>Lifespan:</strong> ${fighter.lifespan}</p>
            <p><strong>Contribution:</strong> ${fighter.contribution}</p>
            <p><strong>Role:</strong> ${fighter.role}</p>
            <div class="quote-display">"${fighter.quote}"</div>
        `;
        
        modal.classList.add('show');
    }
}

// Close Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('fighterModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});

// ====================================
// Flag Ceremony
// ====================================

let flagUnfurled = false;

function unfurlFlag() {
    if (flagUnfurled) return;
    
    const flag = document.getElementById('indianFlag');
    const ashokaChakra = document.getElementById('ashokaChakra');
    const unfurlBtn = document.getElementById('unfurlBtn');
    const anthemControls = document.getElementById('anthemControls');
    const nationalAnthem = document.getElementById('nationalAnthem');
    
    if (flag && ashokaChakra && unfurlBtn) {
        // Unfurl flag
        flag.classList.add('unfurled');
        
        // Show Ashoka Chakra
        setTimeout(() => {
            ashokaChakra.classList.add('visible');
        }, 1000);
        
        // Create confetti
        createConfetti();
        
        // Disable button
        unfurlBtn.disabled = true;
        unfurlBtn.textContent = "Flag Unfurled 🇮🇳";
        
        // Show anthem controls and play anthem
        if (anthemControls) {
            anthemControls.style.display = 'block';
            
            // Play anthem automatically when flag is unfurled
            if (nationalAnthem) {
                // Reset to beginning and play
                nationalAnthem.currentTime = 0;
                
                // Play with error handling
                const playPromise = nationalAnthem.play();
                
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('National Anthem playback failed:', error);
                        console.log('Note: User interaction may be required to play audio in some browsers');
                    });
                }
            }
        }
        
        flagUnfurled = true;
    }
}

// Make it accessible globally
window.unfurlFlag = unfurlFlag;

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    if (!confettiContainer) return;
    
    const colors = ['saffron', 'white', 'green'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = `confetti ${colors[Math.floor(Math.random() * colors.length)]}`;
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// ====================================
// E-Card Generator
// ====================================

function generateCard() {
    const userName = document.getElementById('userName').value.trim();
    const userMessage = document.getElementById('userMessage').value.trim();
    const slogan = document.getElementById('sloganSelect').value;
    const downloadBtn = document.getElementById('downloadCardBtn');
    
    if (!userName) {
        alert('Please enter your name');
        return;
    }
    
    // Initialize e-card chakra with 24 spokes
    initializeECardChakra();
    
    // Update card content with engaging greetings
    const cardName = document.getElementById('cardName');
    const cardMessage = document.getElementById('cardMessage');
    const cardSlogan = document.getElementById('cardSlogan');
    
    // Beautiful greeting messages
    const greetings = [
        ` Dear ${userName}, as we celebrate the spirit of our great nation, may the values of unity and freedom guide your path.`,
        `Wishing you a glorious Republic Day, ${userName}! Let the tricolour inspire you to be a better citizen every day.`,
        `${userName}, on this auspicious day, let's pledge to build a stronger, united India together!`,
        `Celebrating the constitution and democracy with you, ${userName}! Happy Republic Day! `,
        `${userName}, may the courage of our freedom fighters inspire your journey towards excellence.`
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    if (cardName) {
        cardName.textContent = `✨ ${userName} ✨`;
    }
    
    if (cardMessage) {
        cardMessage.textContent = userMessage ? `"${userMessage}"` : randomGreeting;
    }
    
    if (cardSlogan) {
        cardSlogan.innerHTML = `<strong>${slogan}</strong> `;
    }
    
    // Enable download button
    if (downloadBtn) {
        downloadBtn.disabled = false;
    }
}

// Initialize e-card chakra with 24 rotating spokes
function initializeECardChakra() {
    const chakraContainer = document.querySelector('.rotating-chakra');
    
    if (chakraContainer) {
        // Clear existing spokes
        chakraContainer.innerHTML = '';
        
        // Create 24 spokes
        const totalSpokes = 24;
        const anglePerSpoke = 360 / totalSpokes;
        
        for (let i = 0; i < totalSpokes; i++) {
            const spoke = document.createElement('div');
            spoke.className = 'chakra-spoke-ecard';
            spoke.style.transform = `rotate(${i * anglePerSpoke}deg)`;
            chakraContainer.appendChild(spoke);
        }
    }
}

// Make it accessible globally
window.generateCard = generateCard;

async function downloadCard() {
    const card = document.getElementById('generatedCard');
    const userName = document.getElementById('userName').value.trim() || 'User';
    
    if (!card) {
        alert('Please generate a card first');
        return;
    }
    
    try {
        // Check if html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            alert('Download feature is loading. Please try again in a moment.');
            return;
        }
        
        const canvas = await html2canvas(card, {
            backgroundColor: null,
            scale: 2,
            logging: false,
            useCORS: true
        });
        
        const link = document.createElement('a');
        link.download = `Republic_Day_Card_${userName.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('Error generating card:', error);
        alert('Error generating card. Please try again.');
    }
}

// Make it accessible globally
window.downloadCard = downloadCard;

// ====================================
// Scroll Animations
// ====================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// ====================================
// Navbar Scroll Effect
// ====================================

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ====================================
// Active Navigation Link
// ====================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        
        if (window.scrollY >= (sectionTop - navbarHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ====================================
// Quiz Functions
// ====================================

// Quiz state variables
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;
let score = 0;
let selectedOptionIndex = null;

// Start Quiz
function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedOptionIndex = null;
    score = 0;

    const startScreen = document.getElementById('quizStartScreen');
    const quizContainer = document.getElementById('quizContainer');
    const resultScreen = document.getElementById('quizResult');
    const certificateWrapper = document.getElementById('certificateWrapper');

    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    resultScreen.style.display = 'none';
    certificateWrapper.style.display = 'none';

    showQuestion(0);
}

// Show Question
function showQuestion(index) {
    if (index >= quizQuestions.length) {
        showResult();
        return;
    }

    const question = quizQuestions[index];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const nextBtn = document.getElementById('nextBtn');
    const progressText = document.getElementById('progressText');

    // Update question text
    questionText.textContent = question.question;

    // Update progress
    progressText.textContent = `Question ${index + 1} / ${quizQuestions.length}`;

    // Clear and populate options
    optionsContainer.innerHTML = '';
    selectedOptionIndex = null;
    nextBtn.disabled = true;

    question.options.forEach((option, optionIndex) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(optionIndex);
        optionsContainer.appendChild(optionBtn);
    });
}

// Select Option
function selectOption(optionIndex) {
    selectedOptionIndex = optionIndex;

    // Remove selected class from all options
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.classList.remove('selected'));

    // Add selected class to clicked option
    optionButtons[optionIndex].classList.add('selected');

    // Enable Next button
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = false;
}

// Next Question
function nextQuestion() {
    if (selectedOptionIndex === null) {
        return;
    }

    // Store the answer
    userAnswers.push(selectedOptionIndex);

    // Move to next question
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

// Show Result
function showResult() {
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correctAnswerIndex) {
            score++;
        }
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);

    // Hide quiz container
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.style.display = 'none';

    // Show result screen
    const resultScreen = document.getElementById('quizResult');
    resultScreen.style.display = 'block';

    // Update result display
    document.getElementById('finalScore').textContent = `${score} / ${quizQuestions.length}`;
    document.getElementById('percentageText').textContent = `${percentage}%`;

    // Show feedback message
    const feedbackMessage = document.getElementById('feedbackMessage');
    if (percentage >= 80) {
        feedbackMessage.textContent = 'Excellent! You have a great knowledge of Republic Day and India\'s Constitution!';
        feedbackMessage.className = 'feedback-message excellent';
    } else if (percentage >= 60) {
        feedbackMessage.textContent = 'Good! You know a lot about Republic Day and Indian history!';
        feedbackMessage.className = 'feedback-message good';
    } else {
        feedbackMessage.textContent = 'Keep Learning! Continue exploring India\'s rich history and Constitution!';
        feedbackMessage.className = 'feedback-message keep-learning';
    }

    // Show certificate form
    const certificateForm = document.getElementById('certificateForm');
    certificateForm.style.display = 'block';
}

// Generate Certificate
function generateCertificate() {
    const certificateName = document.getElementById('certificateName').value.trim();

    if (!certificateName) {
        alert('Please enter your name to generate the certificate');
        return;
    }

    // Hide result screen
    const resultScreen = document.getElementById('quizResult');
    resultScreen.style.display = 'none';

    // Show certificate
    const certificateWrapper = document.getElementById('certificateWrapper');
    certificateWrapper.style.display = 'block';

    // Update certificate content
    document.getElementById('certificateNameDisplay').textContent = certificateName;
    document.getElementById('certificateScoreDisplay').textContent = `${score} / ${quizQuestions.length}`;

    // Update date
    const today = new Date();
    const dateString = today.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('certificateDateDisplay').textContent = dateString;

    // Scroll to certificate
    setTimeout(() => {
        certificateWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Download Certificate
async function downloadCertificate() {
    const certificateContent = document.getElementById('certificateContent');
    const certificateName = document.getElementById('certificateName').value.trim() || 'User';

    if (!certificateContent) {
        alert('Please generate a certificate first');
        return;
    }

    try {
        // Check if html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            alert('Download feature is loading. Please try again in a moment.');
            return;
        }

        const canvas = await html2canvas(certificateContent, {
            backgroundColor: null,
            scale: 2,
            logging: false,
            useCORS: true
        });

        const link = document.createElement('a');
        const fileName = `Republic_Day_Certificate_${certificateName.replace(/\s+/g, '_')}.png`;
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('Error generating certificate:', error);
        alert('Error generating certificate. Please try again.');
    }
}

// Make functions accessible globally
window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.generateCertificate = generateCertificate;
window.downloadCertificate = downloadCertificate;

