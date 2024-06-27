import styled from 'styled-components'

export const SideBarContainer = styled.div`
  position: fixed;
  top: 10vh;
  background-color: ${props => props.bgColor};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 15vw;
  height: 90vh;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  width: 100%;
`

export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const ContactImagesContainer = styled.div`
    display: flex;
    justify-content: flex-start
    align-items: center;
    margin-top: 6px;
    margin-bottom: 2px;
`
export const ContactImage = styled.img`
  width: 25px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
`
