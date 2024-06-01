const express = require('express');
const router = express.Router();

// Import the getAllCourses controller
const { getAllCourses } = require('../controllers/courses');

// Define the route for getting all courses
router.get('/courses', getAllCourses);

module.exports = router;