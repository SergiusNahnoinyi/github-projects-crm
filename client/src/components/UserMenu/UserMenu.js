import { useSelector, useDispatch } from 'react-redux';

import { authOperations, authSelectors } from '../../redux/auth';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img
        className={s.avatar}
        src="https://raw.githubusercontent.com/SergiusNahnoinyi/github-projects-crm/main/client/public/logo192.png"
        title="User avatar"
        alt="Avatar"
        width={32}
      />
      <span className={s.name}>Welcome, {name}</span>
      <button
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
        title="Log out"
        aria-label="Log out"
      >
        Log out
      </button>
    </div>
  );
}
