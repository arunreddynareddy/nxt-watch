import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  GamingLinkItem,
  GamingItemContainer,
  GamingThumbnailUrl,
  GamingTitle,
  GamingCount,
} from './styledComponent'

const Gaming = props => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const titleColor = isDarkTheme ? '#f1f5f9' : '#231f20'
      const countColor = isDarkTheme ? '#94a3b8' : '#909090'

      const {gamingVideoDetails} = props
      const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails

      return (
        <GamingLinkItem to={`/videos/${id}`}>
          <GamingItemContainer>
            <GamingThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
            <GamingTitle color={titleColor}>{title}</GamingTitle>
            <GamingCount color={countColor}>
              {viewCount} Watching Worldwide
            </GamingCount>
          </GamingItemContainer>
        </GamingLinkItem>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default Gaming
