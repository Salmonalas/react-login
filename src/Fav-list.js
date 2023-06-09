import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./fav-list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faVideo,
  faGamepad,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
// import Card from "@mui/material/Card";
import { Card, Icon, Button } from "semantic-ui-react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import "./contentbar.css";
//import axios from '../../api/axios-work';
import axios from "./api/axios";
// import AuthContext from "./context/AuthProvider";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

const FavList = (props) => {
  //   const [selectedMenu, setSelectedMenu] = useState({
  //     social: false,
  //     streaming: false,
  //     gaming: false,
  //     education: false,
  //   });
  //   const { auth } = useContext(AuthContext);
  //   console.log(auth);

  const [showDesign, setshowDesign] = useState([]);
  const [isfav, setisfav] = useState(false);

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = () => {
    // setSelectedMenu({
    // 	social: true,
    // 	streaming: false,
    // 	gaming: false,
    // 	education: false,
    // });
    try {
      axios.post(`/fav-list`).then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          let data = res.data.data.map((Item) => {
            return {
              // design_id: Item.d_ID,
              design_Name: Item.d_Name,
              num_of_fav: Item.d_NumFavorite,
              description: Item.d_Description,
              path: `/design/${Item.d_ID}`,
            };
          });
          setshowDesign(data);
          console.log(data);
          setisfav(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
//   const havefav = () => {
//     if (!showDesign) {
//       return (
//         <MDBCardText className="mb-0">
//           <Button onClick={loaddata}>Show all</Button>
//         </MDBCardText>
//       );
//     } else
//       return (
//         <MDBCardText className="mb-0">
//           <Button onClick={loaddata} >
//             Show all
//           </Button>
//         </MDBCardText>
//       );
//   };
  let showContent = <></>;
  showContent = (
    <Container sx={{ py: 1 }} maxWidth="md">
      <Grid container spacing={2}>
        {showDesign.map((Item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Link to={Item.path}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Content header={Item.design_Name} />
                {/* <Card.Content description={Item.description} /> */}
                <Card.Content extra>
                  <Icon name="heart" />
                  {Item.num_of_fav} Favorites
                </Card.Content>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>

    
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <MDBCardText className="lead fw-normal mb-0">Favorite list</MDBCardText>
        {/* {havefav()} */}
        {/* <MDBCardText className="mb-0">
          <Button  >
            Show all
          </Button>
        </MDBCardText> */}
      </div>
      <div className="cards">
        <div className="cards__container">{showContent}</div>
      </div>
    </div>
  );
};

export default FavList;
