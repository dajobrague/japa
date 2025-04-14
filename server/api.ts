import express from 'express';
import { getProjectsByCategory, getAllProjects } from './notion';
import { FormattedPage } from './types';
import { formatNotionPage } from './utils';

const router = express.Router();

router.get('/projects/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const projects = await getProjectsByCategory(category);
    const formattedProjects: FormattedPage[] = projects.map(formatNotionPage);
    res.json(formattedProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const projects = await getAllProjects();
    const formattedProjects: FormattedPage[] = projects.map(formatNotionPage);
    res.json(formattedProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 