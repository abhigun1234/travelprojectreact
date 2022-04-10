import React from 'react';
import Header from './Header';
import Places from './Places';

function Dashboard(props) {
    return (
        <div>
            <Header></Header>
            <Places></Places>
        </div>
    );
}

export default Dashboard;