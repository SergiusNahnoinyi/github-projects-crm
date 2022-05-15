import s from './HomePage.module.css';
import logo from './logo.svg';

export default function HomePage() {
  return (
    <main>
      <div className={s.container}>
        <img className={s.logo} src={logo} alt="logo" />
        <h2 className={s.title}>CRM React App</h2>
      </div>
    </main>
  );
}
