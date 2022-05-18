import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
