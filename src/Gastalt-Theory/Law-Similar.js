import React from "react";
import "./Law.css";
import Footer from "../component/Footer/Footer";
import { Grid, Image } from "semantic-ui-react";

export default function about() {
  return (
    <>
      <div className="bgimg">
        <div className="aboutfont">
          <b>Law of</b> <b className="fontcolor">Similarity</b>
        </div>
      </div>

      <div className="about mymtLaw">
        <Grid centered>
          <Grid.Column width={6} verticalAlign="middle" textAlign="left">
            <div className="">
              <Image rounded src={"../../LawSimilar-img.png"} />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="font16 myspaceLaw">
              <p>
                <b className="font24 fontcolor">Law of Similarity</b>
              </p>
              <p>
                หลักการของความคล้ายคลึงกันระบุว่าเมื่อสิ่งต่าง ๆ ดูคล้ายกัน
                เราจะจัดกลุ่มสิ่งเหล่านั้นเข้า
                ด้วยกันและ-มักจะคิดว่าสิ่งเหล่านั้นมีหน้าที่เหมือนกัน
                ตัวอย่างเช่น ในภาพนี้ เรามีองค์ประกอบ อยู่กลุ่มหนึ่ง
                แต่บางองค์ประกอบมีสีต่างกัน
                ดังนั้นผู้ใช้จึงมองว่าเป็นองค์ประกอบที่แตกต่างกัน
              </p>

              <p className="mymt50">
                <b className="font24 fontcolor">ใช้ในการออกแบบ UX</b>
              </p>
              <p>
                ในแบบฟอร์มการเข้าสู่ระบบด้านซ้าย ช่องและปุ่มมีขนาดเท่ากัน
                แต่เนื่องจากสีของปุ่มต่างกัน เรา
                จึงทราบว่าการทำงานของปุ่มนั้นแตกต่างกัน
                นอกจากนี้ในข้อความคำอธิบายด้านล่าง เราทราบ
                ดีว่าข้อความสีน้ำเงินคือลิงก์ ใช่ว่ากฎหมายความคล้ายคลึงกัน
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
