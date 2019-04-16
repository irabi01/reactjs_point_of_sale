import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class User extends Component {
  render() {
    return (
      <div className="user_container">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="add_button_part">
                        <button data-toggle="modal" data-target=".add_user_model">+ user</button>
                    </div> 
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="user_table">
                        <div className="table-responsive">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>12/9/1993</td>
                                    <td>+255 756 88888</td>
                                    <td>
                                        <Link className="view btn btn-primary"><FontAwesomeIcon className="icon mx-2" icon="eye" /></Link>
                                        <Link className="edit btn btn-info"><FontAwesomeIcon className="icon mx-2" icon="edit" /></Link>
                                        <Link className="delete btn btn-danger"><FontAwesomeIcon className="icon mx-2" icon="trash" /></Link>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>12/9/1993</td>
                                    <td>+255 756 88888</td>
                                    <td>
                                        <Link className="view btn btn-primary"><FontAwesomeIcon className="icon mx-2" icon="eye" /></Link>
                                        <Link className="edit btn btn-info"><FontAwesomeIcon className="icon mx-2" icon="edit" /></Link>
                                        <Link className="delete btn btn-danger"><FontAwesomeIcon className="icon mx-2" icon="trash" /></Link>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>12/9/1993</td>
                                    <td>+255 756 88888</td>
                                    <td>
                                        <Link className="view btn btn-primary"><FontAwesomeIcon className="icon mx-2" icon="eye" /></Link>
                                        <Link className="edit btn btn-info"><FontAwesomeIcon className="icon mx-2" icon="edit" /></Link>
                                        <Link className="delete btn btn-danger"><FontAwesomeIcon className="icon mx-2" icon="trash" /></Link>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
            {/* Large modal */}
            <div className="modal fade add_user_model" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" 
                    style={{
                        "paddingTop":50, 
                        "paddingLeft":20,
                        "paddingRight":20
                        }}>
                        <h2 style={{"fornSize": 10,"textTransform": "capitalize"}}>add new user</h2>
                        <hr/>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="fname" placeholder="first name" className="data_input"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="lname" placeholder="last name" className="data_input"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" name="dob" placeholder="DOB" className="data_input"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="phone" placeholder="phone number" className="data_input"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="e-mail address" className="data_input"/>
                                    </div>
                                    <div className="form-group">
                                        <select className="data_input">
                                            <option>Select role</option>
                                            <option>Admin</option>
                                            <option>User</option>
                                            <option>Accountnt</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <h2>Login credentials</h2>
                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="username"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="cpassword" placeholder="confirm password"/>
                                    </div>
                                    <div className="form-group">
                                        <button>register user</button>
                                    </div>
                                </div>
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

export default User
