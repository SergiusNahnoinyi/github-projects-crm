import Project from "../models/projectModel.js";

export const addProject = async (req, res, next) => {
  const {
    owner,
    name,
    html_url,
    stargazers_count,
    forks,
    open_issues,
    created_at,
  } = req.body;
  const isSimilarProject = await Project.findOne({
    where: {
      owner: owner,
    },
  });
  if (isSimilarProject) {
    return res.status(409).json({
      message: "Project is already in your list",
      code: 409,
      data: "Conflict",
    });
  }
  try {
    const project = await Project.create({
      owner: owner,
      repo: name,
      url: html_url,
      stars: stargazers_count,
      forks: forks,
      issues: open_issues,
      date: created_at,
    });
    res.status(201).json({ message: "Created", code: 201, data: { project } });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  const {
    description,
    name,
    html_url,
    stargazers_count,
    forks,
    open_issues,
    created_at,
  } = req.body;
  const { projectId } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id: projectId,
      },
    });
    if (!project) {
      return res.status(401).json({ message: "Not found" });
    }
    await Project.update(
      {
        owner: description,
        repo: name,
        url: html_url,
        stars: stargazers_count,
        forks: forks,
        issues: open_issues,
        date: created_at,
      },
      {
        where: {
          id: project.id,
        },
      }
    );
    return res
      .status(201)
      .json({ message: "Updated", code: 201, data: { project } });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id: projectId,
      },
    });
    if (!project) {
      return res.status(404).json({ message: "Not found" });
    }
    await Project.destroy({
      where: {
        id: project.id,
      },
    });
    return res
      .status(201)
      .json({ message: "Deleted", code: 201, data: { project } });
  } catch (error) {
    next(error);
  }
};
