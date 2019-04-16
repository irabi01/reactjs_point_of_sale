import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Setting extends Component {
  render() {
    return (
      <div className="setting_container">
        <div className="container">
        <h1>Setting</h1>
        <hr/>
          <div className="row">
            <div className="col-md-3">
              <Link className="link" to="/add-user">
                <div className="content">
                  register user
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  Database Backup
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  Database Restore
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  Create POS
                </div>
              </Link>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  System logs
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  Assign users to POS
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  Assign staff role
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link className="link">
                <div className="content">
                  Tender types
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Setting
