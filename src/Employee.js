import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  `;

const EmployeeName = styled.div`
  font-size: "24px"; 
  color: "#452E76";
  `;

const EmployeeRole = styled.div`
  font-size: "16px"; 
  color: "#42C3DE"; 
  padding-top: "10px";
  `;

const EmployeeCity = styled.div`
  fontSize: "16px"; 
  color: "#959595"; 
  padding-top: "5px";
  `;



/**
 * Return data source for employess data as an array
 */
export const employeeTable = [
    {id: '0', name: 'Beata Sołtysińska', role: 'Founder', city: 'Warsaw'},
    {id: '1', name: 'Włas Chorowiec', role: 'Founder', city: 'Warsaw'},
    {id: '2', name: 'Edyta Leśniewska', role: 'Head of Human Resources', city: 'Warsaw'},
    {id: '3', name: 'Joanna Pawluk', role: 'Cheif Growth Officer', city: 'London'},
    {id: '4', name: 'David Saunders', role: 'Business Development', city: 'London'},
  ];

/**
 * Functional component for rendering employee widget
 */
export function EmployeeCart(props) {

  const { data, ...otherProps } = props
  const {id, name, role, city } = data;

  return (
    <Wrapper {...otherProps}>
      <div><img src={`src/images/f_${id}.png`} /></div>
      <EmployeeName>{name}</EmployeeName>
      <EmployeeRole>{role}</EmployeeRole>
      <EmployeeCity>{city}</EmployeeCity>
    </Wrapper>
  )
}