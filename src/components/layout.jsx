import React from 'react';
import SidebarLeft from './SidebarLeft';

function Layout({children}) {
    return (
        <>
            <SidebarLeft />
            {children}
            <div className="right-sidebar" />
        </>
    );
}

export default Layout;