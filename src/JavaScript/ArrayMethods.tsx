import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const ArrayMethods = () => {
    const numbers = [1, 2, 3];
    numbers.forEach(number =>
        console.log(number))

    return ( 
    <>
    <Typography variant="h5" component="h2" gutterBottom>Array Methods</Typography> 
     <Box>
        <Paper elevation={7}>
            <Typography variant="h6" component="h3">ForEach</Typography>
            <div className='code'>
                <code>{'const numbers = [1, 2, 3];'}</code>
                <code>{'numbers.forEach(number =>'}</code>
                <code>{'console.log(number))'}    </code>
            </div>
        </Paper>
     </Box>
        </>
    );
}

 
export default ArrayMethods;