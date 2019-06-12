import React from 'react';

const CommentDetail = (props) => {
    // console.log(props)
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img alt="Avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a className="author" href="/">{props.author}</a>
                <div className="metadata">
                    <div className="date">{props.time}</div>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;