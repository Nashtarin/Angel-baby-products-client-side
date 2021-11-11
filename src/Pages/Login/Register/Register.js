
import { Container, Grid, TextField ,Typography,Button, CircularProgress, Alert} from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logofinal.PNG'


const Register = () => {
    const[logindata,setLoginData]=useState({})
    const{user,  isLoading,authError,registerUser}=useAuth()
    const history=useHistory()
    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata}
        newLoginData[field]=value
        setLoginData(newLoginData)
    
    }
    const handleRegisterSubmit=e=>{
        if(logindata.password!==logindata.password2){
            alert('Password did not match')
            return
        }
        console.log(logindata)
        registerUser(logindata.email,logindata.password,logindata.name,history)

        e.preventDefault()
    }
    return (
        <Container className="my-5">
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
        {!isLoading && <form onSubmit={handleRegisterSubmit}>
           <Typography style={{color:'purple'}}variant="h4" gutterBottom>Register</Typography>
            <TextField  sx={{ width: '75%', m: 1 }}
           
            name="name" 
            onBlur={handleOnBlur}
            label="Name" 
            variant="standard" />
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
            <TextField  sx={{ width: '75%', m: 1 }}
      
            name="password2"
            type="password"
            onBlur={handleOnBlur}
            label="Re-enter Password" 
            variant="standard" />
             <Button sx={{ width: '75%', m: 1 }} style={{backgroundColor:"hotpink",color:'purple'}} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button style={{color:'magenta'}} variant="text">Already Registered? Please Login</Button>
                        </NavLink>

           </form>}
           {isLoading && <CircularProgress/>}
           {user?.email && <Alert severity="success">User Created successfully!</Alert>}
           {authError && <Alert severity="error">{authError}</Alert>}
          

            </Grid>
            <Grid item xs={12} md={6}>
                <img src={logo} alt="" />

            </Grid>
            </Grid>

        </Container>
    );
};

export default Register;
