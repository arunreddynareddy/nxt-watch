import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponent'

const FailureView = props => (
  <ThemeAndSaveContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      const headingColor = isDarkTheme ? '#f1f1f1' : '#231f20'

      const {retryApiAgain} = props

      const onClickRetryAgain = () => {
        retryApiAgain()
      }

      return (
        <FailureContainer>
          <FailureImage src={imageUrl} alt="failure view" />
          <FailureHeading color={headingColor}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureDescription>
            We are having some trouble to complete your request. Please try
            again.
          </FailureDescription>
          <FailureButton type="button" onClick={onClickRetryAgain}>
            Retry
          </FailureButton>
        </FailureContainer>
      )
    }}
  </ThemeAndSaveContext.Consumer>
)

export default FailureView
