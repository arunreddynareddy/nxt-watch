import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import BannerCard from '../BannerCard'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  HomeContainer,
  HomeCard,
  BannerListContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  VideosListContainer,
  FailureCard,
  NoVideosCard,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  NoVideosButton,
} from './styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const videosListUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videosListUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({apiStatus: apiConstants.success, videosList: updatedData})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosList()
  }

  onClickRetryApi = () => {
    this.getVideosList()
  }

  getVideosListAgain = () => {
    this.getVideosList()
  }

  renderSearchInputView = isDarkTheme => {
    const bgColor = isDarkTheme ? '#181818' : '#ffffff'
    const buttonBgColor = isDarkTheme ? '#231f20' : '#ebebeb'
    const textColor = isDarkTheme ? '#f1f5f9' : '#181818'

    const {searchInput} = this.state
    return (
      <SearchInputContainer>
        <SearchInput
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          bgColor={bgColor}
          color={textColor}
        />
        <SearchButton
          data-testid="searchButton"
          type="button"
          onClick={this.onClickSearch}
          bgColor={buttonBgColor}
        >
          <IoIosSearch size={12} color="#606060" />{' '}
        </SearchButton>
      </SearchInputContainer>
    )
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

  renderNoVideosView = isDarkTheme => {
    const headingColor = isDarkTheme ? '#f1f1f1' : '#231f20'

    return (
      <NoVideosCard>
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoVideosHeading color={headingColor}>
            No Search results found
          </NoVideosHeading>
          <NoVideosDescription>
            Try different key words or remove search filter
          </NoVideosDescription>
          <NoVideosButton type="button" onClick={this.onClickRetryApi}>
            Retry
          </NoVideosButton>
        </NoVideosContainer>
      </NoVideosCard>
    )
  }

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state
    return videosList.length === 0 ? (
      this.renderNoVideosView(isDarkTheme)
    ) : (
      <VideosListContainer>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListContainer>
    )
  }

  renderFailureView = () => (
    <FailureCard>
      <FailureView retryApiAgain={this.getVideosListAgain} />
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
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <HomeContainer data-testid="home">
              <Header />
              <HomeCard>
                <SideBar />
                <BannerListContainer bgColor={bgColor}>
                  <BannerCard />
                  {this.renderSearchInputView(isDarkTheme)}
                  {this.renderApiStatusView(isDarkTheme)}
                </BannerListContainer>
              </HomeCard>
            </HomeContainer>
          )
        }}
      </ThemeAndSaveContext.Consumer>
    )
  }
}

export default Home
