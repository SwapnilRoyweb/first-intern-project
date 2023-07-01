import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUsers, FaClipboardList } from "react-icons/fa";

const AdminLayout = () => {

    const navItems = <>
        <li><Link to='/adminDashboard/adminHome'><FaHome />Home</Link></li>
        <li><Link to='/adminDashboard/adminHome'><FaUsers />Manage Users</Link></li>
        <li><Link to='/adminDashboard/adminHome'><FaClipboardList />Manage Courses</Link></li>
    </>

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-5">Open Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    <div className='my-10 bg-indigo-500 text-white py-3 rounded-full'>
                        <h1 className='text-center text-3xl font-bold'>Admin</h1>
                    </div>
                    {/* Sidebar content here */}
                    {navItems}
                </ul>

            </div>
        </div>
    );
};

export default AdminLayout;