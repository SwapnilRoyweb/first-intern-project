import React from 'react';

const NoticeBoard = () => {
    return (
        <div className='mt-8 mb-8 lg:mb-0 flex flex-col items-center'>
            <div data-aos="flip-up" className='bg-gradient-to-r from-indigo-200 to-blue-700 py-1 rounded-xl border-b-4 border-black w-4/5'>
                <h1 className='text-center text-3xl uppercase font-bold text-white'>Notice Board</h1>
            </div>
            <div data-aos="flip-down" data-aos-duration="2000" className='flex justify-around w-full'>
                <div className="divider divider-horizontal bg-black h-5 w-1"></div>
                <div className="divider divider-horizontal bg-black h-5 w-1"></div>
            </div>
            <div data-aos="fade-down" data-aos-duration="3000" className="artboard artboard-horizontal w-3/5 max-h-screen py-5 bg-gradient-to-r from-indigo-100 to-blue-200 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-blue-300 rounded-xl">
                <div className='flex flex-col items-center gap-5 '>
                    <h1 className='bg-white h-fit w-4/5 px-3 text-center py-1 font-semibold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Here are some notice which is very important for all students.</h1>
                    <h1 className='bg-white h-fit w-4/5 px-3 text-center py-1 font-semibold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Here are some notice which is very important for all students.</h1>
                    <h1 className='bg-white h-fit w-4/5 px-3 text-center py-1 font-semibold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Here are some notice which is very important for all students.</h1>
                </div>
            </div>

        </div>
    );
};

export default NoticeBoard;