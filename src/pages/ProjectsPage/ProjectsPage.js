import s from './ProjectsPage.module.css';

export default function ProjectsPage() {
  return (
    <main>
      <section>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Project</th>
              <th>URL</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Issues</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sergius Nahnoinyi</td>
              <td>CRM system</td>
              <td>URL link</td>
              <td>10000</td>
              <td>20000</td>
              <td>1</td>
              <td>15.05.2022</td>
            </tr>
            <tr>
              <td>Sergius Nahnoinyi</td>
              <td>React-app</td>
              <td>URL link</td>
              <td>1000000</td>
              <td>2000000</td>
              <td>10</td>
              <td>10.00.2021</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
