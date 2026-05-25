// ========================================
// CIVIL-X ENGINEERING OS - COMMNITY SYSTEM
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initCursorGlow();
  loadAnnouncements();
  initCountdown();
  initMemeRotator();
  initComplaintSystem();
  initConfessions();
  initLecturerRatings();
  initMobileMenu();
});

// Cursor Glow
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursorGlow');
  if (!cursorGlow) return;
  
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
  
  if (window.innerWidth <= 768) {
    document.body.style.cursor = 'auto';
    cursorGlow.style.display = 'none';
  }
}

// Load Announcements
function loadAnnouncements() {
  const container = document.getElementById('announcementsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  CIVIL_DATA.announcements.forEach(announcement => {
    const item = document.createElement('div');
    item.className = 'announcement-item';
    
    const priorityClass = announcement.priority === 'high' ? 'priority-high' :
      announcement.priority === 'medium' ? 'priority-medium' : 'priority-low';
    
    item.innerHTML = `
            <div class="announcement-header">
                <span class="announcement-priority ${priorityClass}">${announcement.priority.toUpperCase()}</span>
                <span class="announcement-date">${announcement.date}</span>
            </div>
            <h3 class="announcement-title">${announcement.title}</h3>
            <p class="announcement-message">${announcement.message}</p>
        `;
    
    container.appendChild(item);
  });
}

// Exam Countdown Timer
function initCountdown() {
  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countMinutes = document.getElementById('countMinutes');
  const countSeconds = document.getElementById('countSeconds');
  const countdownMessage = document.getElementById('countdownMessage');
  
  if (!countDays) return;
  
  const examDate = new Date(CIVIL_DATA.classInfo.examStartDate);
  
  function updateCountdown() {
    const now = new Date();
    const distance = examDate - now;
    
    if (distance < 0) {
      countDays.textContent = '00';
      countHours.textContent = '00';
      countMinutes.textContent = '00';
      countSeconds.textContent = '00';
      if (countdownMessage) {
        countdownMessage.textContent = '🎉 EXAMS ARE HERE! GOOD LUCK!';
      }
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countDays.textContent = String(days).padStart(2, '0');
    countHours.textContent = String(hours).padStart(2, '0');
    countMinutes.textContent = String(minutes).padStart(2, '0');
    countSeconds.textContent = String(seconds).padStart(2, '0');
    
    // Update message based on time left
    if (countdownMessage) {
      if (days > 30) {
        countdownMessage.textContent = '😌 Chill, we still have time...';
      } else if (days > 14) {
        countdownMessage.textContent = '😅 Starting to get real...';
      } else if (days > 7) {
        countdownMessage.textContent = '😰 One week left, PANIC MODE';
      } else if (days > 1) {
        countdownMessage.textContent = '💀 FINAL COUNTDOWN, GOOD LUCK SOLDIERS';
      } else {
        countdownMessage.textContent = '⚰️ TOMORROW IS THE DAY, MAY THE ODDS BE EVER IN YOUR FAVOR';
      }
    }
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Meme Rotator
function initMemeRotator() {
  const memeImage = document.getElementById('communityMeme');
  const memeText = document.getElementById('communityMemeText');
  const refreshBtn = document.getElementById('refreshMeme');
  
  if (!memeImage) return;
  
  function loadRandomMeme() {
    const randomMeme = CIVIL_DATA.memes[Math.floor(Math.random() * CIVIL_DATA.memes.length)];
    memeImage.src = randomMeme.image;
    memeImage.onerror = function() {
      this.src = randomMeme.fallback;
    };
    memeText.textContent = randomMeme.caption;
    
    // Add loading animation
    memeImage.style.opacity = '0';
    setTimeout(() => {
      memeImage.style.opacity = '1';
    }, 100);
  }
  
  loadRandomMeme();
  
  if (refreshBtn) {
    refreshBtn.addEventListener('click', loadRandomMeme);
  }
  
  // Auto-rotate every 8 seconds
  setInterval(loadRandomMeme, 8000);
}

// Complaint System
function initComplaintSystem() {
  const form = document.getElementById('complaintForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('complaintName').value.trim();
    const subject = document.getElementById('complaintSubject').value.trim();
    const message = document.getElementById('complaintMessage').value.trim();
    
    if (!name || !subject || !message) {
      alert('⚠️ Please fill in all fields. The system requires complete data.');
      return;
    }
    
    // Create mailto link
    const emailAddress = 'complains@dkut.ac.ke';
    const emailSubject = encodeURIComponent(`[COMPLAINT] ${subject} - ${name}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Subject: ${subject}\n\n` +
      `Complaint Details:\n${message}\n\n` +
      `---\n` +
      `Sent from CIVIL-X OS\n` +
      `BSC Civil Engineering\n` +
      `Dedan Kimathi University`
    );
    
    const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    
    // Show confirmation with fun message
    const confirmations = [
      '📤 Complaint launched into the void...',
      '🚀 Your message is now traveling through the university bureaucracy...',
      '📨 Complaint filed. Response time: approximately 3-5 business years...',
      '✉️ Message sent! Our team of highly trained pigeons is on it...',
      '🎯 Complaint locked and loaded. Brace for impact...'
    ];
    
    const randomConfirmation = confirmations[Math.floor(Math.random() * confirmations.length)];
    
    // Visual feedback
    const submitBtn = form.querySelector('.complaint-button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '🚀 SENDING...';
    submitBtn.style.background = 'var(--cyan-neon)';
    submitBtn.style.color = 'var(--bg-primary)';
    
    setTimeout(() => {
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      submitBtn.style.color = '';
      
      // Show fun alert
      alert(randomConfirmation);
    }, 1500);
  });
}



// Confessions System
function initConfessions() {
  const confessionText = document.getElementById('confessionText');
  const confessionButton = document.getElementById('confessionButton');
  
  if (!confessionText || !confessionButton) return;
  
  function loadRandomConfession() {
    const randomConfession = CIVIL_DATA.confessions[Math.floor(Math.random() * CIVIL_DATA.confessions.length)];
    
    // Add typing effect
    confessionText.style.opacity = '0';
    confessionText.textContent = '';
    
    setTimeout(() => {
      confessionText.textContent = `"${randomConfession}"`;
      confessionText.style.opacity = '1';
    }, 300);
  }
  
  confessionButton.addEventListener('click', loadRandomConfession);
  
  // Load initial confession
  loadRandomConfession();
}

// Lecturer Ratings
function initLecturerRatings() {
  const container = document.getElementById('ratingsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  CIVIL_DATA.lecturerRatings.forEach(lecturer => {
    const ratingCard = document.createElement('div');
    ratingCard.className = 'rating-card';
    ratingCard.innerHTML = `
            <div class="rating-header">
                <h4 class="rating-lecturer">${lecturer.name}</h4>
                <span class="rating-stars">${lecturer.rating}</span>
            </div>
            <p class="rating-comment">${lecturer.comment}</p>
        `;
    container.appendChild(ratingCard);
  });
}

// Mobile Menu
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
}
