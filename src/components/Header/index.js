import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {HiMenu} from 'react-icons/hi'
import {BsX} from 'react-icons/bs'

import RoutesList from '../RoutesList'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  HeaderContainer,
  HeaderImage,
  MobileListContainer,
  ListItem,
  ThemeButton,
  MenuPopupContainer,
  CloseButton,
  MobileLogoutButton,
  LogoutPopupContainer,
  LogoutHeading,
  LogoutButtonsContainer,
  LogoutCancelButton,
  LogoutConfirmButton,
  DesktopListContainer,
  ProfileImage,
  DesktopLogoutButton,
} from './styledComponent'

const Header = props => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, changeTab} = value

      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const buttonColor = isDarkTheme ? '#f9f9f9' : '#3b82f6'
      const iconColor = isDarkTheme ? '#f9f9f9' : '#000000'
      const popupBgColor = isDarkTheme ? '#313131' : '#f9f9f9'
      const logoutHeadingColor = isDarkTheme ? '#f1f1f1' : '#1e293b'

      const headerImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickChangeTheme = () => {
        changeTheme()
      }

      const onClickChangeTab = () => {
        changeTab('Home')
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <Link to="/" onClick={onClickChangeTab}>
            <HeaderImage src={headerImage} alt="website logo" />
          </Link>
          <MobileListContainer>
            <ListItem>
              <ThemeButton
                data-testid="theme"
                type="button"
                onClick={onClickChangeTheme}
              >
                {isDarkTheme ? (
                  <FiSun size={20} color="#f9f9f9" />
                ) : (
                  <FaMoon size={20} />
                )}
              </ThemeButton>
            </ListItem>
            <ListItem>
              <Popup modal trigger={<HiMenu size={24} color={iconColor} />}>
                {close => (
                  <MenuPopupContainer bgColor={popupBgColor}>
                    <CloseButton type="button" onClick={() => close()}>
                      <BsX size={35} color={iconColor} />
                    </CloseButton>
                    <RoutesList />
                  </MenuPopupContainer>
                )}
              </Popup>
            </ListItem>
            <ListItem>
              <Popup
                modal
                trigger={
                  <MobileLogoutButton type="button">
                    <FiLogOut size={20} color={iconColor} />
                  </MobileLogoutButton>
                }
              >
                {close => (
                  <LogoutPopupContainer bgColor={popupBgColor}>
                    <LogoutHeading color={logoutHeadingColor}>
                      Are you sure, you want to logout
                    </LogoutHeading>
                    <LogoutButtonsContainer>
                      <LogoutCancelButton type="button" onClick={() => close()}>
                        Cancel
                      </LogoutCancelButton>
                      <LogoutConfirmButton
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </LogoutConfirmButton>
                    </LogoutButtonsContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </ListItem>
          </MobileListContainer>
          <DesktopListContainer>
            <ListItem>
              <ThemeButton
                data-testid="theme"
                type="button"
                onClick={onClickChangeTheme}
              >
                {isDarkTheme ? (
                  <FiSun size={18} color="#f9f9f9" />
                ) : (
                  <FaMoon size={16} />
                )}
              </ThemeButton>
            </ListItem>
            <ListItem>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
              />
            </ListItem>
            <ListItem>
              <Popup
                modal
                trigger={
                  <DesktopLogoutButton type="button" color={buttonColor}>
                    Logout
                  </DesktopLogoutButton>
                }
              >
                {close => (
                  <LogoutPopupContainer bgColor={popupBgColor}>
                    <LogoutHeading color={logoutHeadingColor}>
                      Are you sure, you want to logout
                    </LogoutHeading>
                    <LogoutButtonsContainer>
                      <LogoutCancelButton type="button" onClick={() => close()}>
                        Cancel
                      </LogoutCancelButton>
                      <LogoutConfirmButton
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </LogoutConfirmButton>
                    </LogoutButtonsContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </ListItem>
          </DesktopListContainer>
        </HeaderContainer>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default withRouter(Header)
