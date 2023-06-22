import React from "react";
import "./Law.css";
import Footer from "../component/Footer/Footer";
import { Grid, Image } from "semantic-ui-react";

export default function about() {
  return (
    <>
      <div className="bgimg">
        <div className="aboutfont">
          <b>Law of</b> <b className="fontcolor">Proximity</b>
        </div>
      </div>

      <div className="about mymtLaw">
        <Grid centered>
          <Grid.Column width={6} verticalAlign="middle" textAlign="left">
            <div className="myspaceLawIMG">
            <Image rounded src={"../../LawProxi-img.png"} />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="font16 myspaceLaw">
              <p>
                <b className="font24 fontcolor">Law of Proximity</b>
              </p>
              <p>
                หลักการของความใกล้ชิดระบุว่าสิ่งที่อยู่ใกล้กันดูเหมือนจะสัมพันธ์กันมากกว่าสิ่งที่อยู่ห่างกัน
                ตัวอย่างเช่น ดังภาพด้านซ้าย ทั้งสองมีองค์ประกอบเหมือนกัน
                แต่องค์ประกอบแรกอยู่ใกล้กัน และอีกองค์ประกอบหนึ่งแยกออกจากกัน
              </p>

              <p className="mymt50">
                <b className="font24 fontcolor">ใช้ในการออกแบบ UX</b>
              </p>
              <p>
                ในการออกแบบ UX เราใช้กฎหมายนี้บ่อยครั้ง
                และคุณจะเห็นกฎหมายนี้ใช้เกือบทุกที่ ในตัวอย่าง ด้านซ้าย
                ป้ายกำกับจะถูกวางไว้ใกล้กับข้อความของฟิลด์เสมอ
                เพื่อให้ผู้ใช้สามารถมองว่าเป็นองค์ ประกอบเดียว
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
