import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingLinkItem = styled(Link)`
  text-decoration: none;
  width: 120px;
  margin: 7px;

  @media screen and (min-width: 576px) {
    width: 150px;
    margin: 10px;
  }
`
export const GamingItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const GamingThumbnailUrl = styled.img`
  width: 100%;
  border: none;
  border-radius: 10px;

  @media screen and (min-width: 576px) {
    height: 200px;
  }
`
export const GamingTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 0;
`

export const GamingCount = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
`
