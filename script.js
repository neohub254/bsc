// ========================================
// CIVIL-X ENGINEERING OS - MAIN SCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all systems
    initLoader();
    initCursorGlow();
    initBlueprintCanvas();
    initTypingEffect();
    initParticles();
    initStatistics();
    initQuotes();
    initSubjectsPreview();
    initMemesCarousel();
    initStressCalculator();
    initJokeGenerator();
    initMobileMenu();
    initSmoothScroll();
});

// Loader System
function initLoader() {
    const loader = document.getElementById('loader');
    const progress = document.getElementById('loaderProgress');
    const loaderText = document.getElementById('loaderText');
    
    if (!loader) return;

    const loadingTexts = [
        "INITIALIZING ENGINEERING MATRIX...",
        "CALCULATING GPA PROBABILITY...",
        "LOADING BLUEPRINT GRIDS...",
        "CALIBRATING STRESS METERS...",
        "ACTIVATING NEURAL ENGINE...",
        "WELCOME TO THE MATRIX..."
    ];

    let progressValue = 0;
    const interval = setInterval(() => {
        progressValue += Math.random() * 10;
        if (progressValue >= 100) {
            progressValue = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
        progress.style.width = progressValue + '%';
        
        // Change loading text
        const textIndex = Math.floor(progressValue / 16.6);
        if (textIndex < loadingTexts.length) {
            loaderText.textContent = loadingTexts[textIndex];
        }
    }, 200);
}

// Cursor Glow Effect
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Show default cursor on mobile
    if (window.innerWidth <= 768) {
        document.body.style.cursor = 'auto';
        cursorGlow.style.display = 'none';
    }
}

// Blueprint Canvas Animation
function initBlueprintCanvas() {
    const canvas = document.getElementById('blueprintCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gridOffset = 0;
    const gridSize = 40;

    function drawBlueprint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = gridOffset % gridSize; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Horizontal lines
        for (let y = gridOffset % gridSize; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw some construction lines
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
        ctx.stroke();
        
        // Cross
        ctx.beginPath();
        ctx.moveTo(centerX - 100, centerY);
        ctx.lineTo(centerX + 100, centerY);
        ctx.moveTo(centerX, centerY - 100);
        ctx.lineTo(centerX, centerY + 100);
        ctx.stroke();

        gridOffset += 0.5;
        requestAnimationFrame(drawBlueprint);
    }

    drawBlueprint();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Typing Effect
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const phrases = [
        "Where Civil Engineers Are Forged in the Matrix 🔧",
        "Building Tomorrow's Infrastructure Today 🏗️",
        "90 Engineers, Infinite Blueprints 📐",
        "Warning: High Levels of Engineering Detected ⚡",
        "Sleep is Temporary, GPA is Forever 💀"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}

// Particles
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 5 + 3}s infinite;
            pointer-events: none;
        `;
        container.appendChild(particle);
    }
}

// Statistics Counter
function initStatistics() {
    const studentCount = document.getElementById('studentCount');
    const subjectCount = document.getElementById('subjectCount');
    const daysLeft = document.getElementById('daysLeft');

    if (!studentCount) return;

    // Animate numbers
    animateNumber(studentCount, 0, CIVIL_DATA.classInfo.totalStudents, 2000);
    animateNumber(subjectCount, 0, CIVIL_DATA.subjects.length, 2000);
    
    // Calculate days to exam
    const examDate = new Date(CIVIL_DATA.classInfo.examStartDate);
    const today = new Date();
    const daysToExam = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
    animateNumber(daysLeft, 0, daysToExam, 2000);
}

function animateNumber(element, start, end, duration) {
    let startTime = null;
    
    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
            element.textContent = Math.floor(progress * (end - start) + start);
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(update);
}

// Random Quotes
function initQuotes() {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    
    if (!quoteText) return;

    function updateQuote() {
        const randomQuote = CIVIL_DATA.quotes[Math.floor(Math.random() * CIVIL_DATA.quotes.length)];
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = randomQuote.author;
    }

    updateQuote();
    setInterval(updateQuote, 5000);
}

// Subjects Preview
function initSubjectsPreview() {
    const grid = document.getElementById('subjectsGrid');
    if (!grid) return;

    const subjectsToShow = CIVIL_DATA.subjects.slice(0, 4);

    subjectsToShow.forEach(subject => {
        const card = createSubjectCard(subject);
        grid.appendChild(card);
    });
}

function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-card glass-card';
    card.innerHTML = `
        <div class="subject-name">${subject.name}</div>
        <div class="subject-code">${subject.code}</div>
        <div class="subject-lecturer">👨‍🏫 ${subject.lecturer}</div>
        <div class="difficulty-meter">
            <div class="difficulty-label">DIFFICULTY LEVEL: ${subject.difficulty}%</div>
            <div class="difficulty-bar">
                <div class="difficulty-fill" style="width: ${subject.difficulty}%"></div>
            </div>
        </div>
        <div class="subject-meme">💀 ${subject.meme}</div>
    `;
    return card;
}

// Memes Carousel
function initMemesCarousel() {
    const memeImage = document.getElementById('memeImage');
    const memeCaption = document.getElementById('memeCaption');
    const prevBtn = document.getElementById('prevMeme');
    const nextBtn = document.getElementById('nextMeme');
    
    if (!memeImage) return;

    let currentMemeIndex = 0;

    function showMeme(index) {
        const meme = CIVIL_DATA.memes[index];
        memeImage.src = meme.image;
        memeImage.onerror = function() {
            this.src = meme.fallback;
        };
        memeCaption.textContent = meme.caption;
    }

    showMeme(0);

    prevBtn.addEventListener('click', () => {
        currentMemeIndex = (currentMemeIndex - 1 + CIVIL_DATA.memes.length) % CIVIL_DATA.memes.length;
        showMeme(currentMemeIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentMemeIndex = (currentMemeIndex + 1) % CIVIL_DATA.memes.length;
        showMeme(currentMemeIndex);
    });

    // Auto-rotate every 5 seconds
    setInterval(() => {
        currentMemeIndex = (currentMemeIndex + 1) % CIVIL_DATA.memes.length;
        showMeme(currentMemeIndex);
    }, 5000);
}

// Stress Calculator
function initStressCalculator() {
    const stressButton = document.getElementById('stressButton');
    const stressFill = document.getElementById('stressFill');
    const stressReading = document.getElementById('stressReading');
    
    if (!stressButton) return;

    stressButton.addEventListener('click', () => {
        const stressLevel = Math.floor(Math.random() * 40) + 60; // 60-100%
        stressFill.style.width = stressLevel + '%';
        
        let message;
        if (stressLevel < 70) {
            message = 'STRESS LEVEL: MANAGEABLE (SUS)';
        } else if (stressLevel < 85) {
            message = 'STRESS LEVEL: HIGH (HYDRATE IMMEDIATELY)';
        } else {
            message = 'STRESS LEVEL: CRITICAL (PRAYERS NEEDED) 💀';
        }
        
        stressReading.textContent = message;
    });
}

// Joke Generator
function initJokeGenerator() {
    const jokeButton = document.getElementById('jokeButton');
    const jokeText = document.getElementById('jokeText');
    
    if (!jokeButton) return;

    jokeButton.addEventListener('click', () => {
        const randomJoke = CIVIL_DATA.jokes[Math.floor(Math.random() * CIVIL_DATA.jokes.length)];
        jokeText.textContent = randomJoke;
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}