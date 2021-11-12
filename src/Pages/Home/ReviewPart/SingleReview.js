import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Grid, Paper, Typography } from '@mui/material';


const SingleReview = (props) => {
    const {name,reviews,rating,img}=props.reviews
    
    return (
        <div className="col">
          
          <Paper style={{backgroundColor:'peachpuff',border:'1px solid hotpink',height:"430px"}}elevation={1} sx={{ py: 2 }}>
                    <img style={{height:'200px',width:"200px"}} src={img} alt="" />
                    <Typography sx={{ color: 'blueviolet', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography  gutterBottom component="div">
                       <i> "{reviews}"</i>
                    </Typography>
                   
                    <Stack style={{marginLeft:"25px"}} spacing={0}>
                        <Typography style={{textAlign:'left',color:'purple',fontWeight:'800'}}>Rating</Typography>
                        <Rating  name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </Stack>

                </Paper>
           

        </div>
    );
};

export default SingleReview;

