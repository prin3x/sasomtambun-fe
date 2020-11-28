import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';

const CarouselContainer = styled.section`
  width: 100vw;
  height: 50vh;
  background: #96d9c9;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80vw;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
`;

export default function CarouselContent() {
  return (
    <Carousel effect='fade'>
      <CarouselContainer>
        <Image src='assets/img/hero.png' alt='' />
      </CarouselContainer>
      <CarouselContainer>
        <Image src='https://via.placeholder.com/1920x469' alt='' />
      </CarouselContainer>
      <CarouselContainer>
        <Image src='https://via.placeholder.com/1920x469' alt='' />
      </CarouselContainer>
      <CarouselContainer>
        <Image src='https://via.placeholder.com/1920x469' alt='' />
      </CarouselContainer>
    </Carousel>
  );
}
