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

  const loaddata = async () => {
    try {
      await axios.get(`/contents-islike`).then((res) => {
        if (res.data.status === "success") {
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].ct_ID === 21101) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 21102) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 21201) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 21202) {
              setcolorIcon4({
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
    let id = 21101;
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
  const handleClickSearch = async () => {
    let id = 21102;
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
  const handleClickLive = async () => {
    let id = 21201;
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
  const handleClickRecommend = async () => {
    let id = 21202;
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
                src={"http://127.0.0.1:3333/images/Streaming_Sidebar.png"}
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
                  src={"http://127.0.0.1:3333/images/Streaming_Search.png"}
                />
              }
              wide
              hoverable
              position="bottom center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                <Header as="h4">Search Bar </Header>
                  <p>
                    <b>Search Bar: </b> การจัดวางไว้บนสุดเพื่อการเข้าถึงง่ายและความเคยชินของผู้ใช้
                  </p>
                  <Button
                    onClick={handleClickSearch}
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
                    src={"http://127.0.0.1:3333/images/Streaming_Live-Chat.png"}
                  />
                }
                wide='very'
                hoverable
                position="bottom center"
              >
                <Grid centered divided>
                  <Grid.Column textAlign="center">
                  <Header as="h4">Live</Header>
                    <p>
                      <b>Live: </b> การวางวิดีโอไว้ตรงกลางหน้าจอทำให้อยู่ในตำแหน่งที่โดดเด่นและอยู่ตรงกลาง 
                      ตำแหน่งนี้เหมาะสำหรับการรักษาโฟกัสที่ตาบนเนื้อหา เนื่องจากดวงตาจะถูกดึงไปที่กึ่งกลางของหน้าจอ 
                      ช่วยให้ผู้ชมมีส่วนร่วมกับเนื้อหาสตรีมสดโดยไม่เสียสมาธิ และดูได้ง่าย
                    </p>
                    <Button
                      onClick={handleClickLive}
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
                  src={"http://127.0.0.1:3333/images/Streaming_Description.png"}
                />
              }
              wide='very'
              hoverable
              position="top center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Description </Header>
                  <p>
                    <b>Description: </b> : การวางแผงคำอธิบายใต้สตรีมแบบสดช่วยให้ผู้ชมมองเห็นได้ง่าย 
                    ทำให้ผู้ชมมีส่วนร่วมกับสตรีมก่อนที่จะสำรวจข้อมูลเพิ่มเติม และยังช่วยดึงความสนใจไปที่เนื้อหาแบบเรียลไทม์ 
                    โดยไม่ขัดขวางการสตรีมแบบสด
                  </p>
                  <Button
                    onClick={handleClickRecommend}
                    content="Like"
                    icon="heart"
                    color={colorIcon4.color}
                  />
                </Grid.Column>
              </Grid>
            </Popup>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Design;
