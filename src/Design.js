import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Design.css';
import { Container, Divider, Grid, Header, Menu, Message, Segment, Table, Icon, Button, Comment, Form, Item, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useParams } from "react-router-dom";
import axios from "./api/axios";

// import Carouselimg from "./Carousel-img"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// TODO remove, this demo shouldn't need to reset the theme.
const Design = () => {
  const { token } = useParams();

  const [showdesign, setshowdesign] = useState([]);
  const [showNumFav, setshowNumFav] = useState({
    num_of_fav: 0
  });
  const [showIMG, setshowIMG] = useState([]);
  const [showcomment, setshowcomment] = useState([]);
  const [colorIcon, setcolorIcon] = useState({
    color: "",
    isFav: 0
  });

  const loaddata = () => {
    axios.get(`/design/${token}`).then((res) => {
      console.log(res.data);

      let data = {
        design_Name: res.data.design[0].d_Name,
        design_description: res.data.design[0].d_Description,
      }
      setshowdesign(data);
      setshowNumFav({num_of_fav: res.data.design[0].d_NumFavorite,})
      console.log(data);

      let img = res.data.img.map((Item) => {
        return {
          image: Item.d_IMG,
        };
      });
      setshowIMG(img);
      console.log(img);

      let com = res.data.comment.map((Item) => {
        return {
          name: Item.m_Name,
          image: Item.m_IMG,
          text: Item.cm_Text,
          datetime: Item.cm_DateTime
        };
      });
      setshowcomment(com);
      console.log(com);

      if (res.data.isfav !== 0) {
        setcolorIcon({
          color: "youtube",
          isFav: 1
        }) //red
      }
      else setcolorIcon({
        color: "",
        isFav: 0
      }) //เทา

    });
  }

  const [newComment, setnewComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment !== '') {
      try {
        await axios.post('/Add-Comment', {
          token,
          newComment,
        }).then((res) => {
          if (res.data.status === 'failed') {
            // console.log("ISUUUUUUUUUS")
            window.location.replace('/login');
          }
          else if (res.data.status === 'success') {
            let com = res.data.comment.map((Item) => {
              return {
                name: Item.m_Name,
                image: Item.m_IMG,
                text: Item.cm_Text,
                datetime: Item.cm_DateTime
              };
            });
            setshowcomment(com);
            // console.log(com);
            // window.location.reload();
          }
          console.log(res)
        })

        // Clear form fields after successful submission
        setnewComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }

  };

  const handleClick = async (e) => {
    e.preventDefault();
    let isFav = colorIcon.isFav
    console.log(isFav)

    try {
      console.log({
        token,
        isFav,
      })
      await axios.post('/design/like', {
        token,
        isFav,
      }).then((res) => {
        if (res.data.status === 'failed') {
          // console.log("ISUUUUUUUUUS")
          window.location.replace('/login');
        }
        else if (res.data.status === 'success') {
          if (res.data.isFav === 1) {
            setcolorIcon({
              color: "youtube",
              isFav: 1
            })
            setshowNumFav({num_of_fav: res.data.num_of_fav[0].d_NumFavorite})
          }
          else {
            setcolorIcon({
              color: "",
              isFav: 0
            })
            setshowNumFav({num_of_fav: res.data.num_of_fav[0].d_NumFavorite})
          }
          // console.log(com);
          // window.location.reload();
        }
        console.log(res)
      })
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  }

  useEffect(() => {
    loaddata();
  }, [])

  return (
    <div>
      <Container style={{ padding: '5em 0em' }}>
        <Grid columns={2}>
          <Grid.Column width={11}>
            <div className="carousel-wrapper">
              <Carousel width="750px">
                {showIMG.map((Item, index) => (
                  <div>
                    <img src={Item.image} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Grid.Column>

          <Grid.Column width={5}>
            <Header as='h2' className="mymb">{showdesign.design_Name}</Header>
            <div className="mymt50 mymb20">อธิบาย</div>
            <div className="mymb20 ">{showdesign.design_description}</div>
            {/* <Icon name="like" />4 likes */}
            {/* <Button
              // floated='left'
              content='Like'
              color="youtube"
              icon='heart'
              label={{ as: 'a', basic: true, content: `${colorIcon.color}` }}
              labelPosition='left'
            /> */}
            <Button
              onClick={handleClick}
              floated='right'
              content='Like'
              icon='heart'
              color={colorIcon.color}
              label={{ as: 'a', basic: true, content: `${showNumFav.num_of_fav}` }}
              labelPosition='right'
            />
            <div className="mymt80"></div>

            <Comment.Group>
              <Header as='h3'>คอมเมนต์</Header>

              {showcomment.map((Item, index) => (
                <Comment >
                  <Comment.Avatar src={Item.image} />
                  <Comment.Content>
                    <Comment.Author as='a'>{Item.name}</Comment.Author>
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
                  <TextArea placeholder='แสดงความคิดเห็น' style={{ minHeight: 10 }}
                    onChange={(e) => setnewComment(e.target.value)} />
                </div>
                <Button floated='right' content='ส่ง' labelPosition='left' icon='edit' primary
                  type="submit" />
              </Form>
              {/* <div>{newComment}</div> */}

            </Comment.Group>

          </Grid.Column>

        </Grid>

      </Container>

    </div>

  );
};

export default Design;
