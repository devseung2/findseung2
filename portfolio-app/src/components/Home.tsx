import React from "react";
import "../css/Home.scss";
import Grid from "@material-ui/core/Grid";

function Home(): JSX.Element {
  return (
    <div id="home">
      <Grid item xs={12} sm={12} md={12}>
        <div className="title">
          <div className="font-bold">
            Hello, I’m <span className="font-color-pink">Hyunseung Seok</span>.
          </div>
          <div className="font-bold">JavaScript Developer.</div>
        </div>
      </Grid>
    </div>
  );
}

export default Home;
