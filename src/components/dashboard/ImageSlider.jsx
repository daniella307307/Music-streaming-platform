import React from 'react';
import Slider from 'react-slick';

// Sample images for the slider
const images = [
  'https://i.pinimg.com/236x/92/ef/b2/92efb299974b41550ce029520f57d861.jpg',
  'https://i.pinimg.com/236x/3e/4f/3e4f00001628dfc314529ac4fae2bb98.jpg',
  'https://i.pinimg.com/236x/73/c5/38/73c538be1c75171afaa2ebded3b54143.jpg'
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='w-full'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='h-64'>
            <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover rounded-lg' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
