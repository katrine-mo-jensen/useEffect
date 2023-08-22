import { useState } from "react";

export function Validation() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);

  useEffect(() => {
    if (nameValue.length > 4) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [nameValue, emailValue]);

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
          value={nameValue}
          name="name"
          placeholder="Enter name, plz"
        />
        <span style={isNameValid === true ? {color: "green"} : {color: "red"}}>
            {isNameValid}
        </span>
      </div>
      <div>
        <label>Email:</label>
        <input
          onChange={(event) => {
            setEmailValue(event.target.value);
          }}
          value={emailValue}
          name="email"
          placeholder="Enter email here"
        />
      </div>
    </form>
  );
}
