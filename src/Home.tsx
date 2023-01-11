import { Button, ButtonGroup, Card, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <Typography    
                variant='h6' 
                align='left' 
                component="h1"
                gutterBottom>   
                Home Page
            </Typography>
            <hr />
            <Typography 
                variant='h5' 
                gutterBottom> 
                JavaScript
            </Typography>

                <li>
                    <Link to='/JavaScript'>JavaScript</Link>
                </li>
                <li>
                    <Link to='/ArrayMethods'>Array Methods</Link>
                </li>   
        </>
     );
}
 
export default Home;