import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (<header>
              <div className="logo">Aspiration</div>
                <nav>
                  <a href="#">Create Ads</a>
                  <a href="#">About us</a>
                  <a href="#">Login</a>
                  <a href="#" className="register-btn">Register</a>
                </nav>
            </header>)
  }
}
