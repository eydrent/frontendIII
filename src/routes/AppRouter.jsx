import React, {useContext} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';

import {AppContext} from "../store/context.jsx";
import {HomePage} from "../components/pages/HomePage/Home.page.jsx";
import {ContactPage} from "../components/pages/ContactPage/Contact.page.jsx";
import {DentistDetailsPage} from "../components/pages/DentistDetailsPage/DentistDetails.page.jsx";
import {FavsPage} from "../components/pages/FavsPage/Favs.page.jsx";
import {HeaderLayout} from "../components/layout/HeaderLayout/Header.layout.jsx";
import {LoginPage} from "../components/pages/LoginPage/Login.page.jsx";

function AppRouter() {
    const {state} = useContext(AppContext);
    const {isAuthenticated} = state;

    return (
        <Router>
            {
                isAuthenticated ?
                    <HeaderLayout/> : null
            }
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/dentist/:id" element={<DentistDetailsPage/>}/>
                        <Route path="/favs" element={<FavsPage/>}/>
                    </>
                ) : (
                    // <Route path="/login" element={<LoginPage/>}/>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                )}
            </Routes>
        </Router>
    );
}

export default AppRouter;
