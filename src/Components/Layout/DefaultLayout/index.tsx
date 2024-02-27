import React, { ReactNode } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
// import tw from "twin.macro";
function DefaultLayout({ children } : { children: ReactNode }) {
    return ( 
        <div className='flex flex-col items-center gap-4'>
            <div className='w-9/12'>
                <Header />
            </div>
            <div className="w-9/12 flex gap-4">
                <div className='w-1/4 rounded-md'>
                    <Sidebar />
                </div>
                <div className="w-3/4 h-full shadow-md rounded-md max-h-[40rem] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;