import React from 'react';
import Leftbar from '../../components/common/leftbar/Leftbar';
import Rightbar from '../../components/common/rightbar/Rightbar';
import Topbar from '../../components/common/topbar/Topbar';
import Feed from '../../components/timelines/feed/Feed';
import "./profile.scss";

Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <div className="profile">
                <Topbar />
                <div className="profileContainer">
                    <Leftbar />
                    <div className="userHome">
                        <div className="top">
                            <div className="picture">
                                <img src="./assets/posts/2.jpg" alt="" className="coverPicture" />
                                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                            </div>
                            <div className="text">
                                <span className="name">Danh Nguyen</span>
                                <span className="desc">WINGgS</span>
                            </div>
                            <div className="selections">
                                <div className="selection active">
                                    <span className="text">Post</span>
                                </div>
                                <div className="selection">
                                    <span className="text">Introduction</span>
                                </div>
                                <div className="selection">
                                    <span className="text">Friend</span>
                                </div>
                                <div className="selection">
                                    <span className="text">Image</span>
                                </div>
                                <div className="selection">
                                    <span className="text">Video</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <Feed profile />
                            <Rightbar profile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
