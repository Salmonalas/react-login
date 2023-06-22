import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./fav-list.css";
import { Card, Icon, Button } from "semantic-ui-react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import axios from "./api/axios";
import {
  MDBCardText,
} from "mdb-react-ui-kit";

const FavList = (props) => {
  var data = []
  var social = false;
  var streaming = false;
  var gaming = false;
  var education = false;

  const [showDesign, setshowDesign] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = () => {
    try {
      axios.post(`/fav-list`).then((res) => {
        if (res.data.status === "success") {
          for (let i = 0; i < res.data.data.length; i++) {
            if ((!social)&&(Math.trunc(res.data.data[i].p_ID/10)===1001)) {
              social = true
              data.push({
                design_Name: 'Social Media',
                description: 'คลิกเพิ่อดูตัวอย่างการออกแบบเพิ่มเติม',
                path: `/Social/10010`,
              })
              
            } else if ((!streaming)&&(Math.trunc(res.data.data[i].p_ID/10)===2001)) {
              streaming = true
              data.push({
                design_Name: 'Streaming',
                description: 'คลิกเพิ่อดูตัวอย่างการออกแบบเพิ่มเติม',
                path: `/Streaming/20010`,
              })
            } else if ((!gaming)&&(Math.trunc(res.data.data[i].p_ID/10)===3001)) {
              gaming = true
              data.push({
                design_Name: 'Gaming',
                description: 'คลิกเพิ่อดูตัวอย่างการออกแบบเพิ่มเติม',
                path: `/Gaming/30010`,
              })
            } else if ((!education)&&(Math.trunc(res.data.data[i].p_ID/10)===4001)) {
              education = true
              data.push({
                design_Name: 'Education',
                description: 'คลิกเพิ่อดูตัวอย่างการออกแบบเพิ่มเติม',
                path: `/Education/40010`,
              })
            }
          }
          setshowDesign(data);
          // setisfav(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
                <Card.Content header={Item.design_Name} description={Item.description} />
                <Card.Content extra>
                  <Icon name="heart" color="red" />
                  {Item.num_of_fav} Favorited
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
      </div>
      <div className="cards">
        <div className="cards__container">{showContent}</div>
      </div>
    </div>
  );
};

export default FavList;
