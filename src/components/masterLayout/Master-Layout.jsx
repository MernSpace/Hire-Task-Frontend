import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import {
    BsCheckCircle,
    BsDashCircle,
    BsExclamationTriangle,
    BsHourglass,
    BsListNested
} from "react-icons/bs";
import logo from "../../assets/images/logo.svg";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";

import {getUserDetails, removeSessions} from "../../helper/SessionHelper";



const MasterLayout = (props) => {
    console.log(getUserDetails())
    let contentRef,sideNavRef=useRef();

    const onLogout=()=>{
        removeSessions();
    }

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };



    return (
        <Fragment>
            <Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}><AiOutlineMenuUnfold/></a>
                        <img className="nav-logo mx-2"  src={logo} alt="logo"/>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={getUserDetails().photo} alt=""/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src={getUserDetails().photo} alt=""/>
                                    <h6>{getUserDetails().firstName}</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item text-decoration-none">
                                    <AiOutlineUser className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout}  className="side-bar-item text-decoration-none">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) =>{sideNavRef=div}} className="side-nav-open">

                <NavLink   className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" }  to="/"  end>
                    <RiDashboardLine className="side-bar-item-icon " />
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" } to="/Create" >
                    <AiOutlineEdit className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Create New</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" } to="/All" >
                    <BsListNested className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">New Task</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" } to="/High" >
                    <BsExclamationTriangle className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Priority High Task</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" } to="/medium" >
                    <BsDashCircle className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Priority Medium Task</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" } to="/Low" >
                    <BsCheckCircle className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Priority Low Task</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" } to="/Pending" >
                    <BsHourglass className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Pending Task</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" }  to="/Completed" >
                    <AiOutlineCheckCircle className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none" }  to="/Canceled" >
                    <MdOutlineCancelPresentation className="side-bar-item-icon" />
                    <span className="side-bar-item-caption text-decoration-none">Canceled</span>
                </NavLink>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayout;