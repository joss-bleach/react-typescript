import { useState } from "react";

const users = [
  {
    name: "Joss",
    age: 24,
  },
  {
    name: "Sarah",
    age: 24,
  },
  {
    name: "Dave",
    age: 40,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <>
      <h3>Search for a user</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      <div>
        {user && user.name}
        <br />
        {user && user.age}
      </div>
    </>
  );
};

export default UserSearch;
