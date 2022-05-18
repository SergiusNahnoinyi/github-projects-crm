import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import s from './LoginPage.module.css';

export default function LoginPage() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/login', {
        email: email,
        password: password,
      });
    } catch (error) {
      return toast.error('Log in failed! Check your data or sign up!');
    }
    toast.success('You successfully logged in!');
    navigate('/projects');
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <section className={s.login}>
        <h1 className={s.title}>Log in to your account</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Write down your e-mail"
              autoComplete="off"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Email must have valid email address"
              required
            />
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Write down your password"
              autoComplete="off"
              pattern=".{3,20}$"
              title="Password must have min 3 letters"
              required
            />
          </label>
          <button className={s.button} type="submit">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
