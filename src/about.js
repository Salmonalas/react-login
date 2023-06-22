import React from "react";
import './about.css';
import Footer from "./component/Footer/Footer";
import { Grid, Image } from "semantic-ui-react";

export default function about(){
    return(
    <>
        <div className="bgimg">
        <div className="aboutfont"><b>เกี่ยวกับ</b> <b className="fontcolor">DESIGNPRINTED</b></div>
        </div>

        <div className="about mymt50">
          <Grid centered>
            <Grid.Column width={8} verticalAlign="middle" textAlign="left">
              <div className="h3 ">
                <p><b className="fontcolor">เกี่ยวกับ Designprinted</b></p>
                <p><b>เว็บไซต์เกี่ยวกับการช่วยในการออกแบบเว็บไซต์</b></p>
              </div>
              <div className="font16 mymt">
                <p>
                  เป็นเว็บแอปพลิเคชันเกี่ยวกับการแนะนำการออกแบบเว็บไซต์โดยทางผู้จัดทำได้ทำรวบรวมแบบสอบถาม
                  ที่ผู้ใช้ได้ทำมาทำการออกแบบเป็นการออกแบบเว็บไซต์ประเภทต่าง ๆ โดยมีด้วยกัน 4 ประเภทคือ Social Media, 
                  Streaming, Gaming, และ Education
                </p>
                <p>
                  ซึ่งผู้ใช้จะมีส่วนร่วมโดยการทำแบบสอบถามเพื่อเก็บรวมรวมการออกแบบของประเภทต่าง ๆ ที่ผู้ใช้ชอบหรือมีปัญหา
                  เนื่องจากมีประสบการณ์ใช้งานที่ไม่ดี โดยจะรวบรวมในส่วนของคอนเทนต์หลักของประเภทนั้น ๆ เพื่อนำไปปรับและ
                  ออกแบบใหม่ให้มีประสิทธิภาพมากยิ่งขึ้น
                </p>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image rounded src={"../../about.jpg"} />
            </Grid.Column>
          </Grid>
        </div>
        
        <Footer/>
    </>)
}