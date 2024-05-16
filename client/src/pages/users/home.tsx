import { Box } from "@mui/material";
import Sidenav from "../../components/users/Sidenav";
import NavBar from "../../components/users/NavBar";
import LiveChart from "../../components/stocks/LiveChart";

function Home(): JSX.Element{
  return (
    <>
    <NavBar/>
    <Box sx={{display:"flex"}}>
        <Sidenav/>
        <Box component={"main"} sx={{flexGrow:1, p:3}}>
        <br/>
        <br/>
            <LiveChart symbol={'IBM'}/>
        </Box>
    </Box>
    </>
  );
};

export default Home;
