import React from 'react';
import './nav.css';
import { Carousel } from 'antd';
const contentStyle = {
  margin:0,
  height: '70vh',
  color: '#fff',
  // lineHeight: '70vh',
  textAlign: 'center',
  background: '#364d79',
  
};
const Carousels = () => (
  <div className='Carousel'>
    
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img className='imgcar ' src='https://cdn.shopify.com/s/files/1/0535/4871/2136/t/10/assets/homepagebanner21_yYFT.png?v=1677062579837'alt='' width="100%" height="100%" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='imgcar ' src='https://images.pexels.com/photos/10401534/pexels-photo-10401534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'alt='' width="100%" height="100%" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='imgcar ' src='https://images.pexels.com/photos/5432294/pexels-photo-5432294.jpeg'alt='' width="100%" height="100%" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='imgcar ' src='https://www.scaffoldingsolutions.com/wp-content/uploads/2021/07/Suspended-Scaffolding.jpg'alt='' width="100%" height="100%" /></h3>
    </div>
  </Carousel>
  </div>
);
export default Carousels;