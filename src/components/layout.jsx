import React from 'react';
import SidebarLeft from './sidebarLeft';
import SidebarRight from './sidebarRight';

function Layout({children}) {
    return (
        <>
            <SidebarLeft />
            {children}
            <SidebarRight />
        </>
    );
}

export default Layout;