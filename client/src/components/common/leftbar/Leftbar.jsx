import React from 'react';
// import PropTypes from 'prop-types';
import "./leftbar.scss";
import { ExitToApp, AssignmentIndOutlined, AssignmentOutlined, BookmarkBorderOutlined, ChatBubbleOutline, ImportContactsOutlined, MovieCreationOutlined, PeopleAltOutlined, PermMediaOutlined } from "@material-ui/icons";
import { userLogout } from '../../../redux/userSlice';
import { useDispatch } from 'react-redux';

Leftbar.propTypes = {};

function Leftbar(props) {
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userLogout());
    }

    return (
        <div className="leftbar" >
            <div className="wrapper">
                <div className="item">
                    <AssignmentOutlined className="icon" />
                    <span className="text">News Feed</span>
                </div>
                <div className="item">
                    <ChatBubbleOutline className="icon" />
                    <span className="text">Inbox</span>
                </div>
                <div className="item">
                    <AssignmentIndOutlined className="icon" />
                    <span className="text">My Pages</span>
                </div>
                <div className="item">
                    <PeopleAltOutlined className="icon" />
                    <span className="text">Friends</span>
                </div>
                <div className="item">
                    <PermMediaOutlined className="icon" />
                    <span className="text">Images</span>
                </div>
                <div className="item">
                    <MovieCreationOutlined className="icon" />
                    <span className="text">Videos</span>
                </div>
                <div className="item">
                    <ImportContactsOutlined className="icon" />
                    <span className="text">Pages</span>
                </div>
                <div className="item">
                    <BookmarkBorderOutlined className="icon" />
                    <span className="text">Events</span>
                </div>
                <div className="item" onClick={(e) => handleLogout(e)}>
                    <ExitToApp className="icon" />
                    <span className="text" >Logout</span>
                </div>
            </div>
        </div>
    );
}

export default Leftbar;