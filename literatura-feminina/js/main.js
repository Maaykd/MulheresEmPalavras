// ===== Main JavaScript File =====

// Global state
let currentPage = 'home';
let mobileMenuOpen = false;
let modalOpen = false;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load data
    loadFeaturedBooks();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize animations
    initializeAnimations();
    
    // Check current page
    const path = window.location.pathname;
    if (path.includes('autoras')) {
        currentPage = 'autoras';
        loadAuthors();
    } else if (path.includes('obras')) {
        currentPage = 'obras';
        loadAllBooks();
    }
}

// ===== Event Listeners =====
function initializeEventListeners() {
    // Mobile menu close on click outside
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileNav && mobileNav.classList.contains('active')) {
            if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Modal close on click outside
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeBookModal();
            }
        });
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modalOpen) {
                closeBookModal();
            }
            if (mobileMenuOpen) {
                closeMobileMenu();
            }
        }
    });
}

// ===== Mobile Menu Functions =====
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileNav.classList.contains('active')) {
        closeMobileMenu();
    } else {
        mobileNav.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        mobileMenuOpen = true;
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileNav.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    mobileMenuOpen = false;
}

// ===== Featured Books Section =====
function loadFeaturedBooks() {
    const featuredBooksGrid = document.getElementById('featuredBooksGrid');
    if (!featuredBooksGrid) return;
    
    // Get first 6 books
    const featuredBooks = books.slice(0, 6);
    
    featuredBooksGrid.innerHTML = featuredBooks.map(book => 
        createBookCard(book)
    ).join('');
    
    // Add animation
    animateElements('.book-card');
}

// ===== Book Card Component =====
function createBookCard(book) {
    const genreClass = getGenreClass(book.genre);
    const availabilityClass = book.availability === 'Disponível' ? 'available' : 'unavailable';
    
    return `
        <div class="book-card" onclick="openBookModal(${books.indexOf(book)})" data-aos="fade-up">
            <div class="book-cover">
                ${book.image_url ? 
                    `<img src="${book.image_url}" alt="${book.title}">` :
                    `<div class="book-cover-placeholder">
                        <span>${book.title.charAt(0)}</span>
                    </div>`
                }
                <span class="book-genre-badge ${genreClass}">${book.genre}</span>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-year">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${book.year}
                </div>
                <p class="book-synopsis">${book.synopsis}</p>
                <span class="book-availability availability-${availabilityClass}">
                    ${book.availability}
                </span>
            </div>
        </div>
    `;
}

// ===== Book Modal Functions =====
function openBookModal(bookIndex) {
    const book = books[bookIndex];
    const modal = document.getElementById('bookModal');
    const modalContent = document.getElementById('bookModalContent');
    
    if (!modal || !modalContent) return;
    
    const genreClass = getGenreClass(book.genre);
    
    modalContent.innerHTML = `
        <div class="book-modal-header">
            <div class="book-modal-cover">
                ${book.image_url ? 
                    `<img src="${book.image_url}" alt="${book.title}">` :
                    `<div class="book-modal-cover-placeholder">
                        <span style="font-size: 2rem; font-weight: bold; color: var(--gray-600);">
                            ${book.title.charAt(0)}
                        </span>
                    </div>`
                }
            </div>
            <div class="book-modal-info">
                <h2 class="book-modal-title">${book.title}</h2>
                <p class="book-modal-author">${book.author}</p>
                <div class="book-modal-meta">
                    <span class="book-modal-genre ${genreClass}">${book.genre}</span>
                    <span class="book-modal-year">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${book.year}
                    </span>
                </div>
            </div>
        </div>
        <div class="book-modal-body">
            <div class="book-modal-section">
                <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Sinopse
                </h3>
                <p class="book-modal-synopsis">${book.synopsis}</p>
            </div>
        </div>
        <div class="book-modal-footer">
            <div>
                ${book.price ? `<div class="book-modal-price">R$ ${book.price.toFixed(2)}</div>` : ''}
                <span class="book-availability availability-${book.availability === 'Disponível' ? 'available' : 'unavailable'}">
                    ${book.availability}
                </span>
            </div>
            <div class="book-modal-actions">
                ${book.library_url ? 
                    `<a href="${book.library_url}" target="_blank" class="btn-library">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Ver na Biblioteca
                    </a>` : ''
                }
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    modalOpen = true;
    document.body.style.overflow = 'hidden';
}

function closeBookModal() {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.classList.remove('active');
        modalOpen = false;
        document.body.style.overflow = '';
    }
}

// ===== Author Functions =====
function loadAuthors() {
    const authorsGrid = document.getElementById('authorsGrid');
    if (!authorsGrid) return;
    
    authorsGrid.innerHTML = authors.map(author => 
        createAuthorCard(author)
    ).join('');
    
    animateElements('.author-card');
}

function createAuthorCard(author) {
    const authorBooks = books.filter(book => book.author === author.name);
    const avatarColor = getAvatarColor(author);
    
    return `
        <div class="author-card" onclick="openAuthorModal(${authors.indexOf(author)})" data-aos="fade-up">
            <div class="author-avatar" style="background: ${avatarColor};">
                <span>${getInitials(author.name)}</span>
            </div>
            <h3 class="author-name">${author.name}</h3>
            ${author.specialty ? `<p class="author-specialty">${author.specialty}</p>` : ''}
            <p class="author-bio">${author.biography}</p>
            <div class="author-books-count">
                ${authorBooks.length} ${authorBooks.length === 1 ? 'obra' : 'obras'} no acervo
            </div>
        </div>
    `;
}

function openAuthorModal(authorIndex) {
    const author = authors[authorIndex];
    const modal = document.getElementById('bookModal'); // Reusing the same modal
    const modalContent = document.getElementById('bookModalContent');
    
    if (!modal || !modalContent) return;
    
    const authorBooks = books.filter(book => book.author === author.name);
    const avatarColor = getAvatarColor(author);
    
    modalContent.innerHTML = `
        <div class="author-modal-header">
            <div class="author-modal-avatar" style="background: ${avatarColor};">
                <span>${getInitials(author.name)}</span>
            </div>
            <h2 class="author-modal-name">${author.name}</h2>
            ${author.specialty ? `<p class="author-modal-specialty">${author.specialty}</p>` : ''}
        </div>
        <div class="author-modal-body">
            <div class="book-modal-section">
                <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Sobre a Autora
                </h3>
                <p class="author-modal-bio">${author.biography}</p>
            </div>
            
            ${authorBooks.length > 0 ? `
                <div class="author-modal-books">
                    <h3>Obras no Acervo</h3>
                    <div class="author-books-list">
                        ${authorBooks.map(book => `
                            <div class="author-book-item">
                                <div>
                                    <div class="author-book-title">${book.title}</div>
                                    <div class="author-book-year">${book.year} • ${book.genre}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
    modalOpen = true;
    document.body.style.overflow = 'hidden';
}

// ===== Utility Functions =====
function getGenreClass(genre) {
    const genreMap = {
        'Suspense': 'genre-suspense',
        'Romance': 'genre-romance',
        'Poesia': 'genre-poesia',
        'Crônica': 'genre-cronica',
        'Ficção': 'genre-ficcao',
        'Biografia': 'genre-biografia',
        'Humanidades': 'genre-humanidades',
        'Políticas Públicas': 'genre-politicas'
    };
    return genreMap[genre] || 'genre-suspense';
}

function getInitials(name) {
    return name.split(' ')
        .map(n => n[0])
        .join('')
        .substring(0, 3)
        .toUpperCase();
}

function getAvatarColor(author) {
    const colors = [
        'linear-gradient(135deg, #667eea, #764ba2)',
        'linear-gradient(135deg, #f093fb, #f5576c)',
        'linear-gradient(135deg, #4facfe, #00f2fe)',
        'linear-gradient(135deg, #43e97b, #38f9d7)',
        'linear-gradient(135deg, #fa709a, #fee140)',
        'linear-gradient(135deg, #30cfd0, #330867)',
        'linear-gradient(135deg, #a8edea, #fed6e3)',
        'linear-gradient(135deg, #ff9a9e, #fecfef)'
    ];
    
    // Use author name hash for consistent color
    let hash = 0;
    for (let i = 0; i < author.name.length; i++) {
        hash = author.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Animation Functions =====
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function animateElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.setAttribute('data-aos', 'fade-up');
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
}

// ===== Load All Books (for obras.html) =====
function loadAllBooks() {
    const booksGrid = document.getElementById('booksGrid');
    if (!booksGrid) return;
    
    booksGrid.innerHTML = books.map(book => 
        createBookCard(book)
    ).join('');
    
    animateElements('.book-card');
}

// ===== Search and Filter Functions =====
function searchBooks(query) {
    const normalizedQuery = query.toLowerCase();
    return books.filter(book => 
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery) ||
        book.synopsis.toLowerCase().includes(normalizedQuery)
    );
}

function filterBooksByGenre(genre) {
    if (genre === 'all') return books;
    return books.filter(book => book.genre === genre);
}

function filterBooksByYear(year) {
    if (year === 'all') return books;
    return books.filter(book => book.year === parseInt(year));
}

function searchAuthors(query) {
    const normalizedQuery = query.toLowerCase();
    return authors.filter(author => 
        author.name.toLowerCase().includes(normalizedQuery) ||
        (author.biography && author.biography.toLowerCase().includes(normalizedQuery)) ||
        (author.specialty && author.specialty.toLowerCase().includes(normalizedQuery))
    );
}