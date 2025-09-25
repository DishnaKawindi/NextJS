// new layout for dashboard files. But these will also show the root layout
import React from 'react';

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <p className={"text-3xl"}>Dashboard Layout</p>
            {children}
        </div>
    );
};

export default Layout;