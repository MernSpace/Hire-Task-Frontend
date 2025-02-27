import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";


import DashboardPage from "./pages/Dashboard-Page.jsx";
import CreatePage from "./pages/Create-Page.jsx";
import NewPage from "./pages/New-Page.jsx";
import ProgressPage from "./pages/Progress-Page.jsx";
import CompletedPage from "./pages/Completed-Page.jsx";
import CanceledPage from "./pages/Canceled-Page.jsx";
import ProfilePage from "./pages/Profile-Page.jsx";
import LoginPage from "./pages/Login-Page.jsx";
import RegistrationPage from "./pages/Registration-Page.jsx";
import Page404 from "./pages/Page-404.jsx";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader.jsx";
import {getToken} from "./helper/SessionHelper.js";
import SendOTPPage from "./pages/AccountRecover/Send-OTP-Page.jsx";
import VerifyOTPPage from "./pages/AccountRecover/Verify-OTP-Page.jsx";
import CreatePasswordPage from "./pages/AccountRecover/Create-Password-Page.jsx";
import HighTaskPage from "./pages/HighTaskPage.jsx";
import LowTaskPage from "./pages/LowTaskPage.jsx";
import MediumTaskPage from "./pages/MediumTaskPage.jsx";

const App = () => {

    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact  path="/" element={<DashboardPage  />} />
                        <Route exact path="/Create" element={<CreatePage />} />
                        <Route exact path="/All" element={<NewPage />}/>
                        <Route exact path="/High" element={<HighTaskPage />}/>
                        <Route exact path="/Low" element={<LowTaskPage />}/>
                        <Route exact path="/medium" element={<MediumTaskPage />}/>
                        <Route exact path="/Pending"  element={<ProgressPage />}/>
                        <Route exact path="/Completed"  element={<CompletedPage />}/>
                        <Route exact path="/Canceled" element={<CanceledPage />}/>
                        <Route exact path="/Profile" element={<ProfilePage />}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );

    }
    else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Login" replace />}/>
                        <Route exact path="/Login" element={<LoginPage />}/>
                        <Route exact path="/Registration" element={<RegistrationPage />}/>

                        <Route exact path="/SendOTP" element={<SendOTPPage/>}/>
                        <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                        <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>

                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }
};

export default App;