import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const GamingCard = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  width: 100%;
  min-height: 90vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;

  @media screen and (min-width: 768px) {
    margin-left: 15vw;
  }
`
export const GamingListContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  margin-top: 10vh;

  @media screen and (min-width: 768px) {
    margin-left: 15vw;
  }
`
export const GamingHeadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
`
export const GamingImageContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 12px 12px 8px;
  border: none;
  border-radius: 30px;
`
export const GamingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 800;
  margin-left: 10px;
`
export const GamingVideosListContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
`
