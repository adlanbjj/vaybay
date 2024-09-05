import React, { useEffect, useState } from "react";

interface UserList {
  id: number;
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [users, setUsers] = useState<UserList[]>([]);
  const [currentUser, setCurrentUser] = useState<UserList>({
    id: Date.now(),
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentUser({
      ...currentUser,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUsers = [...users, currentUser];
    setUsers(updatedUsers);
    localStorage.setItem("newUser", JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    const savedUsers = localStorage.getItem("newUser");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      console.log("Error fetching users");
    }
  }, []);

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          value={currentUser.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your email"
          id="email"
          value={currentUser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          value={currentUser.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      <div className="usersList">
        {users.map((user, id) => (
          <div key={id}>
            <h2>{user.username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
