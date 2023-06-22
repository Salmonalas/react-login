import * as React from "react";
import { useState, useEffect } from "react";
// import "../../Design.css";
import { Grid, Header, Button, Image, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const Design = () => {
  const { token } = useParams();
  const realToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = `Bearer ${realToken}`;

  const [colorIcon1, setcolorIcon1] = useState({
    color: "",
    isFav: false,
  });
  const [colorIcon2, setcolorIcon2] = useState({
    color: "",
    isFav: false,
  });
  const [colorIcon3, setcolorIcon3] = useState({
    color: "",
    isFav: false,
  });
  const [colorIcon4, setcolorIcon4] = useState({
    color: "",
    isFav: false,
  });
  const [colorIcon5, setcolorIcon5] = useState({
    color: "",
    isFav: false,
  });

  const loaddata = async () => {
    try {
      await axios.get(`/contents-islike`).then((res) => {
        if (res.data.status === "success") {
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].ct_ID === 31101) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31102) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31103) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31104) {
              setcolorIcon4({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31105) {
                setcolorIcon5({
                  color: "youtube",
                  isFav: true,
                });
              }
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSide = async () => {
    let id = 31101;
    // handleClick(id)
    let isFav = colorIcon1.isFav;
    try {
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
            } else {
              setcolorIcon1({
                color: "",
                isFav: false,
              });
            }
          }
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickAds = async () => {
    let id = 31102;
    let isFav = colorIcon2.isFav;
    try {
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
            } else {
              setcolorIcon2({
                color: "",
                isFav: false,
              });
            }
          }
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickNews = async () => {
    let id = 31103;
    let isFav = colorIcon3.isFav;
    try {
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
            } else {
              setcolorIcon3({
                color: "",
                isFav: false,
              });
            }
          }
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickGame = async () => {
    let id = 31104;
    let isFav = colorIcon4.isFav;
    try {
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon4({
                color: "youtube",
                isFav: true,
              });
            } else {
              setcolorIcon4({
                color: "",
                isFav: false,
              });
            }
          }
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickLatest = async () => {
    let id = 31105;
    let isFav = colorIcon5.isFav;
    try {
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon5({
                color: "youtube",
                isFav: true,
              });
            } else {
              setcolorIcon5({
                color: "",
                isFav: false,
              });
            }
          }
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <Grid centered padded="horizontally">
        <Grid.Column width={4}>
          <Popup
            trigger={
              <Image
                src={"http://127.0.0.1:3333/images/Gaming_Sidebar.png"}
              />
            }
            wide='very'
            hoverable
            position="right center"
          >
            <Grid centered divided>
              <Grid.Column textAlign="center">
                <Header as="h4">Sidebar </Header>
                <p>
                  <b>Sidebar: </b> เพื่อการนำทางที่ครอบคลุมและเข้าถึงได้ง่าย ช่วยให้ผู้ใช้สามารถสำรวจพื้นที่ต่าง ๆ 
                  ของแพลตฟอร์ม แถบด้านข้างช่วยให้แน่ใจว่าฟีเจอร์หลักและฟังก์ชันต่างๆ พร้อมใช้งานในขณะที่ผู้ใช้รับชมและโต้ตอบกับสตรีมเมอร์
                </p>
                <Button
                  onClick={handleClickSide}
                  content="Like"
                  icon="heart"
                  color={colorIcon1.color}
                />
              </Grid.Column>
            </Grid>
          </Popup>
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid.Row centered>
            <Popup
              trigger={
                <Image
                  src={"http://127.0.0.1:3333/images/Gaming_Ads.png"}
                />
              }
              wide='very'
              hoverable
              position="bottom center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Ads </Header>
                  <p>
                    <b>Ads: </b> การวางโฆษณาที่ด้านบนสุดของหน้าช่วยให้ผู้ลงโฆษณามองเห็นได้ชัดเจน 
                    เมื่อผู้ใช้เข้าชมเว็บไซต์ มีแนวโน้มที่จะมุ่งความสนใจไปที่ส่วนบนสุดและมีอัตราการคลิกผ่านที่สูงกว่าเมื่อเทียบกับ
                    โฆษณาที่วางในตำแหน่งอื่นๆ การวางโฆษณาในตำแหน่งที่สำคัญนี้ทำให้ผู้โฆษณาสามารถเพิ่มการมองเห็น
                    และเพิ่มโอกาสในการดึงดูดความสนใจของผู้ใช้
                  </p>
                  <Button
                    onClick={handleClickAds}
                    content="Like"
                    icon="heart"
                    color={colorIcon2.color}
                  />
                </Grid.Column>
              </Grid>
            </Popup>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Popup
                trigger={
                  <Image
                    src={"http://127.0.0.1:3333/images/Gaming_GameNews.png"}
                  />
                }
                wide
                hoverable
                position="bottom center"
              >
                <Grid centered divided>
                  <Grid.Column textAlign="center">
                    <Header as="h4">News </Header>
                    <p>
                      <b>News: </b> การวางข่าวสารไว้ใต้ส่วน "คำแนะนำ" และ "เกม" 
                      ช่วยให้ผู้ใช้ที่ค้นหาข้อมูลเกี่ยวกับเกมโดยเฉพาะสามารถเข้าถึงสิ่งที่พวกเขากำลังมองหาได้อย่างรวดเร็ว
                      ก่อนที่จะดำดิ่งสู่การอัปเดตข่าวล่าสุด 
                    </p>
                    <Button
                      onClick={handleClickNews}
                      content="Like"
                      icon="heart"
                      color={colorIcon3.color}
                    />
                  </Grid.Column>
                </Grid>
              </Popup>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image src={"http://127.0.0.1:3333/images/Social-blank.png"} />
            <Popup
              trigger={
                <Image
                  src={"http://127.0.0.1:3333/images/Gaming_Game.png"}
                />
              }
              wide='very'
              hoverable
              position="top center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Game </Header>
                  <p>
                    <b>Game: </b> ผู้ชมส่วนใหญ่อาจเยี่ยมชมเว็บไซต์เพื่อดูคำแนะนำและข้อมูลที่เกี่ยวข้องกับเกมเฉพาะ การวางส่วน "คำแนะนำ" 
                    และ "เกม" ไว้ด้านบนอย่างเด่นชัด ผู้ใช้ที่สนใจค้นหาเคล็ดลับ บทสรุป หรือกลยุทธ์ต่างๆ สามารถเข้าถึงเนื้อหาที่เกี่ยวข้องได้อย่างง่ายดาย
                    โดยไม่ต้องค้นหาอย่างละเอียด
                  </p>
                  <Button
                    onClick={handleClickGame}
                    content="Like"
                    icon="heart"
                    color={colorIcon4.color}
                  />
                </Grid.Column>
              </Grid>
            </Popup>
          </Grid.Row>
          <Grid.Row>
            <Image src={"http://127.0.0.1:3333/images/Social-blank.png"} />
            <Popup
              trigger={
                <Image
                  src={"http://127.0.0.1:3333/images/Gaming_Latest.png"}
                />
              }
              wide
              hoverable
              position="top center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Latest News </Header>
                  <p>
                    <b>Latest News: </b> การวางข่าวสารไว้ใต้ส่วน "คำแนะนำ" และ "เกม" 
                    ช่วยให้ผู้ใช้ที่ค้นหาข้อมูลเกี่ยวกับเกมโดยเฉพาะสามารถเข้าถึงสิ่งที่พวกเขากำลังมองหาได้อย่างรวดเร็ว
                    ก่อนที่จะดำดิ่งสู่การอัปเดตข่าวล่าสุด  
                  </p>
                  <Button
                    onClick={handleClickLatest}
                    content="Like"
                    icon="heart"
                    color={colorIcon5.color}
                  />
                </Grid.Column>
              </Grid>
            </Popup>
            <Image src={"http://127.0.0.1:3333/images/Social-blank.png"} />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Design;
