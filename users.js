// users.js
let users = [
    { id: 1, name: 'John Doe', npm: '123456', phoneNumber: '123456789', email: 'john@example.com' },
    // Add more dummy data as needed
  ];
  
  const getAllUsers = () => {
    return users;
  };
  
  const addUser = (newUser) => {
    users.push(newUser);
    return newUser;
  };
  
  module.exports = {
    getAllUsers,
    addUser,
  };
  