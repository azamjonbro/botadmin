import { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import Create from './create';
import Add from './add';
import Update from './update';
import Home from './home'
import './assets/style.css';

function Index() {
    const [pag, setPag] = useState(null);
    const Link = useLocation().pathname.split('/')[1];

    useEffect(() => {
        if (Link === "create") {
            setPag(<Create />);
        } else if (Link === 'add') {
            setPag(<Add />);
        } else if (Link === 'update') {
            setPag(<Update />);
        } else {
            setPag(<Home/>);
        }
    }, [Link]);

    return (
        <div className="content">
            {pag}
        </div>
    );
}

export default Index;
