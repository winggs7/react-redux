import React from 'react';
// import PropTypes from 'prop-types';
import "./friend.scss"

Friend.propTypes = {

};

function Friend(props) {
    return (
        <div className="friendContainer">
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
            <div className="friendItems">
                <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                <span className="name">Danh Nguyen</span>
            </div>
        </div>
    );
}

export default Friend;