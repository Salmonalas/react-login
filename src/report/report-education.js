import React, { useState, useEffect } from "react";
import "./report.css";
import axios from "../api/axios";
import { Grid, Segment, Image, Divider, Menu } from "semantic-ui-react";
import Footer from "../component/Footer/Footer";
import { UserData } from "./Data";
import BarChart from "./BarChart";

const Report = () => {
  const [activeItem, setactiveItem] = useState({ name: "1" });
  const [img, setimg] = useState();
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "number of likes",
        data: UserData.map((data) => data.NOF),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    loaddata('40011');
  }, []);

  const loaddata = async (id) => {
    axios.post("/reports-education", { id: id }).then((res) => {
      try {
        setimg(res.data.IMG.IMG);
        setUserData({
          labels: res.data.result.map((data) => data.name),
          datasets: [
            {
              label: "number of likes",
              data: res.data.result.map((data) => data.NOF),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleItemClick = async (e, { name, id }) => {
    setactiveItem({ name: name });
    loaddata(id);
  };

  return (
    <>
      <div className="bannercate">
        <div className="catefont">
          <b className="fontcolor">กราฟ</b><b>สรุปผล</b>
        </div>
      </div>

      <Grid centered>
        <h1 className="font"><b>ประเภทเว็บไซต์ Education</b></h1>
        <Grid.Row>
          <h5 className="font">
            ในส่วนนี้จะแสดงข้อมูลต่างๆ โดยแบ่งเป็นประเภทต่างๆ
            ในการกดถูกใจของผู้เข้าใช้ในประเภทนั้นๆ
          </h5>
        </Grid.Row>
      </Grid>

      <Segment className="mymt">
        <Grid columns={2} textAlign="center" centered className="mymt">
          {/* <Divider vertical>Or</Divider> */}
          <Grid.Column>
            <Image className="mymt" centered size="big" src={img} />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" centered>
            <div className="App">
              <div style={{ width: 700 }}>
                <BarChart chartData={userData} />
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>

      <div className="myselectbutton">
        <Menu pagination>
          <Menu.Item
            name="1"
            id="40011"
            active={activeItem.name === "1"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="2"
            id="40012"
            active={activeItem.name === "2"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="3"
            id="40013"
            active={activeItem.name === "3"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="4"
            id="40014"
            active={activeItem.name === "4"}
            onClick={handleItemClick}
          />
        </Menu>
      </div>

      <Footer />
    </>
  );
};
export default Report;
