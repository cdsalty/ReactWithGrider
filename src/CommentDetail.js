import React from 'react';
// import faker from 'faker'; //Removed because we stopped using it once we changed our source attribute


// Props now has two key value pairs: props.author and props.timeAgo
// Props now has three key value pairs: props.author, props.timeAgo and props.content
const CommentDetail = (props) => {
    return (
        <div className="comment">   
                <a href="/" className="avatar"> 
                <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                </div>
                <div>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text" content >{props.content}</div>
                </div>
            </div>
    )

}

export default CommentDetail;   //making it available.