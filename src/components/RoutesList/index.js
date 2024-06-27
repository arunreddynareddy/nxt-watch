import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  RouteListContainer,
  LinkItem,
  RouteListItem,
  ListName,
} from './styledComponent'

const RoutesList = () => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      const activeTextColor = isDarkTheme ? '#f1f5f9' : '#231f20'
      const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'

      const onClickHomeTab = () => {
        changeTab('Home')
      }

      const onClickTrendingTab = () => {
        changeTab('Trending')
      }

      const onClickGamingTab = () => {
        changeTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        changeTab('SavedVideos')
      }

      return (
        <RouteListContainer>
          <LinkItem
            to="/"
            bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
          >
            <RouteListItem key="home" onClick={onClickHomeTab}>
              <MdHome
                size={15}
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
              <ListName
                color={activeTab === 'Home' ? activeTextColor : '#909090'}
              >
                Home
              </ListName>
            </RouteListItem>
          </LinkItem>
          <LinkItem
            to="/trending"
            bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
          >
            <RouteListItem key="trending" onClick={onClickTrendingTab}>
              <HiFire
                size={15}
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
              <ListName
                color={activeTab === 'Trending' ? activeTextColor : '#909090'}
              >
                Trending
              </ListName>
            </RouteListItem>
          </LinkItem>
          <LinkItem
            to="/gaming"
            bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
          >
            <RouteListItem key="gaming" onClick={onClickGamingTab}>
              <SiYoutubegaming
                size={12}
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
              <ListName
                color={activeTab === 'Gaming' ? activeTextColor : '#909090'}
              >
                Gaming
              </ListName>
            </RouteListItem>
          </LinkItem>
          <LinkItem
            to="/saved-videos"
            bgColor={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
          >
            <RouteListItem key="savedVideos" onClick={onClickSavedVideosTab}>
              <RiMenuAddFill
                size={12}
                color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
              />
              <ListName
                color={
                  activeTab === 'SavedVideos' ? activeTextColor : '#909090'
                }
              >
                Saved Videos
              </ListName>
            </RouteListItem>
          </LinkItem>
        </RouteListContainer>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default RoutesList
