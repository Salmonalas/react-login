import React from 'react';
import axios from './api/axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useParams } from "react-router-dom";


function Copyright() {//ลอกเขามา
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ResetPass() {
  const { token } = useParams();

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newPassword = data.get('newPass');
    const confirmPassword = data.get('conPassword');

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
      setPasswordErrorMessage('Passwords do not match.');
      return;
    }

    if (newPassword.length <8) {
      setPasswordError(true);
      setPasswordErrorMessage(
        'Password must contain at least 8 characters'
      );
      return;
    }

    const passwordRegex2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex2.test(newPassword)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        'Password must including at least one letter and number.'
      );
      return;
    }

    setPasswordErrorMessage('success')

    try {
      const password = confirmPassword
      await axios.post(`/resetpassword`, {
        token,
        password,
        
      }).then((res) => {
        if (res.data.status === 'failed') {
        }
        else if (res.data.status === 'success') {
          window.location.replace('/login')
        }
      })
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '92vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
          <Box
            sx={{
              my: 35,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              margin="normal"
                required
                fullWidth
                name="newPass"
                label="Password"
                type="password"
                id="newPass"
                autoComplete="new-password"
                error={passwordError}
              />
              <TextField
              margin="normal"
                required
                fullWidth
                name="conPassword"
                label="Confirm Password"
                type="password"
                id="conPassword"
                autoComplete="confirm-password"
                error={passwordError}
              />
                <div>
                  {passwordErrorMessage}
                </div>
                
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirm
              </Button>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
