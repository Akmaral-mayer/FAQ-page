import React from "react";
import { HeaderWrapper } from "./Header.components";
import logo from "../../images/logo1.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import burgerImg from "../../images/burger.png";

const useStyles = makeStyles({
  root: {
    background: "#FFFFFF",
    borderRadius: 6,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    marginLeft: 43,
    boxShadow:
      "0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08)",
  },
  label: {
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "150%",
    color: "#2F66E3",
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <HeaderWrapper>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li style={{ marginRight: 29 }}>For merchant</li>
          <li>Buy crypto</li>
        </ul>
        <ul>
          <li>Sign in</li>
          <li>
            <Button
              classes={{
                root: classes.root,
                label: classes.label,
              }}
              className="btn"
            >
              Sign up for free
            </Button>
          </li>
        </ul>
      </nav>
      <img className="burger" src={burgerImg} alt="" />
    </HeaderWrapper>
  );
};
