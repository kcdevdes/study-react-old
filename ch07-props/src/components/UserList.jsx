import React from 'react';

const users = [
  {
    id: 1,
    username: 'kevin choi',
    email: 'kcdevdes@gmail.com',
  },
  {
    id: 2,
    username: 'gibeom choi',
    email: 'kvicwhite@gmail.com',
  },
  {
    id: 3,
    username: 'undefined choi',
    email: 'example@example.com',
  }
];

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList() {
  return (
    <div>
      {
        users.map(user => (
          <User user={user} key={user.id} />
        ))
      }
    </div>
  )
}

export default UserList;