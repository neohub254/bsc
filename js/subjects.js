// ========================================
// CIVIL-X ENGINEERING OS - SUBJECTS SYSTEM
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initCursorGlow();
    initSubjectSearch();
    initFilterTags();
    loadAllSubjects();
    initModalSystem();
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

// Subject Search
function initSubjectSearch() {
    const searchInput = document.getElementById('subjectSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        filterSubjects(searchTerm);
    });
}

// Filter Tags
function initFilterTags() {
    const filterContainer = document.getElementById('filterTags');
    if (!filterContainer) return;

    const tags = ['ALL', ...CIVIL_DATA.subjects.map(s => s.code)];
    
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'filter-tag';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            tagElement.classList.add('active');
            
            if (tag === 'ALL') {
                filterSubjects('');
            } else {
                filterSubjectsByCode(tag);
            }
        });
        filterContainer.appendChild(tagElement);
    });

    // Set first tag as active
    filterContainer.firstChild?.classList.add('active');
}

// Load All Subjects
function loadAllSubjects() {
    const grid = document.getElementById('subjectsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    CIVIL_DATA.subjects.forEach(subject => {
        const card = createFullSubjectCard(subject);
        grid.appendChild(card);
    });
}

// Create Full Subject Card
function createFullSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-full-card glass-card';
    card.setAttribute('data-code', subject.code);
    card.setAttribute('data-name', subject.name.toLowerCase());
    
    const resourcesCount = subject.notes.length + subject.pastPapers.length + subject.youtubeVideos.length;
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title-area">
                <h3 class="card-title">${subject.name}</h3>
                <span class="card-code">${subject.code}</span>
            </div>
            <div class="card-status">
                <span class="status-indicator ${subject.difficulty > 80 ? 'critical' : 'normal'}"></span>
                <span class="status-text">${subject.funnyStatus}</span>
            </div>
        </div>
        
        <div class="card-body">
            <div class="info-row">
                <div class="info-item">
                    <span class="info-icon">👨‍🏫</span>
                    <span class="info-text">${subject.lecturer}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <span class="info-text">${subject.venue}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">🕐</span>
                    <span class="info-text">${subject.lectureHours}</span>
                </div>
            </div>
            
            <div class="difficulty-section">
                <div class="difficulty-header">
                    <span class="difficulty-label">DIFFICULTY METER</span>
                    <span class="difficulty-value">${subject.difficulty}%</span>
                </div>
                <div class="difficulty-bar">
                    <div class="difficulty-fill" style="width: ${subject.difficulty}%"></div>
                </div>
            </div>
            
            <div class="resources-section">
                <div class="resources-count">
                    <span class="count-number">${resourcesCount}</span>
                    <span class="count-label">RESOURCES AVAILABLE</span>
                </div>
            </div>
        </div>
        
        <div class="card-footer">
            <div class="resource-tabs">
                <button class="tab-btn active" data-tab="notes-${subject.id}">
                    📝 NOTES (${subject.notes.length})
                </button>
                <button class="tab-btn" data-tab="papers-${subject.id}">
                    📄 PAST PAPERS (${subject.pastPapers.length})
                </button>
                <button class="tab-btn" data-tab="videos-${subject.id}">
                    🎥 VIDEOS (${subject.youtubeVideos.length})
                </button>
            </div>
            
            <div class="tab-content active" id="notes-${subject.id}">
                ${subject.notes.map(note => createNoteItem(note)).join('')}
            </div>
            
            <div class="tab-content" id="papers-${subject.id}">
                ${subject.pastPapers.map(paper => createPaperItem(paper)).join('')}
            </div>
            
            <div class="tab-content" id="videos-${subject.id}">
                ${subject.youtubeVideos.map(video => createVideoItem(video)).join('')}
            </div>
        </div>
        
        <div class="card-meme">
            <span class="meme-icon">💀</span>
            <span class="meme-text">${subject.meme}</span>
        </div>
    `;
    
    // Add tab switching functionality
    card.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active from all tabs in this card
            card.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            card.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Activate selected tab
            this.classList.add('active');
            const content = card.querySelector(`#${tabId}`);
            if (content) content.classList.add('active');
        });
    });
    
    // Add download button functionality
    card.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const file = this.getAttribute('data-file');
            if (file) {
                window.open(file, '_blank');
            }
        });
    });
    
    // Add preview button functionality
    card.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const file = this.getAttribute('data-file');
            const title = this.getAttribute('data-title');
            if (file) {
                openPDFPreview(file, title);
            }
        });
    });
    
    // Animate difficulty bar
    setTimeout(() => {
        const fill = card.querySelector('.difficulty-fill');
        if (fill) {
            fill.style.width = subject.difficulty + '%';
        }
    }, 500);
    
    return card;
}

// Create Note Item
function createNoteItem(note) {
    return `
        <div class="resource-item">
            <div class="resource-info">
                <span class="resource-icon">📝</span>
                <div class="resource-details">
                    <span class="resource-title">${note.title}</span>
                    <span class="resource-meta">PDF • ${note.size || 'Unknown size'}</span>
                </div>
            </div>
            <div class="resource-actions">
                <button class="preview-btn" data-file="${note.file}" data-title="${note.title}">
                    <span>👁️</span> PREVIEW
                </button>
                <button class="download-btn" data-file="${note.file}">
                    <span>⬇️</span> DOWNLOAD
                </button>
            </div>
        </div>
    `;
}

// Create Past Paper Item
function createPaperItem(paper) {
    return `
        <div class="resource-item">
            <div class="resource-info">
                <span class="resource-icon">📄</span>
                <div class="resource-details">
                    <span class="resource-title">${paper.title}</span>
                    <span class="resource-meta">Past Paper • PDF</span>
                </div>
            </div>
            <div class="resource-actions">
                <button class="preview-btn" data-file="${paper.file}" data-title="${paper.title}">
                    <span>👁️</span> PREVIEW
                </button>
                <button class="download-btn" data-file="${paper.file}">
                    <span>⬇️</span> DOWNLOAD
                </button>
            </div>
        </div>
    `;
}

// Create Video Item
function createVideoItem(video) {
    const videoId = video.url.split('/').pop();
    return `
        <div class="resource-item video-item">
            <div class="resource-info">
                <span class="resource-icon">🎥</span>
                <div class="resource-details">
                    <span class="resource-title">${video.title}</span>
                    <span class="resource-meta">YouTube Tutorial</span>
                </div>
            </div>
            <div class="resource-actions">
                <button class="watch-btn" data-url="${video.url}" data-title="${video.title}">
                    <span>▶️</span> WATCH
                </button>
            </div>
        </div>
    `;
}

// Filter Subjects
function filterSubjects(searchTerm) {
    const cards = document.querySelectorAll('.subject-full-card');
    
    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        const code = card.getAttribute('data-code');
        
        if (name.includes(searchTerm) || code.toLowerCase().includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterSubjectsByCode(code) {
    const cards = document.querySelectorAll('.subject-full-card');
    
    cards.forEach(card => {
        const cardCode = card.getAttribute('data-code');
        if (cardCode === code) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Modal System for PDF Preview
function initModalSystem() {
    const modal = document.getElementById('pdfModal');
    const closeBtn = document.getElementById('closeModal');
    
    if (!modal) return;
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.getElementById('pdfViewer').src = '';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.getElementById('pdfViewer').src = '';
        }
    });
    
    // Add watch video functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.watch-btn')) {
            const btn = e.target.closest('.watch-btn');
            const url = btn.getAttribute('data-url');
            const title = btn.getAttribute('data-title');
            if (url) {
                openVideoPreview(url, title);
            }
        }
    });
}

function openPDFPreview(file, title) {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    const modalTitle = document.getElementById('modalTitle');
    
    if (!modal || !viewer) return;
    
    modalTitle.textContent = title || 'Document Preview';
    viewer.src = file;
    modal.style.display = 'block';
}

function openVideoPreview(url, title) {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    const modalTitle = document.getElementById('modalTitle');
    
    if (!modal || !viewer) return;
    
    modalTitle.textContent = title || 'Video Player';
    viewer.src = url;
    modal.style.display = 'block';
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
