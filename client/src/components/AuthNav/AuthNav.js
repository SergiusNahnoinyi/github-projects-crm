import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Log in
      </NavLink>
    </nav>
  );
}
