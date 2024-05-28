import { useState, useEffect } from "react";
const UserPage = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUserData(data);
    };

    getUsers();
  }, [userData]);
  return (
    <>
      {userData.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <h4>{user.username}</h4>
          <h4>{user.email}</h4>
          <h4>{user.address.street}</h4>
        </div>
      ))}
    </>
  );
};

export default UserPage;
