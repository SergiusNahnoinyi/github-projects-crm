import s from './SignupPage.module.css';

export default function SignupPage() {
  return (
    <main>
      <section className={s.registration}>
        <h1 className={s.title}>Create your account</h1>
        <form
          className={s.form}
          //  onSubmit={handleSubmit}
        >
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              //  value={name}
              //  onChange={handleChange}
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
              //  value={email}
              //  onChange={handleChange}
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
              //  value={password}
              //  onChange={handleChange}
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
