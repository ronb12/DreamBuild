// Direct GitHub OAuth implementation (like Cursor IDE)
class GitHubOAuth {
  constructor() {
    // You need to replace this with your actual GitHub OAuth App Client ID
    this.clientId = 'YOUR_GITHUB_CLIENT_ID_HERE'; // Replace with your GitHub OAuth App Client ID
    this.redirectUri = `${window.location.origin}/auth/github/callback`;
    this.scope = 'user:email,read:user';
    
    console.log('GitHub OAuth initialized with:', {
      clientId: this.clientId,
      redirectUri: this.redirectUri,
      scope: this.scope
    });
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
      const authUrl = this.getAuthUrl();
      console.log('Opening GitHub OAuth URL:', authUrl);
      
      const popup = window.open(
        authUrl,
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

  // Get current user
  getCurrentUser() {
    const userStr = localStorage.getItem('github_user');
    return userStr ? JSON.parse(userStr) : null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem('github_user');
  }

  // Sign out
  signOut() {
    localStorage.removeItem('github_user');
  }
}

export default new GitHubOAuth();
