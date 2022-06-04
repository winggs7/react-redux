import React from 'react';
import PropTypes from 'prop-types';
import "./rightbar.scss";
import Friend from '../../timelines/friend/Friend';

Rightbar.propTypes = {
    profile: PropTypes.bool,
};

function Rightbar(props) {
    const { profile } = props;

    const HomeRightbar = () => {
        return (
            <div className="rightbar">
                <div className="wrapper">
                    <div className="top">
                        <div className="textContainer">
                            <span className="text">YOUR PAGE</span>
                        </div>
                        <div className="containerInfo">
                            <div className="infoUser">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Danh Nguyen</span>
                            </div>
                            <div className="info">
                                <div className="follow">
                                    <span className="text">Followers: </span>
                                    <span className="number">10</span>
                                </div>
                                <div className="follow">
                                    <span className="text">Followings: </span>
                                    <span className="number">20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="textContainer">
                            <span className="text">ONLINE FRIENDS</span>
                        </div>
                        <div className="friendContainer">
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                            <div className="friend">
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                                <span className="name">Someone</span>
                                <div className="badge"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ProfileRightbar = () => {
        return (
            <div className="profileRightbar">
                <div className="profileWrapper">
                    <div className="introBox">
                        <div className="textContainer">
                            <span className="text">Information</span>
                        </div>
                        <div className="info">
                            <div className="items">
                                <span className="firstText">City: </span>
                                <span className="secondText">Thanh Hoa</span>
                            </div>
                            <div className="items">
                                <span className="firstText">Country: </span>
                                <span className="secondText">Viet Nam</span>
                            </div>
                            <div className="items">
                                <span className="firstText">Relationship: </span>
                                <span className="secondText">None</span>
                            </div>
                        </div>
                    </div>
                    <div className="friendBox">
                        <div className="textContainer">
                            <span className="text">Friend</span>
                        </div>
                        <Friend />
                    </div>
                </div>
            </div>
        )
    };

    return (
        <>
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </>
    );
}

export default Rightbar;