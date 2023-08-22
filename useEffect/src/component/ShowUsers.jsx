import { useEffect, useState } from "react";

export const ShowUsers = () => {
  // Url til at hente data.
  const url = "https://jsonplaceholder.typicode.com/users";

  // State til at gemme vores users i - starter undefined
  const [users, setUsers] = useState(undefined);

  // useEffect der henter vores user data - kører kun en gang på component mount
  useEffect(() => {
    function getUsers() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }
    getUsers();
  }, []);

  // Returner user data hvis users ikke er undefined
  return (
    <section>
      <h3>Users:</h3>

      {users &&
        users.map((item, index) => {
          return (
            <div key={item.name} style={{ border: "solid 1px white", borderRadius: "16px", margin: "8px"}}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          );
        })}
    </section>
  );
};