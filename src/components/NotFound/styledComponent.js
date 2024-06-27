import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const NotFoundCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
`
export const NotFoundItemsContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 10vh;
    margin-left: 15vw;
  }
`
export const NotFoundImage = styled.img`
  width: 400px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 800;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NotFoundDescription = styled.p`
  color: #909090;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
`
