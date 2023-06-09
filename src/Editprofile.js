import React, { useState, useEffect } from "react";
import axios from "./api/axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Image } from "semantic-ui-react";
import "./Edit.css";
import Navbar from "./component/Navbar/Navbar";
import { Sticky } from "semantic-ui-react";

function Editprofile() {
  const [fnerror, setfnerror] = useState(false);
  const [lnerror, setlnerror] = useState(false);
  const [pnerror, setpnerror] = useState(false);
  const [telerror, settelerror] = useState(false);

  const [showprofile, setshowprofile] = useState([]);

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    profileName: "",
    // email: "",
    phone: "",
    // image: null, // Add image property to the profileData state
  });

  const realToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = `Bearer ${realToken}`;

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    try {
      await axios.post("/getprofile").then((res) => {
        if (res.data.status === "failed") {
          console.log(res.data);
          window.location.replace('/login');
        } else if (res.data.status === "success") {
          console.log(res.data);
          if (res.data.data.m_IMG == null) {
            let data = {
              email: res.data.data.m_Email,
              Pname: res.data.data.m_PName,
              Fname: res.data.data.m_FName,
              Lname: res.data.data.m_LName,
              Tel: res.data.data.m_Tel,
              Img: "http://127.0.0.1:3333/images/no-pic.png",
            };
            setshowprofile(data);
            console.log(data);
          } else {
            let data = {
              email: res.data.data.m_Email,
              Pname: res.data.data.m_PName,
              Fname: res.data.data.m_FName,
              Lname: res.data.data.m_LName,
              Tel: res.data.data.m_Tel,
              Img: res.data.data.m_IMG,
            };
            // let img = res.data.data.m_IMG
            // setProfileImage(img)
            setshowprofile(data);
            console.log(data);
          }
        }
      });
    } catch (error) {
      console.log(error);
      // window.location.replace('/login');
    }
  };

  // const handleUpload = async (e) => {
  //   e.preventDefault();

  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setProfileImage(reader.result);
  //       console.log(setProfileImage);
  //     };
  //     reader.readAsDataURL(file);
  //   }

  //   try {
  //     await axios.post('/editprofile',setProfileImage).then((res) => {
  //       if (res.data.status === 'failed') {
  //         console.log(res.data.msg);
  //       }
  //       else if (res.data.status === 'success') {
  //         // setAuth({ email })
  //         // console.log(email);
  //         // console.log(auth);
  //         // window.location.replace('/profile')
  //       }
  //       console.log(res.data)
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);

    //   const fname =  data.get('firstName')
    //   const lname = data.get('lastName')
    //   const pname = data.get('profileName')
    //   const tel =  data.get('phone')
    if (profileData.firstName.length === 0) {
      setfnerror(true);
      // return;
    } else setfnerror(false);

    if (profileData.lastName.length === 0) {
      setlnerror(true);
      // return;
    } else setlnerror(false);

    if (profileData.profileName.length === 0) {
      setpnerror(true);
      // return;
    } else setpnerror(false);

    if (profileData.phone.length === 0) {
      settelerror(true);
      // return;
    } else settelerror(false);

    try {
      // const formData = new FormData(); // Create a new FormData object
      // formData.append("image", profileData.image); // Append the image file to the form data
      // formData.append("firstName", profileData.firstName);
      // formData.append("lastName", profileData.lastName);
      // formData.append("profileName", profileData.profileName);
      // formData.append("email", profileData.email);
      // formData.append("phone", profileData.phone);
      // setinputerror(true);

      if (
        profileData.firstName.length === 0 ||
        profileData.lastName.length === 0 ||
        profileData.profileName.length === 0 ||
        profileData.phone.length === 0
      ) {
        return;
      }
      console.log(profileData);

      await axios.post('editProfile', profileData).then((res) => {
        if(res.data.status === 'failed') {
          console.log(res.data.msg);
        } else if(res.data.status==='success') {
          window.location.replace('/profile');
        }
      })
      // await axios.post('/editprofile', formData).then((res)=>{
      //   if (res.data.status === 'failed') {
      //         console.log(res.data.msg);
      //       }else if (res.data.status === 'success') {
      //             // setAuth({ email })
      //             // console.log(email);
      //             // console.log(auth);
      //             // window.location.replace('/profile')
      //             console.log('eiei');
      //           }
      //           console.log(res.data);
      // })

      // if (
      //   fname.length == 0 ||
      //   lname.length == 0 ||
      //   pname.length == 0 ||
      //   tel.length == 0
      // ) {
      //   console.log("eiei");
      // } else {
      // await axios.post('/editprofile',{
      //   fname, lname, pname, tel
      // }).then((res)=>{
      //   if (res.data.status === 'failed') {
      //     console.log(res.data.msg);
      //   }
      //   else if (res.data.status === 'success') {
      //     // setAuth({ email })
      //     // console.log(email);
      //     // console.log(auth);
      //     // window.location.replace('/profile')
      //   }
      //   console.log(res.data); // Handle the response as needed
      // })}
    } catch (error) {
      console.log(error);
    }

    // console.log(userData);
    // try {
    //   const response = await axios.post('YOUR_API_ENDPOINT', userData);
    //   console.log(response.data); // Handle the response as needed

    //   // Additional logic after successful sign-up

    // } catch (error) {
    //   console.error(error); // Handle the error
    // }
  };

  const handleChange = (event) => {
    // if (event.target.name === "image") {
    //   setProfileData((prevState) => ({
    //     ...prevState,
    //     image: event.target.files[0], // Update the image file in the profileData state
    //   }));
    // } else {
    const { name, value } = event.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <div className="citem">
              <h2>Update Profile Image</h2>
              {/* {profileImage && ( */}
              <Image src={showprofile.Img} size="small" circular centered />
              {/* )} */}
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                disabled
              />
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="given-name"
                  // variant='outlined'
                  // id="outlined-required"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  placeholder={showprofile.Fname}
                  value={profileData.firstName}
                  error={fnerror}
                  onChange={handleChange}
                  // defaultValue={showprofile.Fname}
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  placeholder={showprofile.Lname}
                  value={profileData.lastName}
                  error={lnerror}
                  onChange={handleChange}
                  // defaultValue={showprofile.Lname}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="profileName"
                  label="Profile Name"
                  name="profileName"
                  placeholder={showprofile.Pname}
                  value={profileData.profileName}
                  error={pnerror}
                  onChange={handleChange}
                  // defaultValue={showprofile.Pname}
                  autoComplete="profile-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // required
                  fullWidth
                  id="email"
                  label={showprofile.email}
                  name="email"
                  placeholder={showprofile.email}
                  // defaultValue={showprofile.email}
                  disabled
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="phone"
                  id="phone"
                  placeholder={showprofile.Tel}
                  error={telerror}
                  onChange={handleChange}
                  autoComplete="new-phone"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Editprofile;
