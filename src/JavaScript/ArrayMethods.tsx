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
            <Typography variant="h6" component="h3" gutterBottom>Array.forEach()</Typography>
            <Typography variant='body1' gutterBottom>
                -Executes a function once for each array element
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Parameters: (element, index, array )
            </Typography>
            <Typography variant='body1' gutterBottom>
                -Always returns undefined
            </Typography>
            <Typography variant='body1' gutterBottom>
                -It is not chainable
            </Typography>
            <Typography variant='body1'>
                Example:
            </Typography>
            <div className='code'>
                <code>{'const numbers = [1, 2, 3];'}</code>
                <code>{'numbers.forEach(number =>'}</code>
                <code>{'console.log(number))'}    </code>
            </div>
            <p>Output:<code>1 2 3</code></p>
           
        </Paper>
     </Box>
        </>
    );
}

 
export default ArrayMethods;