import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingLinkItem = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 576px) {
    margin: 20px;
  }
`

export const TrendingItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`
export const TrendingThumbnailUrl = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 300px;
  }
`
export const TrendingDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`
export const TrendingProfileImageUrl = styled.img`
  width: 40px;
  margin: 0;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 10px;
`
export const TrendingTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
`
export const TrendingNameCountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TrendingChannelName = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 0;
`
export const BsDotContainer = styled.div`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingCountTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`
export const TrendingCount = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`
export const TrendingTime = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`
