import React from "react";
import { Image, Grid } from "semantic-ui-react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer">
      <Grid centered>
        <Image src={"../../../footer.png"} />
        {/* <Grid.Row className="mymg">
          <h4 className="font">
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </h4>
        </Grid.Row>
        <Grid.Row>
          <h4 className="font">
            King Mongkut's Institute of Technology Ladkrabang
          </h4>
        </Grid.Row> */}
      </Grid>
    </div>
  );
}
