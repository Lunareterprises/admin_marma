import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AtSign } from 'lucide-react';
import AuthLayout from '../../components/ui/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ForgotPasswordPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validate input
    if (!username.trim()) {
      setError('Please enter your username or email');
      setIsLoading(false);
      return;
    }

    // Simulate sending password reset instructions
    setTimeout(() => {
      // For demo, we'll just move to OTP verification
      // In a real app, this would send an email with OTP
      navigate('/verify-otp', { state: { username } });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your username or email and we'll send a verification code"
    >
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="animate-fadeIn">
        <div className="space-y-5">
          <Input
            label="Username or Email"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username or email"
            icon={<AtSign size={18} className="text-gray-400" />}
            required
          />

          <div>
            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              Send Reset Code
            </Button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="text-sm text-blue-600 hover:text-blue-800 transition duration-150"
            >
              Back to login
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
