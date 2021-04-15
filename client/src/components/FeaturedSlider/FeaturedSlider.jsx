import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';
import responsive from './responsive';

class FeaturedSlider extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    featured: [],
  };

  componentDidMount() {
    axios
      .get('/api/product/')
      .then((res) => {
        this.setState({
          featured: res.data.map((item) => ({
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.imageUrl,
            desc: item.description,
          })),
        });
      })
      .catch();
  }

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <Typography variant='h3' align='center' gutterBottom>
          Featured Items
        </Typography>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='container-padding-bottom'
          removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
          deviceType={this.props.deviceType}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'>
          {this.state.featured.map((product, index) => {
            return (
              <div style={{ paddingBottom: '30px' }} key={index}>
                <Card raised>
                  <Container>
                    <CardHeader
                      avatar={<Avatar src={product.image} variant='square' />}
                      title={product.name}
                      subheader={`$${product.price}`}
                    />
                    <CardContent>
                      <Typography noWrap>{product.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href={`/product/${product.sku}`}
                        color='primary'
                        variant='contained'>
                        ${product.price}
                      </Button>
                    </CardActions>
                  </Container>
                </Card>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default FeaturedSlider;
