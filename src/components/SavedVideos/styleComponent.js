import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 10vh;

  @media screen and (min-width: 768px) {
    margin-left: 15vw;
  }
`
export const NoSavedVideosImage = styled.img`
  width: 400px;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 800;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const NoSavedVideosDescription = styled.p`
  color: #909090;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
