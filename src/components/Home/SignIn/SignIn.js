// src/SignIn.js
import React, { useState } from 'react';
import './SignIn.css';
import { signInWithGoogle } from './firebase'; 
import { Link } from 'react-router-dom';
// Import the Google sign-in function

const SignIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-in logic here
    console.log('ID:', id);
    console.log('Password:', password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log('Google Sign-In successful:', result.user);
        // Redirect or handle user after successful sign-in
        <Link to="/signin">Sign in</Link>

      })
      .catch((error) => {
        console.error('Google Sign-In error:', error);
      });
  };

  // const handleForgotPassword = () => {
  //   if (!id) {
  //     alert('Please enter your email ID.');
  //     return;
  //   }

  //   sendPasswordResetEmail(id)
  //     .then(() => {
  //       alert('Password reset email sent! Check your inbox.');
  //     })
  //     .catch((error) => {
  //       console.error('Error sending password reset email:', error.message);
  //       alert('Failed to send password reset email. Please try again.');
  //     });
  // };

  // const handleSignUp = () => {
  //   if (!id || !password) {
  //     alert('Please enter your email ID and password.');
  //     return;
  //   }

  //   createUserWithEmailAndPassword(id, password)
  //     .then((userCredential) => {
  //       console.log('User signed up successfully:', userCredential.user);
  //       // Handle post-sign-up logic here (e.g., redirect to dashboard)
  //     })
  //     .catch((error) => {
  //       console.error('Error signing up:', error.message);
  //       alert('Failed to sign up. Please try again.');
  //     });
  // };
  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2>Let's get started!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="ID-ASV215487963"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        <div className="divider">Or Sign in with</div>
        <button className="google-sign-in" onClick={handleGoogleSignIn}>
          <p>Google</p>
        </button>
        <div className="sign-up">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};  

export default SignIn;
