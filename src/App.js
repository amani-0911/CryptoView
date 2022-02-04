import {BrowserRouter, Route} from "react-router-dom"

import './App.css';
import Header from "./Components/Header";
import CoinPage from "./page/CoinPage";
import HomePage from "./page/HomePage";
import {makeStyles} from "@material-ui/core";




function App() {
  
const useStyles=makeStyles(()=>({
   App:{
    backgroundColor:"#1c2237",
    color:"white",
    minHeight:"100vh",
   }
}));
const clases=useStyles();

return (
  <BrowserRouter>
  <div className={clases.App}>
    <Header />
    <Route path="/" exact component={HomePage} />
    <Route path="/coins/:id" component={CoinPage} />
  </div>
  </BrowserRouter>

)
}

export default App;
