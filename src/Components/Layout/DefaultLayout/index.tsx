import React, { ReactNode } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
// import tw from "twin.macro";
function DefaultLayout({ children } : { children: ReactNode }) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;