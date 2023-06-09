import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import { Container, Header, Message } from "semantic-ui-react";
import Link from "@mui/material/Link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./component/Navbar/Navbar";
import { Sticky } from "semantic-ui-react";
import "./album.css";

import Contents from "./Contents";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        KuruKuru
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
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Sticky>
        <Navbar/>
      </Sticky> */}
      <Banner />
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 0,
          }}
        >
          {/* <Container maxWidth="sm"> */}

          {/* <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          {/* </Container> */}
        </Box>
        <Message className="about-me">
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
        </Message>

        <div className="mymb">
          <Contents />
        </div>

        {/* <div className="banner">
          <Container text className="mymb">
            <Header as="h2">เกี่ยวกับ Designprinted</Header>
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
          </Container>
        </div> */}

        {/* <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </main>

      {/* <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
    </ThemeProvider>
  );
}
