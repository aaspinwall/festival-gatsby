import React from "react";
import { Link } from "gatsby";
import logo from "../img/ing-logo.svg";
import Status from "../components/Status";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  /* box-shadow: 0px 4px 16px -5px rgba(0, 0, 0, 0.24); */

  .navbar-start {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-bottom: 3px solid black;
    font-family: Futura;
    a {
      font-weight: bold;
    }
  }

  img {
    max-height: 3.75rem;
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  .is-active {
    .navbar-start {
      height: 100vh;
      flex-flow: column;
      justify-content: space-between;
      padding: 10vh 0 50vh;
    }
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <Nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/welcome/' className='navbar-item' title='Logo'>
              <img src={logo} alt='ING' style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-start '>
              <Link className='navbar-item' to='/welcome'>
                Online talks and workshops
              </Link>
              <a
                className='navbar-item'
                href='https://ingcreatives.com/ing-festival'
                target='blank'
              >
                -Ing festival
              </a>
              <a
                className='navbar-item'
                href='https://ingcreatives.com/past-speakers'
                target='blank'
              >
                Past speakers
              </a>
              <Status />
              {/* <Link to='/app/login' className='navbar-item'>
                Login
              </Link> */}
            </div>
          </div>
        </div>
      </Nav>
    );
  }
};

export default Navbar;
