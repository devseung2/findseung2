import React from "react";
import "../css/footer.scss";
import Grid from "@material-ui/core/Grid";

function Footer(): JSX.Element {
  return (
    <div id="footer" className="padding-top-btm-2e">
      <Grid item xs={12} sm={12} md={12}>
        <div>
          <span className="font-color-gray font-07">
            HYUNSEUNG SEOK{" "}
            <span className="font-color-pink font-bold">@2020</span>
          </span>
        </div>
      </Grid>
    </div>
  );
}

export default Footer;
