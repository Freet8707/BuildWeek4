import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const Carousel = () => {
     const items = [
    {
      src: 'https://medcabinet4.netlify.app/images/canna01_.jpg',
      altText: 'Weed 1',
      caption: "OUR CABINET HAS IT ALL Find a strain that suits your perfect mood and favorite flavor. Browse all that the cannabis industry has to offer",
      header: 'Sour Diesal',
      key: '1'
    },
    {
      src: 'https://medcabinet4.netlify.app/images/injar02.jpg',
      altText: 'AK-47',
      caption: 'FILL UP YOUR CABINET FOR LATER',
      header: 'AK 47',
      key: '2'
    },
    {
      src: 'https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      altText: 'OG',
      caption: "Sometime's it takes Sativa",
      header: 'OG',
      key: '3'
    }
  ];
  const thisExample = () => <UncontrolledCarousel items={items} />;
  return (
      <div>
  {thisExample()}
  </div>
  )
}
export default Carousel;