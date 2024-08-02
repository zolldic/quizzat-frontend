import { useState } from "react";

export function Password() {
  const { passwd, setPasswd } = useState("");

  return (
    <div id="password">
      <label id="password__label" htmlFor="password">
        Password:
      </label>
      <input
        id="password__input"
        type="password"
        className="password"
        name="password"
        placeholder="password"
        value={passwd}
        onChange={(event) => setPasswd(event.target.value)}
      />
    </div>
  );
}

export function Email() {
  const { email, setEamil } = useState("");
  return (
    <div id="email">
      <label id="email__label" htmlFor="email">
        Email
      </label>
      <input
        id="email__input"
        type="text"
        className="email"
        name="email"
        placeholder="Enter you email"
        value={email}
        onChange={(event) => setEamil(event.target.value)}
      />
    </div>
  );
}

export function Button(prop) {
  return (
    <button className="btn" role="submi">
      {prop.text}
    </button>
  );
}
