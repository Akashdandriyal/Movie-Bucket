import React from 'react'
import TheatersIcon from '@material-ui/icons/Theaters';

const Header = (props) => {
    return (
        <header className = "App-header">
            <h2><TheatersIcon /> {props.text}</h2>
        </header>
    );
}

export default Header;
