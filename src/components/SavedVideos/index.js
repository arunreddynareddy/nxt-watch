import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import BannerCard from '../BannerCard'
import TrendingItem from '../TrendingItem'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  TrendingContainer,
  TrendingCard,
  TrendingListContainer,
  TrendingHeadingContainer,
  TrendingImageContainer,
  TrendingHeading,
  TrendingVideosListContainer,
} from '../Trending/styleComponent'

import {
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styleComponent'

const SavedVideos = () => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headingBgColor = isDarkTheme ? '#181818' : '#f1f1f1'
      const imageContainerColor = isDarkTheme ? '#000000' : '#e2e8f0'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#000000'
      const noSavedHeadingColor = isDarkTheme ? '#f1f1f1' : '#000000'

      const renderNoSavedVideosView = () => (
        <NoSavedVideosContainer>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
            alt="no saved videos"
          />
          <NoSavedVideosHeading color={noSavedHeadingColor}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosDescription>
            You can save your videos while watching them
          </NoSavedVideosDescription>
        </NoSavedVideosContainer>
      )

      const renderSavedVideosView = () =>
        savedVideos.length > 0 ? (
          <TrendingListContainer>
            <BannerCard />
            <TrendingHeadingContainer bgColor={headingBgColor}>
              <TrendingImageContainer bgColor={imageContainerColor}>
                <HiFire size={30} color="#ff0b37" />
              </TrendingImageContainer>
              <TrendingHeading color={headingColor}>
                Saved Videos
              </TrendingHeading>
            </TrendingHeadingContainer>
            <TrendingVideosListContainer>
              {savedVideos.map(eachVideo => (
                <TrendingItem
                  key={eachVideo.id}
                  trendingVideoDetails={eachVideo}
                />
              ))}
            </TrendingVideosListContainer>
          </TrendingListContainer>
        ) : (
          renderNoSavedVideosView()
        )

      return (
        <TrendingContainer>
          <Header />
          <TrendingCard data-testid="savedVideos" bgColor={bgColor}>
            <SideBar />
            {renderSavedVideosView()}
          </TrendingCard>
        </TrendingContainer>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default SavedVideos
