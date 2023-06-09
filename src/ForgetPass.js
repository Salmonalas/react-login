import React, { useState } from "react";
import axios from "./api/axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Forget.css";

function Forgot() {
  const [status, setstatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    if (email.length === 0) {
      setstatus("Please fill in your email");
      return;
    }
    try {
      await axios.post("/forgotpassword", { email }).then((res) => {
        if (res.data.status === "failed") {
          setstatus("Account Not Found");
        } else if (res.data.status === "success") {
          localStorage.setItem("token", res.data.token);
          setstatus("Please Check Your Email");
          // window.location.replace('/')
        }
        console.log(res.data); // Handle the response as needed
      });
    } catch (error) {
      console.log(error); // Handle the error
      setstatus("Account Not Found!"); // Set error message
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "92vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={10}
          square
        >
          <Box
            sx={{
              my: 37,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Typography color="error" align="center" sx={{ mt: 1 }}>
                {status}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirm
              </Button>
              <Grid container>
                <Grid item>
                  <div className="dis">
                    {
                      "ถ้าไม่มีข้อความนี้ กล่องข้อความจะบัคแบบงงๆ โปรดอย่าสนใจ <3"
                    }
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
              Designprinted
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Forgot;
