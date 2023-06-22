import React, { useState } from "react";
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

function SignUp() {
  const [passwordError, setPasswordError] = useState(false);
  const [fnameError, setfnameError] = useState(false);
  const [lnameError, setlnameError] = useState(false);
  const [pnameError, setpnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [phoneError, setphoneError] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    const userData = {
      email: data.get("email"),
      password,
      fname: data.get("firstName"),
      lname: data.get("lastName"),
      pname: data.get("profileName"),
      tel: data.get("phone"),
    };

    if (userData.fname.length === 0) {
      setfnameError(true);
    } else setfnameError(false);

    if (userData.lname.length === 0) {
      setlnameError(true);
    } else setlnameError(false);

    if(userData.pname.length === 0) {
      setpnameError(true)
    }else setpnameError(false)

    if(userData.email.length === 0) {
      setemailError(true)
    }else setemailError(false)

    if(userData.tel.length === 0) {
      setphoneError(true)
    }else setphoneError(false)

    if (password !== confirmPassword) {
      setPasswordError(true);
      setPasswordErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must contain at least 8 characters");
      return;
    }

    // Password policy validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "Password must contain at least 8 characters, including at least one letter and one number."
      );
      return;
    }

    try {
      await axios.post("/signup", userData).then((res) => {
        if (res.data.status === "failed") {
        } else if (res.data.status === "success") {
          window.location.replace("/login");
        }
      });

    } catch (error) {
      console.error(error);
    }
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={fnameError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={lnameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="profileName"
                  label="Profile Name"
                  name="profileName"
                  autoComplete="profile-name"
                  error={pnameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordError}
                  helperText={passwordErrorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  error={passwordError}
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
                  autoComplete="new-phone"
                  error={phoneError}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
