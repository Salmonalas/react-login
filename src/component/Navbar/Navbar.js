import "./NavSty.css";
import React, { Component, useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import { Image } from 'semantic-ui-react'
import { Button } from "../Button";
import axios from "../../api/axios";

const Navbar = (isLoggedIn) => {
  // state = { clicked: false };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const realToken = localStorage.getItem('token')
  //const [realToken, setrealToken] = useState(localStorage.getItem('token'));
  const [image, setImage] = useState()

  const verifytoken = async (e) => {
    // setToken(e);
    try {
        if (!image) {
            await axios.get('/authen', {
        headers: {
          authorization: `Bearer ${realToken}`
        }
      }).then((res) => {
        if (res.data.status === 'failed') {
            setImage(null)
        }
        else if (res.data.status === 'success') {
          setImage(res.data.img)
        }
      })
        }
      
    } catch (error) {
      console.log(error);
      setImage(null)
    }
  }

//   console.log(image);
  const menuLoggedIN = () => {
    return (
      <ul className="nav-menu active mymt13">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li className="myml">
            <Image src={image}  avatar spaced='right' className="myml" href="/profile" />
        </li>
        <li>
          <a
            className="nav-links"
            href="/login"
            onClick={handleLogout}
          >
            ออกจากระบบ
          </a>
        </li>
        
      </ul>
    );
  };

  const menuNOTLoggedIN = () => {
    return (
      <ul className="nav-menu active mymt1">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}

        <li>
          <a className="nav-links" href="/login">
            เข้าสู่ระบบ
          </a>
        </li>
        <li>
          <a className="nav-links-mobile " href="/register">
            สมัครสมาชิก
          </a>
        </li>
      </ul>
    );
  };

  useEffect(() => {
      verifytoken();
  }, []);

  return (
    <nav className="NavbarItems">
      <a href="/">
        <div className="navbar-logo">
          <img src="../../../../Designprinted-logo1.png" alt="img"></img>
        </div>
      </a>
      <div className="menu-icon">
        <i className="fas fa-times"></i>
      </div>

      {image ? (
        menuLoggedIN()
      ) : (
        menuNOTLoggedIN()
      )}
    </nav>
  );
};

export default Navbar;
