import React from 'react';
import {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from '@material-ui/core';

function ProductCard({ title, price, imgUrl, description }) {
  return (
    <Card>
      <CardHeader title={title} subheader={`$${price}`} />
      <CardMedia style={{ height: '200px' }} image={imgUrl} />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' color='primary'>
          ADD TO CART
        </Button>
        <Button size='small' variant='outlined' color='primary'>
          DETAILS
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
