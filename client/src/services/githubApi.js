import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  // auth: 'token',
  accept: 'application/vnd.github.v3+json',
});

async function getRepobySearchQuery(query) {
  if (!query) {
    return;
  }
  try {
    const response = await octokit.request(
      `GET /repos/${query}`,
      //   {
      //   owner: 'SergiusNahnoinyi',
      //   repo: 'github-projects-crm',
      // }
    );

    const {
      id,
      owner,
      name,
      html_url,
      stargazers_count,
      forks,
      open_issues,
      created_at,
    } = response.data;

    return {
      id,
      owner: owner.login,
      name,
      html_url,
      stargazers_count,
      forks,
      open_issues,
      created_at,
    };
  } catch (error) {
    console.error(error);
  }
}

const service = {
  getRepobySearchQuery,
};

export default service;
