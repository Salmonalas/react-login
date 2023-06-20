import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./contents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faVideo,
  faGamepad,
  faGraduationCap,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "./api/axios";
import AuthContext from "./context/AuthProvider";

const Contents = () => {
  // const { auth } = useContext(AuthContext);
  // console.log(auth);

  const [showDesign, setshowDesign] = useState([]);
  const [categories, setcategories] = useState([""]);

  useEffect(() => {
    onFirstLoad();
  }, []);

  const onFirstLoad = () => {
    axios.get("/All-Design").then((res) => {
      console.log(res.data);
      let data = res.data.data.map((Item) => {
        if (Item.c_ID === 10) {
          // setcategories('social')
          // console.log(categories);
          return {
            design_Name: Item.d_Name,
            num_of_fav: Item.d_NumFavorite,
            ex_image: Item.d_ExIMG,
            path: `social/${Item.d_ID}`,
          };
        } else if (Item.c_ID === 20) {
          return {
            design_Name: Item.d_Name,
            num_of_fav: Item.d_NumFavorite,
            ex_image: Item.d_ExIMG,
            path: `streaming/${Item.d_ID}`,
          };
        } else if (Item.c_ID === 30) {
          return {
            design_Name: Item.d_Name,
            num_of_fav: Item.d_NumFavorite,
            ex_image: Item.d_ExIMG,
            path: `gaming/${Item.d_ID}`,
          };
        } else if (Item.c_ID === 40) {
          return {
            design_Name: Item.d_Name,
            num_of_fav: Item.d_NumFavorite,
            ex_image: Item.d_ExIMG,
            path: `education/${Item.d_ID}`,
          };
        }
      });
      setshowDesign(data);
      console.log(data);
    });
  };

  const onClickSocial = () => {
    axios.get(`/All-Social-Design`).then((res) => {
      console.log(res.data);
      let data = res.data.data.map((Item) => {
        return {
          design_Name: Item.d_Name,
          num_of_fav: Item.d_NumFavorite,
          ex_image: Item.d_ExIMG,
          path: `social/${Item.d_ID}`,
        };
      });
      setshowDesign(data);
      console.log(data);
    });
  };

  const onClickStreaming = () => {
    axios.get(`/All-Streaming-Design`).then((res) => {
      console.log(res.data);
      let data = res.data.data.map((Item) => {
        return {
          design_Name: Item.d_Name,
          num_of_fav: Item.d_NumFavorite,
          ex_image: Item.d_ExIMG,
          path: `streaming/${Item.d_ID}`,
        };
      });
      setshowDesign(data);
      console.log(data);
    });
  };

  const onClickGaming = () => {
    axios.get(`/All-Gaming-Design`).then((res) => {
      console.log(res.data);
      let data = res.data.data.map((Item) => {
        return {
          design_Name: Item.d_Name,
          num_of_fav: Item.d_NumFavorite,
          ex_image: Item.d_ExIMG,
          path: `gaming/${Item.d_ID}`,
        };
      });
      setshowDesign(data);
      console.log(data);
    });
  };

  const onClickEducation = () => {
    axios.get(`/All-Education-Design`).then((res) => {
      console.log(res.data);
      let data = res.data.data.map((Item) => {
        return {
          design_Name: Item.d_Name,
          num_of_fav: Item.d_NumFavorite,
          ex_image: Item.d_ExIMG,
          path: `education/${Item.d_ID}`,
        };
      });
      setshowDesign(data);
      console.log(data);
    });
  };

  let showContent = <></>;
  showContent = (
    <Container sx={{ py: 2 }} maxWidth="md">
      <Grid container spacing={4}>
        {showDesign.map((Item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Link to={Item.path}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={Item.ex_image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {Item.design_Name}
                  </Typography>
                  <Typography>
                    ตัวอย่างการออกแบบ ที่ได้มาจากการสอบถามกลุ่มตัวอย่าง
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  return (
    <div>
      <div className="cardbar">
        {" "}
        <div className="cardbar-container">
          <div>
            <div className="multi-button ">
              <button onClick={onFirstLoad}>
                <FontAwesomeIcon icon={faBorderAll} size="xl" />
                <h5>All Design</h5>
              </button>

              <button onClick={onClickSocial}>
                <FontAwesomeIcon icon={faGlobe} size="xl" />
                <h5>Social Media</h5>
              </button>

              <button onClick={onClickStreaming}>
                <FontAwesomeIcon icon={faVideo} size="xl" />
                <h5>Streaming</h5>
              </button>

              <button onClick={onClickGaming}>
                <FontAwesomeIcon icon={faGamepad} size="xl" />
                <h5>Gaming</h5>
              </button>

              <button onClick={onClickEducation}>
                <FontAwesomeIcon icon={faGraduationCap} size="xl" />{" "}
                <h5>Education</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container">{showContent}</div>
      </div>
    </div>
  );
};

export default Contents;
