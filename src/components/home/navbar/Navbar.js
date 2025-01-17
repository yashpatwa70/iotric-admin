import React from "react";
import "./navbar.module.scss";

import companyLogo from "../../../assets/images/logo.png";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";

const Navbar = () => {
  const token = localStorage.getItem("user-token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "inherit",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Link to="/dashboard">
          <img height="60px" width="150px" src={companyLogo} alt="company" />
        </Link>

        <nav>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button color="primary" sx={{ my: 1, mx: 1 }}>
              Home
            </Button>
          </Link>
          <Button color="primary" sx={{ my: 1, mx: 1 }}>
            Features
          </Button>
          <Button href="#customers" color="primary" sx={{ my: 1, mx: 1 }}>
            Customers
          </Button>
          <Link style={{ textDecoration: "none" }} to="/contact-us">
            <Button color="primary" sx={{ my: 1, mx: 1 }}>
              Contact Us
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/register">
            <Button color="primary" sx={{ my: 1, mx: 1 }}>
              Register
            </Button>
          </Link>

          {token ? (
            <Button
              onClick={handleLogout}
              variant="outlined"
              sx={{ my: 1, mx: 1 }}
            >
              Logout
            </Button>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
            </Link>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
