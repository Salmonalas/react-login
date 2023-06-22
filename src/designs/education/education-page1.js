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
            if (res.data.result[i].ct_ID === 41101) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 41103) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 41104) {
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
    let id = 41101;
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
  const handleClickTab = async () => {
    let id = 41103;
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
  const handleClickNew = async () => {
    let id = 41104;
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
      <Popup
        trigger={<Image src={"http://127.0.0.1:3333/images/Edu_Nav.png"} />}
        wide='very'
        hoverable
        position="bottom center"
      >
        <Grid centered divided>
          <Grid.Column textAlign="center">
            <Header as="h4">Navbar </Header>
            <p>
              <b>Navbar: </b> การวางแถบ Navbar
              ที่ด้านบนของเว็บไซต์ช่วยให้ผู้ใช้มองเห็นได้ทันทีและช่วยให้ผู้ใช้เข้าถึงได้ง่าย
              ผู้ใช้ส่วนใหญ่คุ้นเคยกับการค้นหาสิ่งต่างๆ ที่ด้านบนของหน้า
              ซึ่งช่วยลดช่วงการเรียนรู้และเพิ่มประสบการณ์ผู้ใช้
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

      <Image src={"http://127.0.0.1:3333/images/Edu_Banner.png"} />

      <Popup
        trigger={<Image src={"http://127.0.0.1:3333/images/Edu_Tab.png"} />}
        wide='very'
        hoverable
        position="bottom center"
      >
        <Grid centered divided>
          <Grid.Column textAlign="center">
            <Header as="h4">Category tab</Header>
            <p>
              <b>Category tab: </b> การวางเมนูหมวดหมู่ไว้ใต้แบนเนอร์ช่วยสร้างลำดับชั้นภาพที่ชัดเจนบนเว็บไซต์ 
              การวางเมนูหมวดหมู่ไว้ด้านล่างแบนเนอร์ ทำให้จุดสนใจหลักยังคงอยู่ที่แบนเนอร์ ในขณะที่ยังคงเข้าถึงตัวเลือกหมวดหมู่ได้ง่าย
            </p>
            <Button
              onClick={handleClickTab}
              content="Like"
              icon="heart"
              color={colorIcon3.color}
            />
          </Grid.Column>
        </Grid>
      </Popup>
      <Popup
        trigger={
          <Image src={"http://127.0.0.1:3333/images/Edu_NewCourse.png"} />
        }
        wide='very'
        hoverable
        position="bottom center"
      >
        <Grid centered divided>
          <Grid.Column textAlign="center">
            <Header as="h4">Card </Header>
            <p>
              <b>Card: </b> หลักสูตรจะแสดงเป็นการ์ดหรือภาพขนาดย่อที่ดึงดูดสายตา 
              การใช้รูปภาพหรือภาพประกอบบนการ์ดช่วยดึงดูดความสนใจและช่วยให้มองเห็นเนื้อหาของหลักสูตรได้อย่างรวดเร็ว
            </p>
            <Button
              onClick={handleClickNew}
              content="Like"
              icon="heart"
              color={colorIcon4.color}
            />
          </Grid.Column>
        </Grid>
      </Popup>
      <Image src={"http://127.0.0.1:3333/images/Gaimg_Undergame-Blank.png"} />
      <Image src={"http://127.0.0.1:3333/images/Edu_Footer.png"} />
    </div>
  );
};

export default Design;
