
import { Container, Grid, TextField ,Typography,Button, CircularProgress, Alert} from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logofinal.PNG'


const Register = () => {
    const[logindata,setLoginData]=useState({})
    const {user, isLoading,authError,  loginUser}=useAuth()
    const location = useLocation();
    const history = useHistory();
    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata}
        newLoginData[field]=value
        setLoginData(newLoginData)
    
    }
    const handleLoginSubmit=e=>{
       
        console.log(logindata)
        loginUser(logindata.email, logindata.password, location, history);

        e.preventDefault()
    }
    return (
        <Container className="my-5">
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
           <form onSubmit={handleLoginSubmit}>
           
            <TextField  sx={{ width: '75%', m: 1 }}
            
            name="email" 
            type="email"
            onBlur={handleOnBlur}
            label="Email" 
            variant="standard" />
            <TextField  sx={{ width: '75%', m: 1 }}
           
            name="password"
            type='password'
            onBlur={handleOnBlur}
            label="Password" 
            variant="standard" />
            
      
         
             <Button sx={{ width: '75%', m: 1 }} style={{backgroundColor:"hotpink",color:'purple'}} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button style={{color:'magenta'}} variant="text">Are you new user?Please Register</Button>
                        </NavLink>

           </form>
           {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        {console.log(user)}

            </Grid>
            <Grid item xs={12} md={6}>
                <img src={logo} alt="" />

            </Grid>
            </Grid>

        </Container>
    );
};

export default Register;