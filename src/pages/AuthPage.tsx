import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiMessageCircle } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import clsx from 'clsx';
import '../App.css'; // Import global styles if needed
import './AuthPage.css'; // Custom styles for 3D effects

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot' | 'guest'>('signin');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setMessage('');
  };

  const validate = () => {
    let err: any = {};
    if (mode === 'signup') {
      if (!fields.name) err.name = 'Name is required.';
      if (!fields.email) err.email = 'Email is required.';
      else if (!emailRegex.test(fields.email)) err.email = 'Invalid email.';
      if (!fields.password) err.password = 'Password is required.';
      if (!fields.confirm) err.confirm = 'Confirm your password.';
      if (fields.password && fields.confirm && fields.password !== fields.confirm) err.confirm = 'Passwords do not match.';
    } else if (mode === 'signin') {
      if (!fields.email) err.email = 'Email is required.';
      else if (!emailRegex.test(fields.email)) err.email = 'Invalid email.';
      if (!fields.password) err.password = 'Password is required.';
    } else if (mode === 'forgot') {
      if (!fields.email) err.email = 'Email is required.';
      else if (!emailRegex.test(fields.email)) err.email = 'Invalid email.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setMessage('');
    setTimeout(() => {
      setLoading(false);
      if (mode === 'signin') {
        setMessage('Signed in successfully!');
        setTimeout(() => navigate('/home'), 800);
      } else if (mode === 'signup') {
        setMessage('Account created! You can now sign in.');
        setMode('signin');
        setFields({ name: '', email: '', password: '', confirm: '' });
      } else if (mode === 'forgot') {
        setMessage('Password reset link sent to your email.');
        setTimeout(() => navigate('/home'), 1200);
      }
    }, 1500);
  };

  const handleGuest = () => {
    setLoading(true);
    setMessage('');
    setTimeout(() => {
      setLoading(false);
      setMessage('Signed in as guest!');
      setTimeout(() => navigate('/home'), 800);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="auth-card relative bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center animate-fade-in">
        <div className="mb-6 flex flex-col items-center">
          <FiMessageCircle className="w-14 h-14 mb-2 text-indigo-500 drop-shadow-lg" />
          <h1 className="text-3xl font-bold text-indigo-600 tracking-tight">Aask AI</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className={clsx("flex items-center border rounded-xl px-3 py-2 transition-all duration-200 bg-white focus-within:ring-2 focus-within:ring-indigo-400", errors.name && 'border-red-500') }>
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  className="flex-1 outline-none bg-transparent text-gray-800"
                  value={fields.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Enter your name"
                />
              </div>
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className={clsx("flex items-center border rounded-xl px-3 py-2 transition-all duration-200 bg-white focus-within:ring-2 focus-within:ring-indigo-400", errors.email && 'border-red-500') }>
              <FiMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                className="flex-1 outline-none bg-transparent text-gray-800"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          {(mode === 'signin' || mode === 'signup') && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className={clsx("flex items-center border rounded-xl px-3 py-2 transition-all duration-200 bg-white focus-within:ring-2 focus-within:ring-indigo-400", errors.password && 'border-red-500') }>
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  className="flex-1 outline-none bg-transparent text-gray-800"
                  value={fields.password}
                  onChange={handleChange}
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
          )}
          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className={clsx("flex items-center border rounded-xl px-3 py-2 transition-all duration-200 bg-white focus-within:ring-2 focus-within:ring-indigo-400", errors.confirm && 'border-red-500') }>
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="confirm"
                  className="flex-1 outline-none bg-transparent text-gray-800"
                  value={fields.confirm}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                />
              </div>
              {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
            </div>
          )}
          {mode === 'forgot' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter your email to reset password</label>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin" /> : mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Sign Up' : 'Send Reset Link'}
          </button>
        </form>
        <div className="flex flex-col w-full mt-4 text-sm gap-2">
          {mode !== 'signin' && (
            <button className="text-indigo-500 hover:underline transition-all duration-150 text-left" onClick={() => { setMode('signin'); setMessage(''); }}>
              Already have an account? Sign In
            </button>
          )}
          {mode !== 'signup' && (
            <button className="text-indigo-500 hover:underline transition-all duration-150 text-left" onClick={() => { setMode('signup'); setMessage(''); }}>
              Create an account (Sign Up)
            </button>
          )}
          {mode !== 'forgot' && (
            <button className="text-pink-500 hover:underline transition-all duration-150 text-left" onClick={() => { setMode('forgot'); setMessage(''); }}>
              Forgot Password?
            </button>
          )}
          <button className="text-green-500 hover:underline transition-all duration-150 text-left" onClick={handleGuest} disabled={loading}>
            {loading ? <FaSpinner className="animate-spin inline-block mr-1" /> : null} Sign in as Guest
          </button>
        </div>
        {message && <div className="mt-4 text-center text-sm text-indigo-600 font-medium">{message}</div>}
      </div>
    </div>
  );
};

export default AuthPage;
