import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// // or
// import { Button } from '@mui/material';
function Footer(props) {
    return (
        <div>
            <Link href="#">Link</Link>
            <Link href="#" color="inherit">
                {'color="inherit"'}
            </Link>
            <Link href="#" variant="body2">
                {'variant="body2"'}
            </Link>
        </div>
    );
}

export default Footer;