import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const TrendingCard = styled.div`
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
export const TrendingListContainer = styled.div`
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
export const TrendingHeadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
`
export const TrendingImageContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 8px 10px;
  border: none;
  border-radius: 30px;
`
export const TrendingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 800;
  margin-left: 10px;
`
export const TrendingVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
`
