import React from 'react';

const User = () => {
  const user = {
    image: 'https://via.placeholder.com/150',
    name: 'Lion',
    surname: 'Tara',
  };

  return (
    <div className="p-4 rounded flex items-center">
      <img
        src={user.image}
        alt={`${user.name} ${user.surname}`}
        className="mr-8"
        style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '2rem' }}
      />
      <div>
        <h3 className="text-xl font-bold">{user.name} {user.surname}</h3>
      </div>
    </div>
  );
};

export default User;
