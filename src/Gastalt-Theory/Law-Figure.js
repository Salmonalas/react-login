import React from "react";
import "./Law.css";
import Footer from "../component/Footer/Footer";
import { Grid, Image } from "semantic-ui-react";

export default function about() {
  return (
    <>
      <div className="bgimg">
        <div className="aboutfont">
          <b>Law of</b> <b className="fontcolor">Figure-Ground</b>
        </div>
      </div>

      <div className="about mymtLaw">
        <Grid centered>
          <Grid.Column width={6} verticalAlign="middle" textAlign="left">
            <div className="myspaceLawIMG">
              <Image rounded src={"../../LawFigure-img.png"} />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="font16 myspaceLaw mymt80">
              <p>
                <b className="font24 fontcolor">Law of Figure-Ground</b>
              </p>
              <p>
                หลักการพื้นฐานของภาพระบุว่าผู้คนรับรู้โดยสัญชาตญาณว่าวัตถุนั้นอยู่เบื้องหน้าหรือเบื้องหลัง
                ในทั่วไป คุณสามารถโฟกัสไปที่เบื้องหน้าหรือเบื้องหลังก็ได้
              </p>

              <p className="mymt50">
                <b className="font24 fontcolor">ใช้ในการออกแบบ UX</b>
              </p>
              <p>
                หลักการนี้ใช้มากในการนำทางและกล่องโต้ตอบ
                โปรดสังเกตในตัวอย่างด้านล่างว่าพื้นหลังจะ
                กลายเป็นส่วนรองเมื่อกล่องโต้ตอบปรากฏขึ้น
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
