import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [register, setRegister] = useState(false);
    const onLogin = (e) => {
        e.preventDefault();
        axios
            .post("https://antisocial.onrender.com/login", { username, secret })
            .then((r) => props.onAuth({ ...r.data, secret }))
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    const onSignup = (e) => {
        e.preventDefault();
        axios
            .post("https://antisocial.onrender.com/signup", {
                username,
                secret,
                email,
                first_name,
                last_name,
            })
            .then((r) => props.onAuth({ ...r.data, secret }))
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    return (
        <div className="login-page">

            <h2>AntiSocial</h2>

            <div className="login-box">

                <form onSubmit={onLogin}>
                    <div className="user-box">
                        <input type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password"
                            name="secret"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)} />
                        <label>Password</label>
                    </div><center className="btns" >
                        <button type="submit">LOG IN</button></center>
                </form>
            </div>
            <div className="btn">

                <button onClick={() => setRegister(!register)}>Register??</button>
            </div>

            {register ?
                <form onSubmit={onSignup}>
                    <div className="login-box">or Sign Up
                        <div className="user-box">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>Username</label></div>
                        <div className="user-box">

                            <input
                                type="password"
                                value={secret}
                                onChange={(e) => setSecret(e.target.value)}
                            /> <label>Password</label>
                        </div>
                        <div className="user-box">

                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /> <label>Email</label>
                        </div>
                        <div className="user-box">

                            <input
                                type="text"
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                            /> <label>First Name</label>
                        </div>
                        <div className="user-box">

                            <input
                                type="text"
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                            /> <label>Last Name</label>
                        </div>
                        <center className="btns" >

                            <button type="submit">Sign Up</button>
                        </center>
                    </div>
                </form>
                : null}
        </div>

    );
};

export default AuthPage;