const course= require('..models/course.model');

const getAllCourses= async(req,res)=>{
    //get all courses from the database using model .
 const courses = await course.find();
res.json (courses);
}
