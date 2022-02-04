import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const Header = () => {
    const useStyles=makeStyles(()=>({
        title:{
            flex:1,
         color:"#fff",
         fontFamily:"Montserrat",
         fontWeight:"bold",
         cursor:"pointer",
         fontSize:"2rem",
        }
     }));
     const clases=useStyles();
     const history=useHistory();

  const {currency,setCurrency}=CryptoState();





     const darkTheme=createTheme({
        
        palette:{
             primary:{
                 main:"#fff",
             },
             type: "dark",
         },
     });
  return (
      <ThemeProvider theme={darkTheme}>
  <AppBar color='transparent' position='static'>
    <Container>
        <Toolbar>
            <Typography variant='h6' onClick={()=>history.push("/")} className={clases.title}>
                CryptoView
            </Typography > 
            <Select variant='outlined' style={{
                width:100,
                height:40,
                marginRight:15
            }}
            value={currency}
            onChange={e=>setCurrency(e.target.value)}
            >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
        </Toolbar>
    </Container>
  </AppBar>

  </ThemeProvider>
  );
};

export default Header;
