import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  LinkItem,
  VideoListItem,
  ThumbnailUrl,
  ItemDescription,
  ProfileImage,
  DescriptionContainer,
  VideoDescription,
  MobileNameCount,
  DesktopNameCount,
  ChannelName,
  Count,
} from './styledComponent'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    channelName,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

  return (
    <ThemeAndSaveContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#cccccc' : '#212121'
        const textColor = isDarkTheme ? ' #475569' : '#212121'

        return (
          <LinkItem to={`/videos/${id}`}>
            <VideoListItem>
              <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
              <ItemDescription>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <DescriptionContainer>
                  <VideoDescription color={titleColor}>
                    {title}
                  </VideoDescription>
                  <MobileNameCount color={textColor}>
                    {channelName}
                    <BsDot size={10} />
                    {viewCount} views <BsDot size={10} />
                    {formatDistanceToNow(new Date(publishedAt))}
                  </MobileNameCount>
                  <DesktopNameCount>
                    <ChannelName color={textColor}>{channelName}</ChannelName>
                    <Count color={textColor}>
                      {viewCount} views <BsDot size={10} />
                      {formatDistanceToNow(new Date(publishedAt))}
                    </Count>
                  </DesktopNameCount>
                </DescriptionContainer>
              </ItemDescription>
            </VideoListItem>
          </LinkItem>
        )
      }}
    </ThemeAndSaveContext.Consumer>
  )
}

export default VideoItem
