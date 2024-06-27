import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RouteListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
export const LinkItem = styled(Link)`
  background-color: ${props => props.bgColor};
  text-decoration: none;
  margin: 0;
  width: 100%;
`
export const RouteListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-left: 20px;
`
export const ListName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-left: 20px;
`
