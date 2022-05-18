import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import s from './UserMenu.module.css';

export default function UserMenu() {
  let navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem('token'));
  const token =
    (axios.defaults.headers.common.Authorization = `Bearer ${localStorageToken}`);

  const handleClick = async () => {
    try {
      await axios.delete('http://localhost:4000/api/auth/logout', {
        token,
      });
    } catch (error) {
      return toast.error('Log out failed!');
    }
    toast.success('Well, see you later!');
    navigate('/');
  };

  return (
    <div className={s.container}>
      <img
        className={s.avatar}
        src="https://raw.githubusercontent.com/SergiusNahnoinyi/github-projects-crm/main/client/public/logo192.png"
        title="User avatar"
        alt="Avatar"
        width={32}
      />
      <span className={s.name}>Welcome, name</span>
      <button
        className={s.button}
        onClick={handleClick}
        type="button"
        title="Log out"
        aria-label="Log out"
      >
        Log out
      </button>
    </div>
  );
}
