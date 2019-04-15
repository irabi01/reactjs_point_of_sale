import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="login_form">
                        <form>
                            <div className="form-group">
                                <input type="text" name="username" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login
