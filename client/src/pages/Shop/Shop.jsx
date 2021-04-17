import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import useStyles from './styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

const Shop = () => {
  const classes = useStyles();
  const breakPoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  const [allShopItems, setAllShopItems] = useState([]);
  useEffect(() => {
    axios.get('/api/product/').then((res) => {
      setAllShopItems(res.data);
    });
  }, []);

  return (
    <Masonry
      breakpointCols={breakPoints}
      className={classes.myMasonryGrid}
      columnClassName={classes.myMasonryGridColumn}>
      {allShopItems
        ? allShopItems.map((product, key) => {
            return (
              <div key={key} className={classes.myMasonryGridColumnDiv}>
                <ProductCard
                  title={product.name}
                  imgUrl={product.imageUrl}
                  price={product.price}
                  description={product.description}
                />
              </div>
            );
          })
        : null}
    </Masonry>
  );
};

export default Shop;
