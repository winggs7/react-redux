import React from 'react';
// import PropTypes from 'prop-types';
import "./inputtext.scss";
import { CropOriginal, VideoCallOutlined, EmojiEmotionsOutlined, PlaceOutlined, PersonAddOutlined } from "@material-ui/icons";

Inputtext.propTypes = {

};

function Inputtext(props) {
    return (
        <div className="inputtext" >
            <div className="avatarBox">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
            </div>
            <div className="inputBox">
                {/* <input type="text" className="containerText" placeholder="write something . . ." /> */}
                <textarea name="" id="" cols="30" rows="10" className="containerText" placeholder=" write something . . ."></textarea>
                <div className="containerItem">
                    <div className="icons">
                        <CropOriginal className="icon" />
                        <VideoCallOutlined className="icon" />
                        <EmojiEmotionsOutlined className="icon" />
                        <PlaceOutlined className="icon" />
                        <PersonAddOutlined className="icon" />
                    </div>
                    <button className="sendBtn">Post</button>
                </div>
            </div>
        </div>
    );
}

export default Inputtext;