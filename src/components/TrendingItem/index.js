import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  TrendingLinkItem,
  TrendingItemContainer,
  TrendingThumbnailUrl,
  TrendingDescriptionContainer,
  TrendingProfileImageUrl,
  TrendingDescription,
  TrendingTitle,
  TrendingNameCountContainer,
  TrendingChannelName,
  BsDotContainer,
  TrendingCountTimeContainer,
  TrendingCount,
  TrendingTime,
} from './styledComponent'

const TrendingItem = props => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const titleColor = isDarkTheme ? '#f1f5f9' : '#231f20'

      const {trendingVideoDetails} = props
      const {
        channelName,
        profileImageUrl,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = trendingVideoDetails

      return (
        <TrendingLinkItem to={`/videos/${id}`}>
          <TrendingItemContainer>
            <TrendingThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
            <TrendingDescriptionContainer>
              <TrendingProfileImageUrl
                src={profileImageUrl}
                alt={channelName}
              />
              <TrendingDescription>
                <TrendingTitle color={titleColor}>{title}</TrendingTitle>
                <TrendingNameCountContainer>
                  <TrendingChannelName>{channelName}</TrendingChannelName>
                  <BsDotContainer>
                    <BsDot size={10} />
                  </BsDotContainer>
                  <TrendingCountTimeContainer>
                    <TrendingCount>{viewCount} views</TrendingCount>
                    <BsDot size={10} />
                    <TrendingTime>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </TrendingTime>
                  </TrendingCountTimeContainer>
                </TrendingNameCountContainer>
              </TrendingDescription>
            </TrendingDescriptionContainer>
          </TrendingItemContainer>
        </TrendingLinkItem>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default TrendingItem
