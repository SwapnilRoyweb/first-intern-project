import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import StudentInfo from '../StudentInfo/StudentInfo';
import StudentTotal from '../StudentTotal/StudentTotal';

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 mx-auto w-fit'>
                <div className='col-span-1 lg:col-start-0 lg:col-end-1 '>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-1 lg:col-start-1 lg:col-end-3 flex flex-col xl:flex-row gap-5'>
                    <StudentInfo></StudentInfo>
                    <StudentTotal></StudentTotal>
                </div>
            </div>
        </div>
    );
};

export default Home;