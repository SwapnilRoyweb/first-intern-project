import React from 'react';

const AdminTotal = () => {
    return (
        <div className='flex flex-col lg:flex-row flex-wrap gap-10'>
            <div className="stats shadow-2xl shadow-black w-60 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-black bg-opacity-90 hover:bg-indigo-500 hover:text-white duration-300 ">

                <div className="stat">
                    <div className="stat-title text-white">Total Students</div>
                    <div className="stat-value text-slate-300 hover:text-white">89,400</div>
                </div>

            </div>
            <div className="stats bg-black bg-opacity-90 shadow-2xl shadow-black w-60 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 ">

                <div className="stat">
                    <div className="stat-title text-white">Total Batch</div>
                    <div className="stat-value text-slate-300 hover:text-white">10</div>
                </div>

            </div>
            <div className="stats bg-black bg-opacity-90 shadow-2xl shadow-black w-60 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 ">

                <div className="stat">
                    <div className="stat-title text-white">Total Classes</div>
                    <div className="stat-value text-slate-300 hover:text-white">89,400</div>
                </div>

            </div>
            <div className="stats bg-black bg-opacity-90 shadow-2xl shadow-black w-60 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 ">

                <div className="stat">
                    <div className="stat-title text-white">Total Income</div>
                    <div className="stat-value text-slate-300 hover:text-white">89,400</div>
                </div>

            </div>
            <div className="stats bg-black bg-opacity-90 shadow-2xl shadow-black w-60 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 ">

                <div className="stat">
                    <div className="stat-title text-white">Total Profit</div>
                    <div className="stat-value text-slate-300 hover:text-white">89,400</div>
                </div>

            </div>
            <div className="stats bg-black bg-opacity-90 shadow-2xl shadow-black w-60 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 ">

                <div className="stat">
                    <div className="stat-title text-white">Total Expense</div>
                    <div className="stat-value text-slate-300 hover:text-white">89,400</div>
                </div>

            </div>
           
        </div>
    );
};

export default AdminTotal;