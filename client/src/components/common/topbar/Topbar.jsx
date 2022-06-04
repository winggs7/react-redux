import React from 'react';
// import PropTypes from 'prop-types';
import "./topbar.scss";
import { ChatBubbleOutline, Menu, NotificationsNone, Search, PersonOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

Topbar.propTypes = {};

function Topbar(props) {
    return (
        <div className="topbar">
            <div className="left">
                <Link to="/" className="linkDom">
                    <span className="logo">
                        WINGGS
                    </span>
                </Link>
            </div>
            <div className="center">
                <div className="searchBar">
                    <Search className="icon" />
                    <input type="text" className="inputBox" placeholder="Search" />
                </div>
            </div>
            <div className="right">
                <div className="iconItem">
                    <NotificationsNone className="icon" />
                    <span className="badge">1</span>
                </div>
                <div className="iconItem">
                    <PersonOutline className="icon" />
                    <span className="badge">2</span>
                </div>
                <div className="iconItem">
                    <ChatBubbleOutline className="icon" />
                    <span className="badge">3</span>
                </div>
                <Link to="/profile" className="linkDom">
                    <img src="/assets/persons/1.jpg" alt="" className="avatar" />
                </Link>
                <div className="iconItem">
                    <Menu className="iconMenu" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
