import { useState } from "react";
import userService from "../services/users";
import { Form, Button } from "react-bootstrap";

const SignUp = ({ notificationMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const disableSubmit = !username || !password;

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(
      `Signup submitted, username: ${username}, password: ${password}`
    );

    try {
      const user = await userService.create({ username, password });
      console.log("Signup successful, with user", user);
      notificationMessage(`New account ${user.username} created`, "success");
      // TODO: reroute to login page
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
