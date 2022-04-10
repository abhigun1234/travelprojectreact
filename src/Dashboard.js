import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Places from './Places';

function Dashboard(props) {
    return (
        <div>
            <Header></Header>
            <Places></Places>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;