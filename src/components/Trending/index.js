import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import BannerCard from '../BannerCard'
import FailureView from '../FailureView'
import TrendingItem from '../TrendingItem'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  TrendingContainer,
  TrendingCard,
  LoaderContainer,
  TrendingListContainer,
  TrendingHeadingContainer,
  TrendingImageContainer,
  TrendingHeading,
  TrendingVideosListContainer,
} from './styleComponent'
import {FailureCard} from '../Home/styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const trendingData = await response.json()
      const trendingUpdatedData = trendingData.videos.map(eachVideo => ({
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiConstants.success,
        trendingVideosList: trendingUpdatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  getTrendingListAgain = () => {
    this.getTrendingList()
  }

  renderLoaderView = isDarkTheme => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderSuccessView = isDarkTheme => {
    const {trendingVideosList} = this.state
    const bgColor = isDarkTheme ? '#181818' : '#f1f1f1'
    const imageContainerColor = isDarkTheme ? '#000000' : '#e2e8f0'
    const headingColor = isDarkTheme ? '#f1f5f9' : '#000000'

    return (
      <TrendingListContainer>
        <BannerCard />
        <TrendingHeadingContainer bgColor={bgColor}>
          <TrendingImageContainer bgColor={imageContainerColor}>
            <HiFire size={30} color="#ff0b37" />
          </TrendingImageContainer>
          <TrendingHeading color={headingColor}>Trending</TrendingHeading>
        </TrendingHeadingContainer>
        <TrendingVideosListContainer>
          {trendingVideosList.map(eachVideo => (
            <TrendingItem key={eachVideo.id} trendingVideoDetails={eachVideo} />
          ))}
        </TrendingVideosListContainer>
      </TrendingListContainer>
    )
  }

  renderFailureView = () => (
    <FailureCard>
      <FailureView retryApiAgain={this.getTrendingListAgain} />
    </FailureCard>
  )

  renderApiStatusView = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoaderView(isDarkTheme)
      case apiConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndSaveContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <TrendingContainer data-testid="trending">
              <Header />
              <TrendingCard bgColor={bgColor}>
                <SideBar />
                {this.renderApiStatusView(isDarkTheme)}
              </TrendingCard>
            </TrendingContainer>
          )
        }}
      </ThemeAndSaveContext.Consumer>
    )
  }
}

export default Trending
