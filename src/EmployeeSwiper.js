import React from 'react'
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

const Wrapper = styled.div`
  margin: auto;
 `;

const SwiperSlideActiveCentered = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  color: #452E76;
  `;

const SwiperSlideActiveCenteredRole = styled.div`
  font-size: x-large; 
  `;

const SwiperSlideActiveCenteredName = styled.div`
  font-size: xx-large; 
  font-weight: bold;
  `;

export function EmployeeSwiper(props) {

  const slides = [];

  // Create slides content and store them in the array
  props.data.map(k => {
    const { id, name, role, city } = k;
    slides.push(
      <SwiperSlide key={`slide-${id}`}>
        <img
          src={`/src/images/business_card.jpg`}
          alt={`Slide ${id}`}
          style={{width: "100%", height: "100%"}}
        />
        <SwiperSlideActiveCentered>
          <SwiperSlideActiveCenteredRole>
            {role}
          </SwiperSlideActiveCenteredRole>
          <SwiperSlideActiveCenteredName>
            {name}
          </SwiperSlideActiveCenteredName>
        </SwiperSlideActiveCentered>
      </SwiperSlide>
    )
  });

  // Render the Swiper component
  return (
    <Wrapper>
      <Swiper
        id="main"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={props.onSwiper}
      >
        {slides}
      </Swiper>
    </Wrapper>
  );
}