// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// App Component 
const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <div>
                    <h4>Warning !</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Rajarshi" 
                    time="1 days ago" 
                    text="Hey guys, I am studying React nowdays." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sushovan" 
                    time="2 days ago" 
                    text="Ahh... may be he is studying some new JS Library." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Ganesh" 
                    time="3 days ago" 
                    text="Hey Rajarshi, what are you upto nowdays ?" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail 
                author="Ganesh" 
                time="3 days ago" 
                text="Hey Rajarshi, what are you upto nowdays ?" 
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
