// ===== Sistema de Autenticação =====

// Credenciais de acesso (usuário: admin, senha: ministeriomulheres2025)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'ministeriomulheres2025'
};

// Chave para armazenar sessão no localStorage
const AUTH_SESSION_KEY = 'ministerio_admin_session';

// Duração da sessão em millisegundos (2 horas)
const SESSION_DURATION = 2 * 60 * 60 * 1000;

// ===== Funções de Autenticação =====

// Verificar se o usuário está autenticado
function isAuthenticated() {
    const session = getStoredSession();
    if (!session) return false;
    
    // Verificar se a sessão não expirou
    const now = new Date().getTime();
    if (now > session.expires) {
        clearSession();
        return false;
    }
    
    return true;
}

// Obter sessão armazenada
function getStoredSession() {
    try {
        const sessionData = localStorage.getItem(AUTH_SESSION_KEY);
        return sessionData ? JSON.parse(sessionData) : null;
    } catch (error) {
        console.error('Erro ao recuperar sessão:', error);
        return null;
    }
}

// Criar nova sessão
function createSession(username) {
    const now = new Date().getTime();
    const session = {
        username: username,
        created: now,
        expires: now + SESSION_DURATION
    };
    
    try {
        localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
        return true;
    } catch (error) {
        console.error('Erro ao criar sessão:', error);
        return false;
    }
}

// Limpar sessão
function clearSession() {
    try {
        localStorage.removeItem(AUTH_SESSION_KEY);
    } catch (error) {
        console.error('Erro ao limpar sessão:', error);
    }
}

// Validar credenciais
function validateCredentials(username, password) {
    return username === ADMIN_CREDENTIALS.username && 
           password === ADMIN_CREDENTIALS.password;
}

// ===== Funções do Modal de Login =====

// Mostrar modal de login
function showLoginModal() {
    // Criar modal dinamicamente se não existir
    let modal = document.getElementById('loginModal');
    if (!modal) {
        modal = createLoginModal();
        document.body.appendChild(modal);
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focar no campo de usuário
    setTimeout(() => {
        const usernameField = document.getElementById('username');
        if (usernameField) usernameField.focus();
    }, 100);
}

// Criar modal de login
function createLoginModal() {
    const modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content login-modal">
            <button class="modal-close" onclick="closeLoginModal()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="login-content">
                <div class="login-header">
                    <div class="login-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                    </div>
                    <h2>Acesso Administrativo</h2>
                    <p>Faça login para acessar o painel de administração</p>
                </div>
                
                <form id="loginForm" onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="username">Usuário</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    
                    <div id="loginError" class="error-message" style="display: none;"></div>
                    
                    <button type="submit" class="btn-login">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        Entrar
                    </button>
                </form>
                
                <div class="login-info">
                    <p>🔒 Acesso restrito a administradores</p>
                    <p style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.5rem;">
                        Usuário: admin<br>
                        Senha: ministeriomulheres2025
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar estilos CSS se não existirem
    if (!document.getElementById('login-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'login-modal-styles';
        style.innerHTML = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .modal.active {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            
            .modal.active .modal-content {
                transform: scale(1);
            }
            
            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                color: #6b7280;
                transition: all 0.3s ease;
            }
            
            .modal-close:hover {
                background: #f3f4f6;
                color: #374151;
            }
            
            .login-modal {
                max-width: 400px;
                width: 90%;
            }
            
            .login-content {
                padding: 2rem;
            }
            
            .login-header {
                text-align: center;
                margin-bottom: 2rem;
            }
            
            .login-icon {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #9333ea, #6b21a8);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                color: white;
            }
            
            .login-header h2 {
                color: #1f2937;
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }
            
            .login-header p {
                color: #6b7280;
                font-size: 0.875rem;
            }
            
            .form-group {
                margin-bottom: 1rem;
            }
            
            .form-group label {
                display: block;
                font-weight: 500;
                color: #374151;
                margin-bottom: 0.5rem;
                font-size: 0.875rem;
            }
            
            .form-group input {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 1rem;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
            }
            
            .form-group input:focus {
                outline: none;
                border-color: #9333ea;
                box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
            }
            
            .btn-login {
                width: 100%;
                padding: 0.75rem 1rem;
                background: linear-gradient(135deg, #9333ea, #7c3aed);
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 1rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            
            .btn-login:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
            }
            
            .error-message {
                background: rgba(239, 68, 68, 0.1);
                color: #dc2626;
                padding: 0.75rem;
                border-radius: 6px;
                font-size: 0.875rem;
                margin-bottom: 1rem;
                border: 1px solid rgba(239, 68, 68, 0.2);
            }
            
            .login-info {
                text-align: center;
                margin-top: 1.5rem;
                padding-top: 1rem;
                border-top: 1px solid #e5e7eb;
            }
            
            .login-info p {
                color: #6b7280;
                font-size: 0.875rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    return modal;
}

// Fechar modal de login
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Limpar formulário
        const form = document.getElementById('loginForm');
        if (form) form.reset();
        
        // Esconder mensagem de erro
        hideLoginError();
    }
}

// Processar login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    // Validar campos
    if (!username || !password) {
        showLoginError('Por favor, preencha todos os campos.');
        return;
    }
    
    // Validar credenciais
    if (!validateCredentials(username, password)) {
        showLoginError('Usuário ou senha incorretos.');
        return;
    }
    
    // Criar sessão
    if (createSession(username)) {
        closeLoginModal();
        showSuccessNotification('Login realizado com sucesso!');
        
        // Redirecionar para o painel administrativo
        setTimeout(() => {
            window.location.href = 'admin.html';
        }, 1000);
    } else {
        showLoginError('Erro ao iniciar sessão. Tente novamente.');
    }
}

// Mostrar erro de login
function showLoginError(message) {
    const errorElement = document.getElementById('loginError');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Esconder erro de login
function hideLoginError() {
    const errorElement = document.getElementById('loginError');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Mostrar notificação de sucesso
function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== Proteção de Páginas Administrativas =====

// Verificar acesso a páginas administrativas
function checkAdminAccess() {
    const isAdminPage = window.location.pathname.includes('admin.html');
    
    if (isAdminPage && !isAuthenticated()) {
        alert('Acesso negado. Você precisa fazer login para acessar esta página.');
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Logout do usuário
function logout() {
    if (confirm('Tem certeza que deseja fazer logout?')) {
        clearSession();
        showSuccessNotification('Logout realizado com sucesso!');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Obter informações do usuário logado
function getCurrentUser() {
    const session = getStoredSession();
    return session ? session.username : null;
}

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', function() {
    // Verificar acesso administrativo
    checkAdminAccess();
    
    // Adicionar event listener para fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const loginModal = document.getElementById('loginModal');
            if (loginModal && loginModal.classList.contains('active')) {
                closeLoginModal();
            }
        }
    });
});

// Exportar funções para uso global
window.showLoginModal = showLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLogin = handleLogin;
window.logout = logout;
window.isAuthenticated = isAuthenticated;
window.getCurrentUser = getCurrentUser;