import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./album.css";

import Contents from "./Contents";

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
        {/* <Message className="about-me">
          <Message.Header>เกี่ยวกับ Designprinted</Message.Header>
          <p>
            เป็นเว็บแอปพลิเคชันเกี่ยวกับการแนะนำการออกแบบเว็บไซต์
            โดยทางผู้จัดทำได้ทำรวบรวมแบบสอบถามที่ผู้ใช้ได้ทำมา
            ทำการออกแบบเป็นการออกแบบเว็บไซต์ประเภทต่าง ๆ โดยมีด้วยกัน 4
            ประเภทคือ Social Media, Streaming, Gaming, และ Education
          </p>
          <p>
            ซึ่งผู้ใช้จะมีส่วนร่วมโดยการทำแบบสอบถามเพื่อเก็บรวมรวมการออกแบบของประเภทต่าง
            ๆ ที่ผู้ใช้ชอบหรือมีปัญหาเนื่องจากมีประสบการณ์ใช้งานที่ไม่ดี
            โดยจะรวบรวมในส่วนของคอนเทนต์หลักของประเภทนั้น ๆ
            เพื่อนำไปปรับและออกแบบใหม่ให้มีประสิทธิภาพมากยิ่งขึ้น
          </p>
        </Message> */}

        <div className="mymb">
          <Contents />
        </div>
      </main>
    </ThemeProvider>
  );
}
