import React from 'react';
import Leftbar from '../../components/common/leftbar/Leftbar';
import Rightbar from '../../components/common/rightbar/Rightbar';
import Topbar from '../../components/common/topbar/Topbar';
import Feed from '../../components/timelines/feed/Feed';
import "./home.scss";

Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <div className="home">
                <Topbar />
                <div className="homeContainer">
                    <Leftbar />
                    <Feed />
                    <Rightbar />
                </div>
            </div>
        </>
    );
}

export default Home;
