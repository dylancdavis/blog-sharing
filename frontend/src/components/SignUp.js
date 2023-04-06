import { useState } from "react";
import userService from "../services/users";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = ({ notificationMessage }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const navigate = useNavigate();

  const disableSubmit = !username || !password;

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(
      `Signup submitted, username: ${username}, password: ${password}`
    );

    try {
      const user = await userService.create({ username, name, password });
      console.log("Signup successful, with user", user);
      notificationMessage(
        `New account ${user.username} (${user.name}) created`,
        "success"
      );
      navigate("/");
    } catch (e) {
      console.log(e.name, e.message);
      notificationMessage(e.response.data.error, "danger");
    }
  };

  return (
    <div className="login">
      <h1>sign up!</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mt-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input-username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            className="input-name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button
          disabled={disableSubmit}
          className="submit-button mt-3"
          type="submit"
        >
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
