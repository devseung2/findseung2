import React from "react";
import "../App.scss";
import "../css/Contact.scss";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(): JSX.Element {
  return (
    <div id="contact" className="background-color-gray padding-top-btm-4e">
      <div>
        <p className="menu-name font-color-pink">CONTACT</p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
          <p className="font-bold font-1H font-color-bl">Email</p>
          <p className="font-bold font-color-lightgray">dev_seung2@naver.com</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
