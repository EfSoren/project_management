const db = require('../config/connection');
const { User, Team, Company, Project, Task } = require('../models/');

const userData = require('./userSeeds.json');
const teamData = require('./teamSeeds.json');
const companyData = require('./companySeeds.json');
const projectData = require('./projectSeeds.json');
const taskData = require('./taskSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userData);

  await Team.deleteMany({});
  await Team.create(teamData);

  await Task.deleteMany({});
  await Task.create(taskData);

  await Company.deleteMany({});
  await Company.create(companyData);

  await Project.deleteMany({});
  await Project.create(projectData);

  console.log('Project management data seeded!');
  process.exit(0);
});
