import React from 'react';
import { ThemeProvider } from "@material-tailwind/react";
interface props {
    children?: React.ReactNode
}

const Layout: React.FC<props> = ({ children }) => {
    const theme = {
          styles: {  }
        }
        
    return (
        <React.Fragment>
            <ThemeProvider value={theme}>

                {children}
            </ThemeProvider>;
        </React.Fragment>
    )
}
export default Layout;