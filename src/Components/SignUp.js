import React,{ useEffect ,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';


export default function SignUp() {
  const [email,setEmail] = useState();
  const [password,setPassowrd] = useState();
    const[current,setCurrent] = useState();
    const[error,setError] =React.useState();
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (current) {
          setCurrent(user.email)
          console.log({
            userem: user.email,
          })
        }
        else {
          setCurrent(null)
          console.log(current)
        }
      })
    }, [])
    
    const handlerSignUp = () => {
      if (email && password) {
        setEmail(email);
        setPassowrd(password);
        setError('');
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
          console.log(user)
          
        }).then((err) => {
          console.log(err)
        })
        
      }
      else{
        return setError('please check your details')
      }
      
    }
    const handlerSignIn = () => {
      if (email && password) {
        setEmail(email);
        setPassowrd(password);
        signInWithEmailAndPassword(auth, email, password).then((user) => {
          console.log(user)
        }).then((err) => {
          console.log(err)
        }) 
        Navigate('/Home');  
  
      }
      else {
      return setError('invalid Email or Password')
    }
    }
    
  return (
    <Box
      component="form"
      sx={{
       width:'500px',
       height:'300px',
       position:'relative',
       margin:'0 auto',
       backgroundColor:'#dbd2e1',
       padding: '50px',
       borderRadius: 4,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h2>Wel-Come </h2>
        <TextField 
          required
          id="outlined-required"
          label="Email" 
          onChange={(e) => { setEmail(e.target.value) }} 
          value={email}
          
        /> <br/> <br/>
        
        <TextField
        required
          id="outlined-Required"
          label="Password"
          type="password"
          onChange={(e) => {setPassowrd(e.target.value) }}
          value={password}
          autoComplete="current-password"
        />
        
      </div>
      <br/>
      <Button variant="outlined" style={{backgroundColor:'white',color:'blue'}} onClick={handlerSignUp} >SignUp</Button> &nbsp;
      <Button variant="outlined" style={{backgroundColor:'white',color:'blue'}} onClick={handlerSignIn} >SignIn</Button>

    </Box>
  );
}