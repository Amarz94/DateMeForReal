import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import Logo from "../../styles/images/logo.png"
import Logotwo from "../../styles/images/logo2.png"
import { AmplifySignOut } from "@aws-amplify/ui-react";


import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{height:"50px"}} className="header">
      
      <Link to="/">
        <IconButton id="fixThis">
        <img style={{maxWidth:"auto", maxHeight:"50px", padding:"7px"}} src={Logotwo} alt="logo"></img>
        </IconButton>
      </Link>
    
      <div id="navBtn">
      <a href="/filter/male">
        <IconButton className="pageBtn">
        <p>Male</p>
        </IconButton>
      </a>

      <a href="/filter/female">
        <IconButton className="pageBtn">
        <p>Female</p>
        </IconButton>
      </a>
      <Link to="/profile">
        <IconButton className="pageBtn">
          <p>Profile</p>
        </IconButton>
      </Link>
      <IconButton >
      <AmplifySignOut id="awsSign"/>
      </IconButton>
      </div>
    </div>
  );
}

export default Header;
