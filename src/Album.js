import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Image, Segment, Container, Card } from "semantic-ui-react";
import "./album.css";

import Contents from "./Contents";
import Footer from "./component/Footer/Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Designprinted
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Banner() {
  return (
    <div className="banner ">
      <img src="../../Website.png" width={1000} alt="banner" />
    </div>
  );
}
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Banner />
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 0,
          }}
        ></Box>
        <div className="">
          <Contents />
        </div>

        <div className="about-me">
          <Grid centered>
            <Grid.Column width={8} verticalAlign="middle" textAlign="left">
              <div className="h3 ">
                <p>
                  <b className="">เกี่ยวกับ Designprinted</b>
                </p>
                <p>
                  <b>เว็บไซต์เกี่ยวกับการช่วยในการออกแบบเว็บไซต์</b>
                </p>
              </div>
              <div className="font16 mymt">
                <p>
                  เป็นเว็บแอปพลิเคชันเกี่ยวกับการแนะนำการออกแบบเว็บไซต์โดยทางผู้จัดทำได้ทำรวบรวมแบบสอบถาม
                  ที่ผู้ใช้ได้ทำมาทำการออกแบบเป็นการออกแบบเว็บไซต์ประเภทต่าง ๆ
                  โดยมีด้วยกัน 4 ประเภทคือ Social Media, Streaming, Gaming, และ
                  Education
                </p>
                <p>
                  ซึ่งผู้ใช้จะมีส่วนร่วมโดยการทำแบบสอบถามเพื่อเก็บรวมรวมการออกแบบของประเภทต่าง
                  ๆ ที่ผู้ใช้ชอบหรือมีปัญหา เนื่องจากมีประสบการณ์ใช้งานที่ไม่ดี
                  โดยจะรวบรวมในส่วนของคอนเทนต์หลักของประเภทนั้น ๆ
                  เพื่อนำไปปรับและ ออกแบบใหม่ให้มีประสิทธิภาพมากยิ่งขึ้น
                </p>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image rounded src={"../../about.jpg"} />
            </Grid.Column>
          </Grid>
        </div>

        <Container style={{ padding: "2em" }}>
          <h1 className="mycenter mymb20"></h1>
          <Segment>
            <div className="h1">
              <p>
                <div className="font font24 fontcolor mycenter">
                  ความรู้เกี่ยวกับ UX/UI
                </div>
              </p>
              <p>
                <b className="mycenter font48 ">Gestalt Theory</b>
              </p>
            </div>
            <div className="font16 mymt mymb center">
              <div>
                Gestalt Theory คือ หลักการที่ช่วยให้ผู้ออกแบบเข้าใจว่า
                ผู้ใช้รับรู้และทำความเข้าใจข้อมูลต่าง ๆ
                ภายในอินเทอร์เฟซผู้ใช้อย่างไร
              </div>
              <div>
                หลักการนี้สามารถใช้เพื่อสร้างการออกแบบที่ใช้งานง่ายและสอดคล้องกับการรับรู้ของผู้ใช้
              </div>
            </div>

            <Grid centered>
              <Grid.Column width={5}>
                <a href="/law-of-proximity">
                  <Image src={"../../LawProxi.png"} />
                </a>
              </Grid.Column>
              <Grid.Column width={5}>
                <a href="/law-of-similarity">
                  <Image src={"../../LawSimilar.png"} />
                </a>
              </Grid.Column>
              <Grid.Column width={5}>
                <a href="/law-of-closure">
                  <Image src={"../../LawClosure.png"} />
                </a>
              </Grid.Column>
              <Grid.Row>
                <Grid.Column width={5}>
                  <a href="/law-of-continuity">
                    <Image src={"../../LawCon.png"} />
                  </a>
                </Grid.Column>
                <Grid.Column width={5}>
                  <a href="/law-of-figure-ground">
                    <Image src={"../../LawFigure.png"} />
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
