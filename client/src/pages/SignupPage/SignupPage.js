import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import s from './SignupPage.module.css';

export default function SignupPage() {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      await axios.post('http://localhost:4000/api/auth/signup', {
        name: name,
        email: email,
        password: password,
      });
    } catch (error) {
      return toast.error('Account is already created!');
    }
    toast.success('You successfully signed up!');
    navigate('/login');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <section className={s.registration}>
        <h1 className={s.title}>Create your account</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Write down your name"
              autoComplete="off"
              required
            />
          </label>
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
              required
            />
          </label>
          <button className={s.button} type="submit">
            Sign up
          </button>
        </form>
      </section>
    </main>
  );
}
