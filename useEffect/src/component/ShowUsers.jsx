import { useEffect, useState } from "react";

export function ShowUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    function getUsers() {
      fetch(url)
        .then((res = res.json()))
        .then((data) => setUsers(data));
    }
    getUsers();
  }, []);

  console.log(users);

//   fetch().then((data) => setUsers(data));

  return (
    <section>
      <h3>Users:</h3>
      {users &&
        users.map((item, index) => {
          return (
            <div key={item.name}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          );
        })}
    </section>
  );
}
