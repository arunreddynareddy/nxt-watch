import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`
export const BannerDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const BannerLogo = styled.img`
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const BannerDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`
export const BannerButton = styled.button`
  background-color: transparent;
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #475569;
  padding: 8px 12px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`
