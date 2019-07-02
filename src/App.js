import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({
            error: ""
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.username) {
            return this.setState({
                error: "Username is required"
            });
        }
            if (!this.state.password) {
                return this.setState({
                    error: "Password is required"
                });
        }
        return this.setState({
            error: ""
        });
    }
    handleUserChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handlePassChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    render() {
        return (
            <div className="App">
                <h2 >Login Page</h2>
                <form onSubmit={this.handleSubmit}> 
                    <h2><button onClick={this.dismissError}>x</button>{this.state.error}</h2>  
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={this.state.username}
                        onChange={this.handleUserChange} />
                    <br /> <br />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Type your password"
                        value={this.state.password}
                        onChange={this.handlePassChange} />
                    <br /> <br />
                    <input
                        type="submit"
                        value="Log In" />
                </form>
            </div>

        )
    }
}

export default App; 

