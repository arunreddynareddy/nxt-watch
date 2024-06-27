import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import BannerCard from '../BannerCard'
import FailureView from '../FailureView'
import GamingItem from '../GamingItem'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  GamingContainer,
  GamingCard,
  LoaderContainer,
  GamingListContainer,
  GamingHeadingContainer,
  GamingImageContainer,
  GamingHeading,
  GamingVideosListContainer,
} from './styledComponent'
import {FailureCard} from '../Home/styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const gamingUpdatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiConstants.success,
        gamingVideosList: gamingUpdatedData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  getGamingListAgain = () => {
    this.getGamingList()
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
    const {gamingVideosList} = this.state
    const bgColor = isDarkTheme ? '#181818' : '#f1f1f1'
    const imageContainerColor = isDarkTheme ? '#000000' : '#e2e8f0'
    const headingColor = isDarkTheme ? '#f1f5f9' : '#000000'
    return (
      <GamingListContainer>
        <BannerCard />
        <GamingHeadingContainer bgColor={bgColor}>
          <GamingImageContainer bgColor={imageContainerColor}>
            <SiYoutubegaming size={25} color="#ff0b37" />
          </GamingImageContainer>
          <GamingHeading color={headingColor}>Gaming</GamingHeading>
        </GamingHeadingContainer>
        <GamingVideosListContainer>
          {gamingVideosList.map(eachVideo => (
            <GamingItem key={eachVideo.id} gamingVideoDetails={eachVideo} />
          ))}
        </GamingVideosListContainer>
      </GamingListContainer>
    )
  }

  renderFailureView = () => (
    <FailureCard>
      <FailureView retryApiAgain={this.getGamingListAgain} />
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
            <GamingContainer data-testid="gaming">
              <Header />
              <GamingCard bgColor={bgColor}>
                <SideBar />
                {this.renderApiStatusView(isDarkTheme)}
              </GamingCard>
            </GamingContainer>
          )
        }}
      </ThemeAndSaveContext.Consumer>
    )
  }
}

export default Gaming
