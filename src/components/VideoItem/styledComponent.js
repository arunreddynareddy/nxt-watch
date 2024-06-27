import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 20px 0;

  @media screen and (min-width: 576px) {
    margin: 20px 20px;
  }
`
export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
`
export const ThumbnailUrl = styled.img`
  width: 100%;
`
export const ItemDescription = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  padding: 5px 15px;
  @media screen and (min-width: 576px) {
    padding: 0;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`
export const VideoDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`
export const MobileNameCount = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 10px 0;

  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const DesktopNameCount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start
    align-items: flex-start;
    width: 100%;
    margin: 0;

    @media screen and (max-width: 577px) {
    display: none;
  }

`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 10px 0;
`
export const Count = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`
