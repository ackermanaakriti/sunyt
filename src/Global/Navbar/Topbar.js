import React from "react";
import "./Navbar.css";
import { Container, Grid } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Topbar = () => {
  return (
    <>
      <div className="topbar--">
        <div className="topbar--container">
          <div className="topbar--wrapper">
            <p>20% off on the trips to Annapurna from Mustang Route.</p>
          </div>
        </div>
        <div className="contact--topbar">
          <Container>
            <Grid container>
              <Grid xs={6}>
                <div style={{ display: "flex", gap: "3em" }}>
                  <div className="contact--div">
                    <MailOutline /> <p>rae@12gmail.com</p>
                  </div>
                  <div className="contact--div">
                    <PhoneEnabledIcon /> <p>rae@12gmail.com</p>
                  </div>
                </div>
              </Grid>
              <Grid xs={6}>
                <div className="socialmedia--container">
                  <FacebookIcon />
                  <InstagramIcon />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Topbar;
