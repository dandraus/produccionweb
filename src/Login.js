import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dashroute
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    
    setError(null);
    setLoading(true);
    axios.post('http://dashroute.test/api/auth/login', { email : username.value, password: password.value, remember_me:true}).then(response => {
      setLoading(false);
      console.log(response.data.access_token);
      
      console.log(response.data);

      setUserSession(response.data.access_token,  username.value);
      if (username.value === "daniel@vanana.com"){
        props.history.push('/home2');
      }else{
      props.history.push('/home');}
    }).catch(error => {
      //  alert(error);
      setLoading(false);
      if (error.response.status === 401) {setError(error.response.data.message);
     alert ("Usuario o contraseña incorrecta")
    }else
{alert("Campos mal diligenciados")}

      setError(error.response);
    });
  }
  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            autoFocus
            {...username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password" {...password}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Button
            onClick={handleLogin} 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Loguear
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste  password?
              </Link>
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"No tienes una cuenta? Registrate"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
   
  
  
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}


export default Login;