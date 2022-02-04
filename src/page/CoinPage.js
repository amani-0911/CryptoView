import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import {numberWithCommas} from "../Components/banner/Carousel";
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import CoinInfo from '../Components/CoinInfo';
import {SingleCoin} from "../config/api";
import {CryptoState} from "../CryptoContext";
import ReactHtmlParser from "react-html-parser";


function CoinPage() {
  const {id}=useParams();
  const {currency,symbol}=CryptoState();
  const [coin,setCoin]=useState();
  const fetchCoin=async ()=>{
  const {data}=await axios.get(SingleCoin(id));
  setCoin(data);
  }
  console.log(coin);
  useEffect(()=>{
   fetchCoin();
  },[]);
 const useStyles=makeStyles((theme)=>({
  container:{
    display:"flex",
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
      alignItems: "center",
    },

  },
  sidebar:{
    width:"30%",
    [theme.breakpoints.down("md")]:{
      width: "100%",
    },
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:25,
    borderRight:"2px solid grey",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  description: {
    width: "100%",
    fontFamily: "Montserrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
  },
  marketData:{
    alignSelf:"start",
    padding:25,
    paddingTop:10,
    width:"100%",
    [theme.breakpoints.down("md")]:{
      display:"flex",
      justifyContent:"space-around",
    },
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
      alignItems:"cenetr",
    },
    [theme.breakpoints.down("xs")]:{
    
      alignItems:"start",
    },
  }
 }));
 const calsses=useStyles();
if(!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return <div className={calsses.container}>
   <div className={calsses.sidebar}>
     <img 
     src={coin?.image.large}
     alt={coin?.name}
     height="200"
     style={{marginBottom:20}}
     />
     <Typography variant="h3" className={calsses.heading}>
     {coin?.name}
     
     </Typography>
     <Typography variant="subtitle1" className={calsses.description}>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={calsses.marketData}>
        <span style={{display:"flex"}}>
        <Typography variant="h5" className={calsses.heading}>
        Rank:
     </Typography>
     &nbsp; &nbsp;
     <Typography variant="h5"  style={{
                fontFamily: "Montserrat",
              }}>
     {numberWithCommas(
     coin?.market_cap_rank)}
     </Typography>
        </span>
        <span style={{ display: "flex" }}>
            <Typography variant="h5" className={calsses.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={calsses.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
   </div>
  <CoinInfo
   coin={coin} />
  </div>;
}

export default CoinPage;
