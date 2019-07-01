import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        return (
            <div className="App">
                <h2 >Login Page</h2>
                <form> 
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                    <br /> <br />
                    <label>Password</label>
                    <input type="password" placeholder="Type your password" />
                    <br /> <br />
                    <input type="submit" value="Log In" />
                </form>
            </div>

        )
    }
}

export default App;