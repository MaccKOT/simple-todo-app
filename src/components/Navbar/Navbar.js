import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          {/* <a href="/" className="brand-logo">
            &nbsp;TodoApp
          </a> */}
          <Link to='/' className='brand-logo'>
            <i className='material-icons'>format_list_numbered</i>
            &nbsp;TodoApp
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/add'>Добавить задачу</Link>
            </li>
            <li>
              <Link to='/about'>О приложении</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
