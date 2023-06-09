import * as React from "react";
import { useState, useEffect } from "react";
import "../../Design.css";
import {
  Container,
  Grid,
  Header,
  Button,
  Comment,
  Form,
  TextArea,
  Menu,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import Page1 from "./Social-page1";
import Page2 from "./Social-page2";

const Design = () => {
  const { token } = useParams();
  const realToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = `Bearer ${realToken}`;

  const [showcomment, setshowcomment] = useState([]);

  const [activeItem, setactiveItem] = useState({ name: "1" });

  const loaddata = async () => {
    try {
      await axios.get(`/showcomment/${token}`).then((res) => {
        if (res.data.status === "failed") {
          console.log("failed");
          window.location.replace("/");
        }
        // setshowdesign(res.data.design.d_Name);
        let com = res.data.comment.map((Item) => {
          return {
            name: Item.m_PName,
            image: Item.m_IMG,
            text: Item.cm_Text,
            datetime: Item.cm_DateTime,
          };
        });
        setshowcomment(com);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [newComment, setnewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment !== "") {
      try {
        await axios
          .post("/Add-Comment", {
            token,
            newComment,
          })
          .then((res) => {
            if (res.data.status === "failed") {
              window.location.replace("/login");
            } else if (res.data.status === "success") {
              let com = res.data.comment.map((Item) => {
                return {
                  name: Item.m_PName,
                  image: Item.m_IMG,
                  text: Item.cm_Text,
                  datetime: Item.cm_DateTime,
                };
              });
              setshowcomment(com);
              setnewComment("");
            }
          });
        setnewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleItemClick = async (e, { name }) => {
    setactiveItem({ name: name });
    if (name === "1") {
      setpage(<Page1 />);
    } else if (name === "2") {
      setpage(<Page2 />);
    }
  };

  const [page, setpage] = useState([<Page1 />]);

  useEffect(() => {
    loaddata();
  }, []);

  const gohome = () => {
    window.location.replace("/");
  };

  const goreport = () => {
    window.location.replace("/report-social");
  }

  return (
    <div>
      <div className="bgsocial">
        <div className="aboutfont">
          <b>ประเภทเว็บไซต์ Social Media</b>
        </div>
      </div>

      <div className="center font mymt50">
        <b className="font24">ประเภทเว็บไซต์ Social Media</b>
        <div className="mymt20">
          <b className="font16">
            ส่วนนี้แสดงการออกแบบในเว็บไซต์นั้นๆ
            หากสนใจส่วนใดให้คลิกดูคำอธิบายด้านล่างนี้ได้เลย
          </b>
        </div>
      </div>

      <Grid centered>
        <Grid.Column width={6} className="mybackbtn">
          <Button
            content="ย้อนกลับ"
            labelPosition="left"
            icon="left chevron"
            onClick={gohome}
          />
        </Grid.Column>
        <Grid.Column width={6} className="myrightbtn">
          <Button
            color="purple"
            floated="right"
            content="กราฟสรุปผล"
            labelPosition="right"
            icon="right chevron"
            onClick={goreport}
          />
        </Grid.Column>
      </Grid>
      
      <Container style={{ padding: "3em 0em" }}>
        <h1 className="mycenter mymb20"></h1>
        <Segment>{page}</Segment>
      </Container>

      <div className="mymb20 mycenter">
        <Menu pagination>
          <Menu.Item
            name="1"
            active={activeItem.name === "1"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="2"
            active={activeItem.name === "2"}
            onClick={handleItemClick}
          />
        </Menu>
      </div>

      <Container style={{ padding: "2em 0em" }}>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={16}>
              <Comment.Group>
                <Header as="h3">คอมเมนต์</Header>

                {showcomment.map((Item, index) => (
                  <Comment>
                    <Comment.Avatar src={Item.image} />
                    <Comment.Content>
                      <Comment.Author as="a">{Item.name}</Comment.Author>
                      <Comment.Metadata>
                        <div>{Item.datetime}</div>
                      </Comment.Metadata>
                      <Comment.Text>{Item.text}</Comment.Text>
                      <Comment.Actions>
                        {/* <Comment.Action>Reply</Comment.Action> */}
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                ))}

                <Form reply onSubmit={handleSubmit}>
                  <div className="mymb20">
                    <TextArea
                      placeholder="แสดงความคิดเห็น"
                      style={{ minHeight: 10 }}
                      onChange={(e) => setnewComment(e.target.value)}
                    />
                  </div>
                  <Button
                    floated="right"
                    content="ส่ง"
                    labelPosition="left"
                    icon="edit"
                    primary
                    type="submit"
                  />
                </Form>
                {/* <div>{newComment}</div> */}
              </Comment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Design;
