import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import PropTypes from 'prop-types';
import "./post.scss";

Post.propTypes = {
    post: PropTypes.object
};

function Post(props) {
    // const { post } = props;

    return (
        <div className="post">
            <div className="wrapper">
                <div className="top">
                    <img src="./assets/persons/1.jpg" alt="" className="avatar" />
                    <div className="text">
                        <div className="name">D</div>
                        <div className="time">3 days ago</div>
                    </div>
                </div>
                <div className="bottom">
                    <img src="./assets/posts/1.jpg" alt="" className="picture" />
                    <div className="iconsBox">
                        <div className="icons">
                            <FavoriteBorderOutlined className="icon favorite" />
                            <span className="number">10</span>
                        </div>
                        <div className="icons">
                            <ChatBubbleOutlineOutlined className="icon" />
                            <span className="number">5</span>
                        </div>
                        <div className="icons">
                            <ShareOutlined className="icon" />
                            <span className="number">2</span>
                        </div>
                    </div>
                    <span className="text">
                        CÙNG GIÚP ĐỠ NHỮNG CÔ GÁI XINH MÀ VẪN Ế NÀY THÔI NÀO !!! <br />
                        Latvia nằm ở phía bắc châu Âu, giáp biển Baltic về phía tây như Nga và Ukraine, họ cũng vượt trội về chất lượng nhan sắc, nhìn chung đều là những người đẹp chân dài. Các cô gái Latvia cũng rất cởi mở và nhiệt tình.<br />
                        Chỉ cần bước chân ra đường ở đất nước Latvia, bạn có thể dễ dàng bắt gặp những cô gái chân dài đẹp như hoa hậu, thân hình nóng bỏng. Mỗi năm, có hàng nghìn người tới Latvia du lịch, trong đó có rất nhiều chàng trai ngoại quốc đến đất nước nhỏ xinh này để tìm kiếm một nửa của đời mình.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;