import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const HomeCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
`
export const BannerListContainer = styled.div`
  background-color: ${props => props.bgColor};
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
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 100%;
  flex-shrink: 1;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #606060;
  outline: none;
  padding: 0 10px;
  width: 100%;
  height: 30px;
`

export const SearchButton = styled.button`
  background-color: ${props => props.bgColor};
  padding: 2px 25px 0;
  border: 1px solid #606060;
  cursor: pointer;
  outline: none;
  height: 30px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const VideosListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin: 0;
`
export const FailureCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`
export const NoVideosCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`
export const NoVideosImage = styled.img`
  width: 300px;
`

export const NoVideosHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`
export const NoVideosDescription = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`
export const NoVideosButton = styled.button`
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
