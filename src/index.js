import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App= () => {
  return (

    <div className= "ui container comments" >
      < ApprovalCard>
        ARE YOU SURE YOU WANT TO DO THIS?
      </ApprovalCard>

      < ApprovalCard>
        <CommentDetail author="Sam" timeAgo = "Today at 4:45PM" commentText = "I love this!" avatarImage = {faker.image.avatar()}/>
      </ApprovalCard>

      < ApprovalCard>
        <CommentDetail author="Sam" timeAgo = "Today at 4:45PM" commentText = "I love this!" avatarImage = {faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Alex"timeAgo = "Today at 2:00AM" commentText = "Great post sir!" avatarImage = {faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo = "Yesterday at 1:45PM" commentText = "I like the writing" avatarImage = {faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(< App />, document.querySelector('#root'))
