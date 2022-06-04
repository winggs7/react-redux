import React from 'react';
import PropTypes from 'prop-types';
import "./feed.scss";
import Inputtext from "../inputtext/Inputtext";
import Post from '../post/Post';

Feed.propTypes = {
    profile: PropTypes.bool,
};

function Feed(props) {
    const { profile } = props;

    return (
        <div className={!profile ? "feed" : "feed profileFeed"}>
            <Inputtext />
            <Post />
        </div>
    );
}

export default Feed;