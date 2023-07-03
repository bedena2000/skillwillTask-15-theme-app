import { useState, useEffect } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

// Hooks
import useWindowSize from '../hooks/useWindowSize';

const ThemeSwitcher = ({ changeTheme }) => {

    const sizeOfWindow = useWindowSize();
    

    const [theme, setTheme] = useState(
        localStorage.getItem('currentTheme') ? 
        localStorage.getItem('currentTheme') === 'light' ? true : false : false
    )

    const handleClick = () => {
        if(theme === true) {
            changeTheme('dark');
        } else {
            changeTheme('light');
        };
        setTheme(state => !state);
    };

    return (
        <div onClick={handleClick} className="theme-box">
            {
                theme ? <BsMoonFill /> : <BsFillSunFill />
            }
        </div>
    );
};

export default ThemeSwitcher;