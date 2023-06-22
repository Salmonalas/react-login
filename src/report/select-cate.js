import React from "react";
import "./report.css";
import { Card, Icon, Grid, Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faVideo,
  faGamepad,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer/Footer";
import { Link } from "react-router-dom";

export default function report() {
  return (
    <>
      <div className="bannercate">
        <div className="catefont">
          <b className="fontcolor">กราฟ</b><b>สรุปผล</b>
          <div className="mymt">
            <h5 className="font">
              ข้อมูลที่มาแสดงผลมาจากการที่ผู้ใช้ได้เข้ามากดถูกใจตำแหน่งขององค์ประกอบเว็บประเภทต่างๆ
              ที่อยู่ใน DESIGNPRINTED ซึ่งข้อมูลต่างๆ นั้นจะเป็นแบบภาพรวมทั้งหมด
            </h5>
          </div>
        </div>
      </div>

      <Grid centered>
        <h1 className="font"><b>ประเภทเว็บไซต์ต่างๆ</b></h1>
        <Grid.Row>
          <h5 className="font">
            ในส่วนนี้จะแสดงข้อมูลต่างๆ โดยแบ่งเป็นประเภทต่างๆ
            ในการกดถูกใจของผู้เข้าใช้ในประเภทนั้นๆ
          </h5>
        </Grid.Row>
      </Grid>

      <Card.Group itemsPerRow={4}>
        <Card>
          <Card.Content className="mymg">
            <div className="center mymg">
              <FontAwesomeIcon icon={faGlobe} size="10x" color="purple" />
            </div>
            <Card.Description>
              <h3 className="center font reportfontcolor">
                ประเภท : Social Media
              </h3>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={"/report-social"}>
              <Button basic color="purple" fluid>
                คลิกเพืิอดูผลสรุป
              </Button>
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content className="mymg">
            <div className="center mymg">
              <FontAwesomeIcon icon={faVideo} size="10x" color="purple" />
            </div>
            <Card.Description>
              <h3 className="center font reportfontcolor">
                ประเภท : Streaming
              </h3>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={"/report-streaming"}>
              <Button basic color="purple" fluid>
                คลิกเพืิอดูผลสรุป
              </Button>
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content className="mymg">
            <div className="center mymg">
              <FontAwesomeIcon icon={faGamepad} size="10x" color="purple" />
            </div>
            <Card.Description>
              <h3 className="center font reportfontcolor">ประเภท : Gaming</h3>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={"/report-gaming"}>
              <Button basic color="purple" fluid>
                คลิกเพืิอดูผลสรุป
              </Button>
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content className="mymg">
            <div className="center mymg">
              <FontAwesomeIcon
                icon={faGraduationCap}
                size="10x"
                color="purple"
              />
            </div>
            <Card.Description>
              <h3 className="center font reportfontcolor">
                ประเภท : Education
              </h3>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={"/report-education"}>
              <Button basic color="purple" fluid>
                คลิกเพืิอดูผลสรุป
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
      <Footer />
    </>
  );
}
