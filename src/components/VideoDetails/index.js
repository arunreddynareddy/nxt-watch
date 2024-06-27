import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  DetailsContainer,
  DetailsCard,
  VideoDetailsContainer,
  LoaderContainer,
  VideoTitle,
  CountSaveContainer,
  CountTime,
  LikeSaveContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  SpanElement,
  HrLine,
  ChannelProfileDescriptionContainer,
  ChannelImage,
  ChannelDescriptionContainer,
  ChannelName,
  SubscriptionCount,
  MobileChannelDescription,
  DesktopChannelDescription,
} from './styleComponent'
import {FailureCard} from '../Home/styledComponent'

import Header from '../Header'
import SideBar from '../SideBar'
import BannerCard from '../BannerCard'
import FailureView from '../FailureView'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getUpdatedData = videoDetails => ({
    id: videoDetails.id,
    subscriberCount: videoDetails.channel.subscriber_count,
    channelName: videoDetails.channel.name,
    profileImageUrl: videoDetails.channel.profile_image_url,
    description: videoDetails.description,
    publishedAt: videoDetails.published_at,
    thumbnailUrl: videoDetails.thumbnail_url,
    title: videoDetails.title,
    videoUrl: videoDetails.video_url,
    viewCount: videoDetails.view_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoDetailsUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoDetailsUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedVideoData = this.getUpdatedData(data.video_details)
      this.setState({
        apiStatus: apiConstants.success,
        videoDetails: updatedVideoData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  getVideoDetailsAgain = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoaderView = () => (
    <ThemeAndSaveContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeAndSaveContext.Consumer>
  )

  renderSuccessView = () => (
    <ThemeAndSaveContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const headingColor = isDarkTheme ? '#f4f4f4' : '#212121'

        const {videoDetails, isLiked, isDisliked} = this.state
        const {
          channelName,
          profileImageUrl,
          subscriberCount,
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoDetails

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveColor = isSaved ? '#2563eb' : '#64748b'

        return (
          <VideoDetailsContainer
            data-testid="videoItemDetails"
            bgColor={bgColor}
          >
            <BannerCard />
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoTitle color={headingColor}>{title}</VideoTitle>
            <CountSaveContainer>
              <CountTime>
                {viewCount} views <BsDot size={10} />{' '}
                {formatDistanceToNow(new Date(publishedAt))}
              </CountTime>
              <LikeSaveContainer>
                <LikeButton
                  type="button"
                  isLiked={isLiked}
                  onClick={this.onClickLike}
                >
                  <BiLike size={20} /> <SpanElement>Like</SpanElement>
                </LikeButton>
                <DislikeButton
                  type="button"
                  isDisliked={isDisliked}
                  onClick={this.onClickDislike}
                >
                  <BiDislike size={20} /> <SpanElement>Dislike</SpanElement>
                </DislikeButton>
                <SaveButton
                  type="button"
                  color={saveColor}
                  onClick={onClickSave}
                >
                  <BiListPlus size={20} />{' '}
                  <SpanElement>{isSaved ? 'Saved' : 'Save'}</SpanElement>
                </SaveButton>
              </LikeSaveContainer>
            </CountSaveContainer>
            <HrLine />
            <ChannelProfileDescriptionContainer>
              <ChannelImage src={profileImageUrl} alt={channelName} />
              <ChannelDescriptionContainer>
                <ChannelName color={headingColor}>{channelName}</ChannelName>
                <SubscriptionCount>
                  {subscriberCount} subscribers
                </SubscriptionCount>
                <MobileChannelDescription>
                  {description}
                </MobileChannelDescription>
              </ChannelDescriptionContainer>
            </ChannelProfileDescriptionContainer>
            <DesktopChannelDescription>{description}</DesktopChannelDescription>
          </VideoDetailsContainer>
        )
      }}
    </ThemeAndSaveContext.Consumer>
  )

  renderFailureView = () => (
    <FailureCard>
      <FailureView retryApiAgain={this.getVideoDetailsAgain} />
    </FailureCard>
  )

  renderApiStatusView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLoaderView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <DetailsContainer>
        <Header />
        <DetailsCard>
          <SideBar />
          {this.renderApiStatusView()}
        </DetailsCard>
      </DetailsContainer>
    )
  }
}

export default VideoDetails
