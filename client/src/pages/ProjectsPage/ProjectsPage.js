import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import githubApi from '../../services/githubApi';
import projectsApi from '../../services/projectsApi';

import s from './ProjectsPage.module.css';

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    projectsApi.getProjects().then(response => {
      setData(response);
    });
  }, []);

  const handleChange = e => {
    setQuery(e.currentTarget.value.replace(/ /g, ''));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    githubApi.getRepobySearchQuery(query).then(response => {
      const similarRepo = data.find(
        ({ proj_id }) => proj_id === response.proj_id,
      );
      if (similarRepo) {
        return toast.error(`This repo is already in your list`);
      }
      projectsApi.fetchProjects(response);
      setData(data => [...data, response]);
    });

    setQuery('');
  };

  const onDelete = proj_id => {
    projectsApi
      .deleteProject(proj_id)
      .then(setData(data.filter(project => project.proj_id !== proj_id)));
  };

  // const onUpdate = id => {
  //   projectsApi
  //     .updateProject(id)
  //     .then(setData(data.filter(project => project.id !== id)));
  // };

  return (
    <main>
      <section>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Username/Project
            <input
              className={s.input}
              type="text"
              name="project"
              value={query}
              onChange={handleChange}
              title="Paste your Github name and project separeted by /. For example, Username/Project"
              required
            />
          </label>
          <button className={s.button} type="submit">
            Add project
          </button>
        </form>
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
            {data &&
              data.map(data => (
                <tr key={data.proj_id}>
                  <td>{data.owner}</td>
                  <td>{data.name}</td>
                  <td>{data.html_url}</td>
                  <td>{data.stargazers_count}</td>
                  <td>{data.forks}</td>
                  <td>{data.open_issues}</td>
                  <td>{data.created_at}</td>
                  <td>
                    <button
                    // onClick={() => onUpdate(data.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onDelete(data.proj_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
