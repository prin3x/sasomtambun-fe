import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import axios from '../../config/axios';

const CarouselContainer = styled.section`
  width: 100vw;
  height: 50vh;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
`;
/* @ts-expect-error */
/* prettier-ignore */
const Image = styled.div`
  width: 100vw;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  background: url(${(props) => props.image.image_desktop_url}) center center
    no-repeat;
  @media screen and (max-width: 800px) {

    background: url(${(props) => props.image.image_tablet_url || props.image.image_desktop_url});
  }
  @media screen and (max-width: 600px) {
    background: url(${(props) => props.image.image_mobile_url || props.image.image_tablet_url || props.image.image_desktop_url});
  }
`;

export default function CarouselContent() {
  const [allCarousel, setAllCarousel] = useState();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('/homepage');
      return setAllCarousel(data);
    })();

    return;
  }, []);

  return (
    <Carousel effect='fade' autoplay>
      {allCarousel
        ? allCarousel.map((carousel) => (
            <CarouselContainer key={carousel._id} bgColor={carousel.color}>
              <a href={carousel.url} target='_blank' rel='noreferrer'>
                <Image image={carousel} alt='' />
              </a>
            </CarouselContainer>
          ))
        : null}
    </Carousel>
  );
}
