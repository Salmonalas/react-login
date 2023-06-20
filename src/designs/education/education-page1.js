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
  const [colorIcon5, setcolorIcon5] = useState({
    color: "",
    isFav: false,
  });
  const [colorIcon6, setcolorIcon6] = useState({
    color: "",
    isFav: false,
  });

  const loaddata = async () => {
    try {
      await axios.get(`/contents-islike`).then((res) => {
        console.log(res.data.result.length);
        if (res.data.status === 'success') {
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].ct_ID === 41101) {
              setcolorIcon1({
                color: "youtube",
                isFav: true,
              });
            } else if (res.data.result[i].ct_ID === 41102) {
              setcolorIcon2({
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
            } else if (res.data.result[i].ct_ID === 41105) {
                setcolorIcon5({
                  color: "youtube",
                  isFav: true,
                });
            } else if (res.data.result[i].ct_ID === 41106) {
                setcolorIcon6({
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
    let id = 41101
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
  }
  const handleClickBanner = async () => {
    let id = 41102
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
  }
  const handleClickTab = async () => {
    let id = 41103
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
  }
  const handleClickNew = async () => {
    let id = 41104
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
  }
  const handleClickfree = async () => {
    let id = 41105
    // handleClick(id)
    let isFav = colorIcon5.isFav;
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
              setcolorIcon5({
                color: "youtube",
                isFav: true,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            } else {
              setcolorIcon5({
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
  }
  const handleClickFooter = async () => {
    let id = 41106
    // handleClick(id)
    let isFav = colorIcon6.isFav;
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
              setcolorIcon6({
                color: "youtube",
                isFav: true,
              });
              setshowNumFav({
                num_of_fav: res.data.num_of_fav[0].d_NumFavorite,
              });
            } else {
              setcolorIcon6({
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
  }

  useEffect(() => {
    loaddata();
  }, []);

  const mypopup = () => {

  }

  return (
    <div>
      {/* <Grid centered >
        <Grid.Column width={16}> */}
          <Popup
            trigger={
              <Image
                src={"http://127.0.0.1:3333/images/Edu_Nav.png"}
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
                  <b>1</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                </p>
                <Button
                  onClick={handleClickNav}
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
        {/* </Grid.Column> */}

        {/* <Grid.Row centered >
          <Grid.Column width={16}> */}
            <Popup
              trigger={
                <Image
                  src={"http://127.0.0.1:3333/images/Edu_Banner.png"}
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
                    <b>2</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickBanner}
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
          {/* </Grid.Column>
          </Grid.Row> */}
          {/* <Grid.Row centered className="mymb20">
          <Grid.Column width={16}> */}
            <Popup
              trigger={
                <Image
                  src={
                    "http://127.0.0.1:3333/images/Edu_Tab.png"
                  }
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
                    <b>3</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickTab}
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

            <Popup
              trigger={
                <Image
                  src={
                    "http://127.0.0.1:3333/images/Edu_NewCourse.png"
                  }
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
                    <b>3</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickNew}
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

            <Popup
              trigger={
                <Image
                  src={
                    "http://127.0.0.1:3333/images/Edu_FreeCourse.png"
                  }
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
                    <b>3</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickfree}
                    // floated="right"
                    content="Like"
                    icon="heart"
                    color={colorIcon5.color}
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
        
            <Image src={"http://127.0.0.1:3333/images/Gaimg_Undergame-Blank.png"} />
            <Popup
              trigger={
                <Image
                  src={
                    "http://127.0.0.1:3333/images/Edu_Footer.png"
                  }
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
                    <b>3</b> คำอธิบายยยยยยยยยยยยยยยยยยยยยยยยยยยย
                  </p>
                  <Button
                    onClick={handleClickFooter}
                    // floated="right"
                    content="Like"
                    icon="heart"
                    color={colorIcon6.color}
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
          {/* </Grid.Column>
        </Grid.Row> */}
      {/* </Grid> */}
    </div>
  );
};

export default Design;
