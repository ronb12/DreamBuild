import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GitHubCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
          throw new Error(`GitHub OAuth error: ${error}`);
        }

        if (!code) {
          throw new Error('No authorization code received');
        }

        // For now, just send the code back to the parent window
        // In a real implementation, you'd exchange this code for a token
        if (window.opener) {
          window.opener.postMessage({
            type: 'GITHUB_AUTH_SUCCESS',
            code: code,
            user: {
              id: 'temp_id',
              email: 'user@example.com',
              name: 'GitHub User',
              login: 'githubuser',
              avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
            }
          }, window.location.origin);
        }

        // Close the popup
        window.close();
      } catch (error) {
        console.error('GitHub OAuth callback error:', error);
        
        // Send error message to parent window
        if (window.opener) {
          window.opener.postMessage({
            type: 'GITHUB_AUTH_ERROR',
            error: error.message
          }, window.location.origin);
        }

        // Close the popup
        window.close();
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Completing GitHub authentication...</p>
      </div>
    </div>
  );
};

export default GitHubCallback;