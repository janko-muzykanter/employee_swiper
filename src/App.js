import React, { useRef } from 'react'
import styled from 'styled-components';

// Import custom resources
import {employeeTable, EmployeeCart} from 'Employee.js'
import {EmployeeSwiper} from 'EmployeeSwiper.js'

// Import Swiper objects
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

// Style some components with styled-components
const EmployeeContainer = styled.div`
  display: flex;
  margin-top: 50px;
  `;

const Title = styled.div`
  font-size: 90px;
  color: #452E76;
  margin-bottom: 40px;
  `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin 0 auto;
  `;

const SwiperWrapper = styled.div`
  display: block;
  width: 100%;
  `;

export const App = () => {

  const swiperRef = useRef();

  // Render the main App 
  return (
    <Container>
      <Title>Meet our team</Title>
      <SwiperWrapper>
        <EmployeeSwiper
          data={employeeTable}
          onSwiper={swiper => swiperRef.current = swiper}
        />
      </SwiperWrapper>
      <EmployeeContainer>
        {employeeTable.map((k, i) => {
          return (
            <EmployeeCart
              key={k.id}
              data={k}
              onClick={() => swiperRef.current.slideTo(i)}
            />
          )
        })
        }
      </EmployeeContainer>
    </Container>
  );
}