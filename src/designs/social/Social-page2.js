import * as React from "react";
import { useState, useEffect } from "react";
// import "../../Design.css";
import {
  Grid,
  Header,
  Button,
  Image,
  Popup,
} from "semantic-ui-react";
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
        if (res.data.status === 'success') {
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].ct_ID === 11101) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 11201) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 11103) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 11202) {
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

  const handleClickNav = async () => {
    let id = 11101
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
  }
  const handleClickPost = async () => {
    let id = 11201
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
  }
  const handleClickRecent = async () => {
    let id = 11103
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
  }
  const handleClickRules = async () => {
    let id = 11202
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
  }

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <Grid centered>
        <Grid.Column width={16}>
          <Popup
            trigger={
              <Image src={"http://127.0.0.1:3333/images/Social1_Nav.png"} />
            }
            wide='very'
            hoverable
            position="bottom center"
          >
            <Grid centered divided>
              <Grid.Column textAlign="center">
              <Header as="h4">Navbar </Header>
                <p>
                  <b>Navbar: </b> การวางแถบ Navbar ที่ด้านบนของเว็บไซต์ช่วยให้ผู้ใช้มองเห็นได้ทันทีและช่วยให้ผู้ใช้เข้าถึงได้ง่าย 
                  ผู้ใช้ส่วนใหญ่คุ้นเคยกับการค้นหาสิ่งต่างๆ ที่ด้านบนของหน้า ซึ่งช่วยลดช่วงการเรียนรู้และเพิ่มประสบการณ์ผู้ใช้
                </p>
                <Button
                  onClick={handleClickNav}
                  content="Like"
                  icon="heart"
                  color={colorIcon1.color}
                />
              </Grid.Column>
            </Grid>
          </Popup>
        </Grid.Column>

        <Grid.Row centered className="mymb20">
          <Grid.Column width={7}>
            <Popup
              trigger={
                <Image
                  src={
                    "http://127.0.0.1:3333/images/Social1_page2_Post-Comment.png"
                  }
                />
              }
              wide
              hoverable
              position="right center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Comments & Voting </Header>
                  <p>
                    <b>Comments & Voting: </b> การวางตำแหน่งความคิดเห็นและการกด reaction ใต้โพสต์ 
                    ช่วยให้ลำดับชั้นของภาพชัดเจน ตัวโพสต์เองยังคงเป็นจุดโฟกัส โดยมีการนำเสนอความคิดเห็นและปฏิกิริยาเป็นเนื้อหาเสริม 
                    ลำดับชั้นนี้ช่วยให้ผู้ใช้แยกความแตกต่างระหว่างเนื้อหาต้นฉบับและเนื้อหาที่ผู้ใช้สร้างขึ้นตามมา ส่งเสริมความชัดเจนและอ่านง่าย
                  </p>
                  <Button
                    onClick={handleClickPost}
                    content="Like"
                    icon="heart"
                    color={colorIcon2.color}
                  />
                </Grid.Column>
              </Grid>
            </Popup>
          </Grid.Column>

          <Grid.Column width={3}>
            <Grid.Row>
              <Popup
                trigger={
                  <Image
                    src={"http://127.0.0.1:3333/images/Social1_Recent.png"}
                  />
                }
                wide='very'
                hoverable
                position="bottom center"
              >
                <Grid centered divided>
                  <Grid.Column textAlign="center">
                  <Header as="h4">Recent Post </Header>
                  <p>
                    <b>Recent Post: </b>การวางตำแหน่งแถบไว้ทางด้านขวา ทำให้เนื้อหาหลักกินพื้นที่ส่วนใหญ่ของหน้าจอ 
                    ทำให้เกิดลำดับชั้นของภาพแถบด้านข้างกลายเป็นองค์ประกอบที่ผู้ใช้สามารถเหลือบมองในขณะที่โฟกัสไปที่เนื้อหาหลัก 
                    แถบด้านข้างจะยังคงอยู่ในตำแหน่งเมื่อผู้ใช้เลื่อนดูฟีด ทำให้เข้าถึงข้อมูลและตัวเลือกได้อย่างสม่ำเสมอโดยไม่รบกวนเนื้อหาหลัก
                  </p>
                  <Button
                    onClick={handleClickRecent}
                    id='11103'
                    content="Like"
                    icon="heart"
                    color={colorIcon3.color}
                  />
                  </Grid.Column>
                </Grid>
              </Popup>
            </Grid.Row>
            
            <Grid.Row>
              <Image src={"http://127.0.0.1:3333/images/Social-blank.png"}/>
              <Popup
                trigger={
                  <Image
                    src={"http://127.0.0.1:3333/images/Social1_page2_Rules.png"}
                  />
                }
                wide='very'
                hoverable
                position="bottom center"
              >
                <Grid centered divided>
                  <Grid.Column textAlign="center">
                    <Header as="h4">Rules </Header>
                    <p>
                      <b>Rules: </b> การวางตำแหน่งแถบไว้ทางด้านขวา ทำให้เนื้อหาหลักกินพื้นที่ส่วนใหญ่ของหน้าจอ 
                      ทำให้เกิดลำดับชั้นของภาพแถบด้านข้างกลายเป็นองค์ประกอบที่ผู้ใช้สามารถเหลือบมองในขณะที่โฟกัสไปที่เนื้อหาหลัก 
                      แถบด้านข้างจะยังคงอยู่ในตำแหน่งเมื่อผู้ใช้เลื่อนดูฟีด ทำให้เข้าถึงข้อมูลและตัวเลือกได้อย่างสม่ำเสมอโดยไม่รบกวนเนื้อหาหลัก
                    </p>
                    <Button
                      onClick={handleClickRules}
                      content="Like"
                      icon="heart"
                      color={colorIcon4.color}
                    />
                  </Grid.Column>
                </Grid>
              </Popup>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Design;
