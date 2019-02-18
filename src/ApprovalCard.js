/*
Why do we want to create a seperate Component that will just house two buttons, Approve and Reject?

For REUSABILITY: have different content or swapout information and still apply the ApprovalCard layout
and buttons. 
*/

import React from 'react';


const ApprovalCard = (props) => {
    // console.log(props);  SEE TUT 38 at 4MIN
    return(
        <div className = "ui card">
            <div className = "content">{props.children}</div>
            <div className = "extra content">
                <div className = "ui two buttons">
                    <div className = "ui basic green button">Approve</div>
                    <div className = "ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )

};


export default ApprovalCard;


// made all use of semantics ui layout from semantic-ul.com/views/card.html