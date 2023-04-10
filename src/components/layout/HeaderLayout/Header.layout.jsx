import {ButtonToggle, HeaderWrapper, MainUL} from "./Header.styled.js";
import {AppContext} from "../../../store/context.jsx";
import {useContext} from "react";

export const HeaderLayout = () => {

    const {state, dispatch} = useContext(AppContext);

    const handleTheme = () => {
        const themePayload = state.theme === 'light' ? 'dark' : 'light';
        dispatch({type: 'SET_THEME', payload: themePayload});

    }

    let themeValue = JSON.parse(localStorage.getItem("theme")); // Cambiado a localStorage
    console.log(themeValue, 'themeValue');

    return (
        <HeaderWrapper theme={themeValue}>
            <p>
                Frontend III
            </p>
            <main>
                <MainUL>
                    <li>
                        <a
                            href='/'
                            rel="noopener noreferrer"
                            target="_self"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href='/contact'
                            rel="noopener noreferrer"
                            target="_self"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href='/favs'
                            rel="noopener noreferrer"
                            target="_self"
                        >
                            favs
                        </a>
                    </li>
                </MainUL>
            </main>
            {/*<button onClick={toggleTheme}>Toggle Theme</button>*/}
            <ButtonToggle onClick={handleTheme}>Toggle Theme</ButtonToggle>
        </HeaderWrapper>
    )
}
