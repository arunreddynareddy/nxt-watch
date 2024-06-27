import Header from '../Header'
import SideBar from '../SideBar'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundItemsContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

const NotFound = () => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const headingColor = isDarkTheme ? '#f1f1f1' : '#000000'

      return (
        <NotFoundContainer>
          <Header />
          <NotFoundCard>
            <SideBar />
            <NotFoundItemsContainer bgColor={bgColor}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading color={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundItemsContainer>
          </NotFoundCard>
        </NotFoundContainer>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default NotFound
