import React from "react";
import "./Law.css";
import Footer from "../component/Footer/Footer";
import { Grid, Image } from "semantic-ui-react";

export default function about() {
  return (
    <>
      <div className="bgimg">
        <div className="aboutfont">
          <b>Law of</b> <b className="fontcolor">Closure</b>
        </div>
      </div>

      <div className="about mymtLaw">
        <Grid centered>
          <Grid.Column width={6} verticalAlign="middle" textAlign="left">
            <div className="myspaceLawIMG">
              <Image rounded src={"../../LawClosure-img.png"} />
            </div>
          </Grid.Column>
          <Grid.Column width={6} >
            <div className="font16 myspaceLaw mymt80">
              <p>
                <b className="font24 fontcolor">Law of Closure</b>
              </p>
              <p>
                หลักการปิดระบุว่าเมื่อเราดูการจัดเรียงที่ซับซ้อนขององค์ประกอบภาพ
                เรามักจะมองหารูปแบบ เดียวที่จดจำได้
                สถานะนี้ที่ทำงานในหน่วยความจำของและแปลงวัตถุที่ซับซ้อนให้เป็นวัตถุ
                ที่ง่าย เราพบส่วนที่หายไปจากหน่วยความจำ
                ทำไมจุดที่เคลื่อนไหวเหล่านี้จึงดูเหมือนสุนัข
              </p>

              <p className="mymt50">
                <b className="font24 fontcolor">ใช้ใน Graphic Design</b>
              </p>
              <p>
                ในการออกแบบ
                กฎนี้ถูกนำมาใช้อย่างมากในการสร้างโลโก้ที่มีระยะห่างเชิงลบ
                ตัวอย่างบางส่วน อยู่ด้านซ้าย
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
