import { Button, ButtonGroup, Card, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <Typography variant='h4' align='left'gutterBottom>Home Page</Typography>
            
            <Paper elevation={10} sx={{textAlign:'center'}} >
                <Typography variant='h5' gutterBottom> JavaScript</Typography>
                <Card sx={{paddingBottom:'3%'}}>
                    <ButtonGroup orientation='vertical'>
                        <Button>
                            <Link to='/JavaScript'>JavaScript</Link>
                        </Button>
                        <Button>
                            <Link to='/ArrayMethods'>Array Methods</Link>
                        </Button>
                    </ButtonGroup>
                </Card>
            </Paper>
        </>
     );
}
 
export default Home;