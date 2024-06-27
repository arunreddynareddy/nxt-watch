import RoutesList from '../RoutesList'
import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  SideBarContainer,
  ContactContainer,
  ContactHeading,
  ContactImagesContainer,
  ContactImage,
  ContactDescription,
} from './styledComponent'

const SideBar = () => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const textColor = isDarkTheme ? '#f1f5f9' : '#475569'

      return (
        <SideBarContainer bgColor={bgColor}>
          <RoutesList />
          <ContactContainer>
            <ContactHeading color={textColor}>CONTACT US</ContactHeading>
            <ContactImagesContainer>
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </ContactImagesContainer>
            <ContactDescription color={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactContainer>
        </SideBarContainer>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default SideBar
