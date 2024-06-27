import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`
export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 800;
  text-align: center;
`
export const FailureDescription = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`
export const FailureButton = styled.button`
  background-color: #4f46e5;
  color: #f9f9f9;
  border: none;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  padding: 8px 22px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
