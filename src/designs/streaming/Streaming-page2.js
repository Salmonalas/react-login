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

  const [showNumFav, setshowNumFav] = useState({
    num_of_fav: 0,
  });
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
        console.log(res.data.result.length);
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
    // handleClick(id)
    let isFav = colorIcon1.isFav;
    console.log(isFav);
    // console.log(id);
    try {
      console.log({
        id,
        isFav,
      });
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            console.log(res.data);
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            } else {
              setcolorIcon1({
                color: "",
                isFav: false,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            }
            // console.log(com);
            // window.location.reload();
          }
          console.log(res);
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickSearch = async () => {
    let id = 21102;
    // handleClick(id)
    let isFav = colorIcon2.isFav;
    console.log(isFav);
    // console.log(id);
    try {
      console.log({
        id,
        isFav,
      });
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            console.log(res.data);
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon2({
                color: "youtube",
                isFav: true,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            } else {
              setcolorIcon2({
                color: "",
                isFav: false,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            }
            // console.log(com);
            // window.location.reload();
          }
          console.log(res);
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickLive = async () => {
    let id = 21201;
    // handleClick(id)
    let isFav = colorIcon3.isFav;
    console.log(isFav);
    // console.log(id);
    try {
      console.log({
        id,
        isFav,
      });
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            console.log(res.data);
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon3({
                color: "youtube",
                isFav: true,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            } else {
              setcolorIcon3({
                color: "",
                isFav: false,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            }
            // console.log(com);
            // window.location.reload();
          }
          console.log(res);
        });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleClickRecommend = async () => {
    let id = 21202;
    // handleClick(id)
    let isFav = colorIcon4.isFav;
    console.log(isFav);
    // console.log(id);
    try {
      console.log({
        id,
        isFav,
      });
      await axios
        .post("/design/like", {
          id,
          isFav,
        })
        .then((res) => {
          if (res.data.status === "failed") {
            console.log(res.data);
            window.location.replace("/login");
          } else if (res.data.status === "success") {
            if (res.data.isFav) {
              setcolorIcon4({
                color: "youtube",
                isFav: true,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            } else {
              setcolorIcon4({
                color: "",
                isFav: false,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            }
            // console.log(com);
            // window.location.reload();
          }
          console.log(res);
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
            flowing
            hoverable
            position="right center"
          >
            <Grid centered divided>
              <Grid.Column textAlign="center">
                <Header as="h4">Basic Plan</Header>
                <p>
                  <b>1</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                </p>
                <Button
                  onClick={handleClickSide}
                  // floated="right"
                  content="Like"
                  icon="heart"
                  color={colorIcon1.color}
                  label={{
                    as: "a",
                    basic: true,
                    // content: `${showNumFav.num_of_fav}`,
                  }}
                  labelPosition="right"
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
              flowing
              hoverable
              position="bottom center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Basic Plan</Header>
                  <p>
                    <b>2</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickSearch}
                    // floated="right"
                    content="Like"
                    icon="heart"
                    color={colorIcon2.color}
                    label={{
                      as: "a",
                      basic: true,
                      // content: `${showNumFav.num_of_fav}`,
                    }}
                    labelPosition="right"
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
                flowing
                hoverable
                position="right center"
              >
                <Grid centered divided>
                  <Grid.Column textAlign="center">
                    <Header as="h4">Basic Plan</Header>
                    <p>
                      <b>1</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                    </p>
                    <Button
                      onClick={handleClickLive}
                      // floated="right"
                      content="Like"
                      icon="heart"
                      color={colorIcon3.color}
                      label={{
                        as: "a",
                        basic: true,
                        // content: `${showNumFav.num_of_fav}`,
                      }}
                      labelPosition="right"
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
              flowing
              hoverable
              position="top center"
            >
              <Grid centered divided>
                <Grid.Column textAlign="center">
                  <Header as="h4">Basic Plan</Header>
                  <p>
                    <b>1</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickRecommend}
                    // floated="right"
                    content="Like"
                    icon="heart"
                    color={colorIcon4.color}
                    label={{
                      as: "a",
                      basic: true,
                      // content: `${showNumFav.num_of_fav}`,
                    }}
                    labelPosition="right"
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
