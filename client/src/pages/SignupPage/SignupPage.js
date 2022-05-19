import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './SignupPage.module.css';

export default function SignupPage() {
  const dispatch = useDispatch();
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
    dispatch(authOperations.signUp({ name, email, password }));
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
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*.{3,40}$"
              title="Name must have min 3 letters and may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz, d'Artagnan"
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
            Sign up
          </button>
        </form>
      </section>
    </main>
  );
}
