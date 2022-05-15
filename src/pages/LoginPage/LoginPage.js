import s from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main>
      <section className={s.login}>
        <h1 className={s.title}>Log in to your account</h1>
        <form
          className={s.form}
          // onSubmit={handleSubmit}
        >
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              // value={email}
              // onChange={handleChange}
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
              // value={password}
              // onChange={handleChange}
              placeholder="Write down your password"
              autoComplete="off"
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
