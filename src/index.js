import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">   
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam" 
                    timeAgo = "Yesterday at 6:30AM" 
                    content = "Who's ready for game" 
                    avatar = {faker.image.avatar()} 
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author = "Alex" 
                    timeAgo = "Today at 4:45PM" 
                    content = "I can't believe we won!!" 
                    avatar = {faker.image.avatar()} //gets generated from CommentDetail, by image src
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author = "Jane" 
                    timeAgo = "Today at 4:48PM" 
                    content = "Defense wins championships!"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author = "Drama" 
                    timeAgo = "Today at 5:59PM" 
                    content = "You guys got lucky! Ref missed the call!" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>    
        </div>        
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

//The Styling being used is from Semantic UI; specifically for the comments section we are creating.

//For images, content, etc... we used a library from github called "faker js"; fake data;
        // npm install --save faker
            // we have to remember to add the import statement of "import faker from 'faker';"