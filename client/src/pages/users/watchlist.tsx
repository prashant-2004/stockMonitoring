import NavBar from "../../components/users/NavBar";
import Sidenav from "../../components/users/Sidenav";
import { Box } from "@mui/material";

function Watchlist(): JSX.Element {

    return (
        <>
        <NavBar/>
            <Box sx={{display:"flex"}}>
                <Sidenav/>
                <Box component={"main"} sx={{flexGrow:1, p:3}}>
                   <br/><br/>
                    <h3>YOUR WATCHLIST</h3>
                </Box>
            </Box>
        </>
    );
  };
  
  export default Watchlist;
  