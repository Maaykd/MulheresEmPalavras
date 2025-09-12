// ===== Components JavaScript File =====

// ===== Loading Component =====
function createLoadingCard() {
    return `
        <div class="book-card-skeleton">
            <div class="book-cover-skeleton skeleton"></div>
            <div class="book-info-skeleton">
                <div class="skeleton-title skeleton"></div>
                <div class="skeleton-author skeleton"></div>
                <div class="skeleton-text skeleton"></div>
                <div class="skeleton-text skeleton"></div>
            </div>
        </div>
    `;
}

function showLoading(containerId, count = 6) {
    const container = document.getElementById(containerId);
    if (container) {
        const loadingCards = Array(count).fill(0).map(() => createLoadingCard()).join('');
        container.innerHTML = loadingCards;
    }
}

// ===== Toast Notification Component =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            ${getToastIcon(type)}
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function getToastIcon(type) {
    const icons = {
        'success': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>`,
        'error': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>`,
        'info': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="16"></line>
            <line x1="12" y1="8" x2="12" y2="12"></line>
        </svg>`
    };
    return icons[type] || icons['info'];
}

// ===== Debounce Function =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Lazy Loading Images =====
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
}

// ===== Copy to Clipboard =====
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copiado para a área de transferência!', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Copiado para a área de transferência!', 'success');
    } catch (err) {
        showToast('Erro ao copiar texto', 'error');
    }
    
    document.body.removeChild(textArea);
}

// ===== Share Function =====
function shareBook(book) {
    const shareData = {
        title: book.title,
        text: `Confira o livro "${book.title}" de ${book.author} no Acervo Literário Feminino Brasileiro`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Compartilhado com sucesso!', 'success'))
            .catch((err) => console.log('Error sharing:', err));
    } else {
        // Fallback - copy link
        copyToClipboard(window.location.href);
        showToast('Link copiado!', 'info');
    }
}

// ===== Format Currency =====
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// ===== Format Date =====
function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date));
}

// ===== Smooth Scroll =====
function smoothScrollTo(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== Local Storage Functions =====
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return null;
    }
}

function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error('Error removing from localStorage:', e);
        return false;
    }
}

// ===== Favorites System =====
let favorites = getFromLocalStorage('favorites') || [];

function toggleFavorite(bookIndex) {
    const book = books[bookIndex];
    const favoriteIndex = favorites.findIndex(fav => fav.title === book.title);
    
    if (favoriteIndex > -1) {
        favorites.splice(favoriteIndex, 1);
        showToast('Removido dos favoritos', 'info');
    } else {
        favorites.push(book);
        showToast('Adicionado aos favoritos!', 'success');
    }
    
    saveToLocalStorage('favorites', favorites);
    updateFavoriteButtons();
}

function isFavorite(book) {
    return favorites.some(fav => fav.title === book.title);
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const bookIndex = parseInt(btn.dataset.bookIndex);
        const book = books[bookIndex];
        if (isFavorite(book)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ===== Reading List System =====
let readingList = getFromLocalStorage('readingList') || [];

function addToReadingList(bookIndex) {
    const book = books[bookIndex];
    const exists = readingList.some(item => item.title === book.title);
    
    if (!exists) {
        readingList.push({
            ...book,
            addedAt: new Date().toISOString()
        });
        saveToLocalStorage('readingList', readingList);
        showToast('Adicionado à lista de leitura!', 'success');
    } else {
        showToast('Este livro já está na sua lista', 'info');
    }
}

function removeFromReadingList(bookTitle) {
    readingList = readingList.filter(book => book.title !== bookTitle);
    saveToLocalStorage('readingList', readingList);
    showToast('Removido da lista de leitura', 'info');
}

// ===== Theme Toggle =====
function initTheme() {
    const savedTheme = getFromLocalStorage('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    saveToLocalStorage('theme', newTheme);
}

// ===== Print Function =====
function printBookDetails(book) {
    const printWindow = window.open('', '_blank');
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${book.title} - ${book.author}</title>
            <style>
                body {
                    font-family: 'Georgia', serif;
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                }
                h1 { color: #333; border-bottom: 2px solid #6B46C1; padding-bottom: 10px; }
                h2 { color: #6B46C1; margin-top: 20px; }
                .meta { color: #666; margin: 10px 0; }
                .synopsis { text-align: justify; margin: 20px 0; }
                @media print {
                    body { padding: 20px; }
                }
            </style>
        </head>
        <body>
            <h1>${book.title}</h1>
            <div class="meta">
                <p><strong>Autora:</strong> ${book.author}</p>
                <p><strong>Ano:</strong> ${book.year}</p>
                <p><strong>Gênero:</strong> ${book.genre}</p>
                <p><strong>Disponibilidade:</strong> ${book.availability}</p>
                ${book.price ? `<p><strong>Preço:</strong> ${formatCurrency(book.price)}</p>` : ''}
            </div>
            <h2>Sinopse</h2>
            <div class="synopsis">${book.synopsis}</div>
            <hr>
            <p style="text-align: center; color: #999; margin-top: 30px;">
                Ministério das Mulheres - Acervo Literário Feminino Brasileiro<br>
                ${new Date().toLocaleDateString('pt-BR')}
            </p>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// ===== Export Functions =====
function exportToCSV(data, filename = 'export.csv') {
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
}

function convertToCSV(data) {
    if (!data || data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(',');
    
    const csvRows = data.map(row => {
        return headers.map(header => {
            const value = row[header];
            return typeof value === 'string' && value.includes(',') 
                ? `"${value}"` 
                : value;
        }).join(',');
    });
    
    return [csvHeaders, ...csvRows].join('\n');
}

// ===== Accessibility Functions =====
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===== Keyboard Navigation =====
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close modal on Escape
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal.active');
            if (modal) {
                closeBookModal();
            }
        }
        
        // Search focus on Ctrl+K or Cmd+K
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// ===== Performance Monitoring =====
function measurePerformance(functionName, func) {
    return function(...args) {
        const start = performance.now();
        const result = func.apply(this, args);
        const end = performance.now();
        console.log(`${functionName} took ${(end - start).toFixed(2)}ms`);
        return result;
    };
}

// ===== Initialize Components =====
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initKeyboardNavigation();
    initLazyLoading();
    
    // Add CSS for toast notifications
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.innerHTML = `
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                padding: 16px 20px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 350px;
            }
            
            .toast.show {
                transform: translateX(0);
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .toast-success {
                border-left: 4px solid #22C55E;
            }
            
            .toast-error {
                border-left: 4px solid #EF4444;
            }
            
            .toast-info {
                border-left: 4px solid #3B82F6;
            }
            
            .toast svg {
                flex-shrink: 0;
            }
            
            .toast-success svg { color: #22C55E; }
            .toast-error svg { color: #EF4444; }
            .toast-info svg { color: #3B82F6; }
            
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
            }
        `;
        document.head.appendChild(style);
    }
});