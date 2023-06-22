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
            } else if (res.data.result[i].ct_ID === 41201) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 41301) {
              setcolorIcon3({
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
  const handleClickCourseName = async () => {
    let id = 41201;
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
  const handleClickContentName = async () => {
    let id = 41301;
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

  useEffect(() => {
    loaddata();
  }, []);

  const mypopup = () => {};

  return (
    <div>
      <Popup
        trigger={<Image src={"http://127.0.0.1:3333/images/Edu_Nav.png"} />}
        wide="very"
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

      <Popup
        trigger={
          <Image src={"http://127.0.0.1:3333/images/Edu_CourseName.png"} />
        }
        wide="very"
        hoverable
        position="bottom center"
      >
        <Grid centered divided>
          <Grid.Column textAlign="center">
            <Header as="h4">Course Detail</Header>
            <p>
              <b>Course Detail: </b> หน้ารายละเอียดหลักสูตร
              ผู้ใช้จะพบข้อมูลเพิ่มเติมเกี่ยวกับหลักสูตร ประวัติผู้สอน
              ระยะเวลาของหลักสูตร และรายละเอียดราคา นอกจากนี้
              ยังมีบทวิจารณ์และการให้คะแนนของผู้ใช้เพื่อช่วยให้ผู้ใช้ประเมินคุณภาพของหลักสูตรตามประสบการณ์ของผู้เรียนคนอื่นๆ
            </p>
            <Button
              onClick={handleClickCourseName}
              content="Like"
              icon="heart"
              color={colorIcon2.color}
            />
          </Grid.Column>
        </Grid>
      </Popup>

      <Popup
        trigger={
          <Image src={"http://127.0.0.1:3333/images/Edu_ContentName.png"} />
        }
        wide="very"
        hoverable
        position="bottom center"
      >
        <Grid centered divided>
          <Grid.Column textAlign="center">
            <Header as="h4"> Content </Header>
            <p>
              <b>Content: </b>
              การวางเนื้อหาของหลักสูตรไว้ใต้รายละเอียดของหลักสูตร
              ช่วยเพิ่มความสามารถในการอ่านและจะสร้างลำดับชั้นของข้อมูล
              โดยสามารถมุ่งเน้นไปที่รายละเอียดของหลักสูตรเพื่อพิจารณาว่าหลักสูตรนั้นสอดคล้องกับความสนใจของผู้ใช้
              หรือไม่หลังจากนั้นจะสามารถเข้าถึงส่วนเนื้อหาของหลักสูตรได้เพื่อสำรวจบทเรียนหรือเนื้อหาเฉพาะที่มีส่วนร่วมในระหว่างหลักสูตร
            </p>
            <Button
              onClick={handleClickContentName}
              content="Like"
              icon="heart"
              color={colorIcon3.color}
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
