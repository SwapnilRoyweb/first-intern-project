import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard/CourseCard';

const ManageCourse = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div className='mt-5 mx-5'>
            <div className=' bg-indigo-300 px-10 py-3 rounded-full border-x-4 border-black border-b-2 w-full flex items-center justify-between'>
                <h1 className='text-3xl font-bold'>Provided Courses</h1>
                <button className='btn btn-primary w-32'>Add Course</button>
            </div>
            <div className='mt-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-10'>
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default ManageCourse;