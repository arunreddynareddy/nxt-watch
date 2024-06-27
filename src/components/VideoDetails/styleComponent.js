import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const DetailsCard = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 90vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 10vh;

  @media screen and (min-width: 768px) {
    margin-left: 15vw;
  }
`

export const VideoDetailsContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 90vh;

  @media screen and (min-width: 768px) {
    padding: 10px;
    margin-left: 15vw;
    margin-top: 10vh;
  }
`
export const VideoTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin: 20px 10px;
`
export const CountSaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const CountTime = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
`
export const LikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

export const LikeButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  margin: 10px;
  padding: 0;
`
export const DislikeButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
`
export const SaveButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
  margin-right: 10px;
`
export const SpanElement = styled.span`
  color: inherit;
  margin-left: 5px;
`

export const HrLine = styled.hr`
  width: 100%;
  color: #64748b;
  border: 1px solid #64748b;
  margin: 10px;
`
export const ChannelProfileDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 45px;
`
export const ChannelDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`
export const SubscriptionCount = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`
export const MobileChannelDescription = styled.p`
  display: none;
  color: #909090;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const DesktopChannelDescription = styled.p`
  color: #909090;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
