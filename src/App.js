import React from "react";

class App extends React.Component {
    render() {
        return (
            <form>
                <label>Username</label>
                <input type="text" placeholder="Enter your username" />
                <br /> <br />
                <label>Password</label>
                <input type="password" placeholder="Type your password" />
                <br />
                <input type="submit" value="Log In" />
            </form> 

        )
    }
}

export default App;