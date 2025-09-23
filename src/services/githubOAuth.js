// Direct GitHub OAuth implementation (like Cursor IDE)
class GitHubOAuth {
  constructor() {
    this.clientId = 'your_github_oauth_client_id'; // Replace with your GitHub OAuth App Client ID
    this.redirectUri = `${window.location.origin}/auth/github/callback`;
    this.scope = 'user:email,read:user';
  }

  // Generate GitHub OAuth URL
  getAuthUrl() {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: this.scope,
      state: this.generateState(),
      response_type: 'code'
    });

    return `https://github.com/login/oauth/authorize?${params.toString()}`;
  }

  // Generate random state for security
  generateState() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  // Open GitHub OAuth popup
  async authenticate() {
    return new Promise((resolve, reject) => {
      const popup = window.open(
        this.getAuthUrl(),
        'github-auth',
        'width=600,height=700,scrollbars=yes,resizable=yes'
      );

      // Listen for popup messages
      const messageListener = (event) => {
        if (event.origin !== window.location.origin) return;

        if (event.data.type === 'GITHUB_AUTH_SUCCESS') {
          window.removeEventListener('message', messageListener);
          popup.close();
          resolve(event.data.user);
        } else if (event.data.type === 'GITHUB_AUTH_ERROR') {
          window.removeEventListener('message', messageListener);
          popup.close();
          reject(new Error(event.data.error));
        }
      };

      window.addEventListener('message', messageListener);

      // Check if popup was closed manually
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed);
          window.removeEventListener('message', messageListener);
          reject(new Error('Authentication cancelled'));
        }
      }, 1000);
    });
  }

  // Handle OAuth callback
  async handleCallback(code) {
    try {
      // Exchange code for access token
      const response = await fetch('/api/auth/github', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      if (!response.ok) {
        throw new Error('Failed to exchange code for token');
      }

      const { access_token, user } = await response.json();
      
      // Store token and user info
      localStorage.setItem('github_token', access_token);
      localStorage.setItem('github_user', JSON.stringify(user));
      
      return user;
    } catch (error) {
      console.error('GitHub OAuth callback error:', error);
      throw error;
    }
  }

  // Get current user
  getCurrentUser() {
    const userStr = localStorage.getItem('github_user');
    return userStr ? JSON.parse(userStr) : null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem('github_token');
  }

  // Sign out
  signOut() {
    localStorage.removeItem('github_token');
    localStorage.removeItem('github_user');
  }
}

export default new GitHubOAuth();
