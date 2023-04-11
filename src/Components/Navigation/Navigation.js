import React from "react";
import Logo from "./logo.png";


const Navigation = () => {

  const navItems = [
    { label: "About Us", link: "#about" },
    { label: "Memberships", link: "#memberships" },
    { label: "Video Gallery", link: "#videos" },
    { label: "Photo Gallery", link: "#photos" },
    { label: "Contact Us", link: "#contact" }
  ];

  const navList = navItems.map((nav,index) => 
  <li key={index}> <a href={nav.link}>{nav.label}</a> </li>);

  return (
    <div className="Navigation">
      <img src={Logo} width="70px"/>
      <ul className="List">{navList }</ul>
    </div>
    );
};

export default Navigation;

