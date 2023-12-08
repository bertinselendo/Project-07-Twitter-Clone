import React from 'react';
import SidebarLeft from '../templates/SidebarLeft';
import SidebarRight from '../templates/sidebarRight';

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