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
            } else if (res.data.result[i].ct_ID === 31201) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31202) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31203) {
              setcolorIcon4({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 31204) {
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
  const handleClickVideo = async () => {
    let id = 31201;
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
  const handleClickContent = async () => {
    let id = 31202;
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
  const handleClickConversation = async () => {
    let id = 31203;
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
  const handleClickPopular = async () => {
    let id = 31204;
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
              <Image src={"http://127.0.0.1:3333/images/Gaming_Sidebar.png"} />
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
        <Grid.Column width={1}>
        <Image src={'http://127.0.0.1:3333/images/Gaming_Left-Right-Blank.png'}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid.Row centered>
            <Image src={"http://127.0.0.1:3333/images/Gaming_Top.png"} />
            <Popup
              trigger={
                <Image src={"http://127.0.0.1:3333/images/Gaming_Video.png"} />
              }
              wide='very'
              hoverable
              position="bottom center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Video </Header>
                  <p>
                    <b>Video: </b> การวางวิดีโอที่ด้านบนสุดของหน้าจะดึงดูดความสนใจของผู้ใช้และช่วยให้ได้รับประสบการณ์การรับชมที่ดี 
                    ผู้ใช้สามารถเข้าถึงและดูวิดีโอได้โดยไม่จำเป็นต้องเลื่อนหรือค้นหา นำไปสู่จำนวนการดูวิดีโอที่สูงขึ้น การมีส่วนร่วมที่เพิ่มขึ้น 
                    และระยะเวลาการเยี่ยมชมของผู้ใช้บนเว็บไซต์นานขึ้น
                  </p>
                  <Button
                    onClick={handleClickVideo}
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
              <Image src={"http://127.0.0.1:3333/images/Social-blank.png"} />
              <Popup
                trigger={
                  <Image
                    src={"http://127.0.0.1:3333/images/Gaming_ContentName.png"}
                  />
                }
                wide='very'
                hoverable
                position="bottom center"
              >
                <Grid centered divided>
                  <Grid.Column textAlign="center">
                    <Header as="h4">Content </Header>
                    <p>
                      <b>Content: </b> การวางเนื้อหาใต้วิดีโอ โดยทั่วไปแล้วผู้ใช้จะดูวิดีโอก่อนแล้วจึงเข้าถึงเนื้อหาหรือข้อมูลที่เกี่ยวข้อง 
                      การวางเนื้อหาไว้ข้างใต้วิดีโอช่วยให้มั่นใจได้ถึงการไหลของข้อมูลและช่วยให้ผู้ใช้สามารถดูวิดีโอก่อนที่จะลงลึกในรายละเอียดหรือบริบทเพิ่มเติม
                    </p>
                    <Button
                      onClick={handleClickContent}
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
                  src={"http://127.0.0.1:3333/images/Gaming_Conversation.png"}
                />
              }
              wide='very'
              hoverable
              position="top center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Comment </Header>
                  <p>
                    <b>Comment: </b> ในส่วนความคิดเห็นที่มีความคิดเห็นจำนวนมาก การแสดงข้อความจะช่วยลดความยุ่งเหยิงและปรับปรุงการจัดระเบียบภาพของเนื้อหา 
                    ผู้ใช้สามารถยุบหรือขยายเธรดความคิดเห็นเพื่อมุ่งเน้นไปที่การสนทนาที่พวกเขาสนใจที่สุด ซึ่งจะช่วยเพิ่มประสบการณ์ของผู้ใช้
                  </p>
                  <Button
                    onClick={handleClickConversation}
                    content="Like"
                    icon="heart"
                    color={colorIcon4.color}
                  />
                </Grid.Column>
              </Grid>
            </Popup>
            <Image src={"http://127.0.0.1:3333/images/Social-blank.png"} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <Popup
            trigger={
              <Image className="mymt50" src={"http://127.0.0.1:3333/images/Gaming_Popular.png"} />
            }
            wide='very'
            hoverable
            position="right center"
          >
            <Grid centered divided>
              <Grid.Column textAlign="center">
                <Header as="h4">Popular video </Header>
                <p>
                  <b>Popular video: </b> การวางแท็บวิดีโอยอดนิยมทางด้านขวา ทำให้เนื้อหาหลักกินพื้นที่ส่วนใหญ่ของหน้าจอ 
                  ทำให้เกิดลำดับชั้นของภาพแถบด้านข้างกลายเป็นองค์ประกอบที่ผู้ใช้สามารถเหลือบมองในขณะที่โฟกัสไปที่เนื้อหาหลัก 
                  แถบด้านข้างจะยังคงอยู่ในตำแหน่งเมื่อผู้ใช้เลื่อนดูฟีด ทำให้เข้าถึงข้อมูลและตัวเลือกได้อย่างสม่ำเสมอโดยไม่รบกวนเนื้อหาหลัก
                </p>
                <Button
                  onClick={handleClickPopular}
                  content="Like"
                  icon="heart"
                  color={colorIcon5.color}
                />
              </Grid.Column>
            </Grid>
          </Popup>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Design;
