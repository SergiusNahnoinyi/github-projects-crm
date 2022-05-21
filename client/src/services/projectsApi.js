import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000/api';

const fetchProjects = async data => {
  try {
    await axios.post('/projects', {
      owner: `${data.owner}`,
      name: `${data.name}`,
      html_url: `${data.html_url}`,
      stargazers_count: `${data.stargazers_count}`,
      forks: `${data.forks}`,
      open_issues: `${data.open_issues}`,
      created_at: `${data.created_at}`,
    });
    toast.success('You successfully added a project!');
  } catch (error) {
    toast.error('Adding failed!');
  }
};

const getProjects = async data => {
  try {
    const response = await axios.get('/projects');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const projectsApi = {
  fetchProjects,
  getProjects,
};

export default projectsApi;
