import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface PressAdminLoginProps {
  onLogin: () => void;
}

const PressAdminLogin: React.FC<PressAdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simple authentication - hardcoded credentials
    // In a real app, this would be a server request
    setTimeout(() => {
      if (username === 'Admin' && password === 'JAPA2025!') {
        // Store authentication state in localStorage
        localStorage.setItem('pressAdminAuthenticated', 'true');
        onLogin();
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 800); // Simulate network request
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <div className="bg-japa-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-japa-orange" />
          </div>
          <h1 className="text-2xl font-bold text-japa-slate">Press Admin Login</h1>
          <p className="text-japa-slate/70 mt-2">
            Enter your credentials to access the press management dashboard
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-japa-slate mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-japa-orange focus:border-transparent"
                  placeholder="Username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-japa-slate mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-japa-orange focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button 
                type="submit"
                className="w-full bg-japa-orange text-white rounded-lg py-3 font-medium hover:bg-japa-orange/90 transition-colors flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PressAdminLogin; 