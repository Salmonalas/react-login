import React from "react";
import "./Law.css";
import Footer from "../component/Footer/Footer";
import { Grid, Image } from "semantic-ui-react";

export default function about() {
  return (
    <>
      <div className="bgimg">
        <div className="aboutfont">
          <b>Law of</b> <b className="fontcolor">Continuity</b>
        </div>
      </div>

      <div className="about mymtLaw">
        <Grid centered>
          <Grid.Column width={6} verticalAlign="middle" textAlign="left">
            <div className="myspaceLawIMG">
              <Image rounded src={"../../LawCon-img.png"} />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="font16 myspaceLaw mymt60">
              <p>
                <b className="font24 fontcolor">Law of Continuity</b>
              </p>
              <p>
                หลักการของความต่อเนื่องระบุว่าองค์ประกอบที่จัดเรียงบนเส้นหรือเส้นโค้งจะถูกมองว่าสัมพันธ์
                กันมากกว่าองค์ประกอบที่ไม่ได้อยู่บนเส้นหรือเส้นโค้ง
              </p>

              <p className="mymt50">
                <b className="font24 fontcolor">ใช้ในการออกแบบ UX</b>
              </p>
              <p>
                คุณสามารถแยกความแตกต่างและเข้าใจการนำทางหลักและรองได้ ด้านซ้าย
                คุณสามารถเชื่อม โยงบ้าน โปรไฟล์ ร้านค้า ผู้ติดต่อ
                และความช่วยเหลือเป็นกลุ่มของการนำทางได้อย่างง่ายดาย
                เพราะจัดเรียงเป็นบรรทัดเดียวแทนที่จะเป็นบ้าน โปรไฟล์ ผู้ชาย
                ผู้หญิง
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
