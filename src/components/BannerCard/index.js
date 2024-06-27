import {Component} from 'react'
import {BsX} from 'react-icons/bs'

import {
  Banner,
  BannerDescriptionContainer,
  BannerLogo,
  BannerDescription,
  BannerButton,
  BannerCloseButton,
} from './styledComponent'

class BannerCard extends Component {
  state = {
    displayBanner: 'flex',
  }

  onClickDisplayBanner = () => {
    this.setState({displayBanner: 'none'})
  }

  render() {
    const {displayBanner} = this.state
    return (
      <Banner data-testid="banner" display={displayBanner}>
        <BannerDescriptionContainer>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDescription>
            But Nxt Watch Premium prepaid plans with <br /> UPI
          </BannerDescription>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerDescriptionContainer>
        <BannerCloseButton
          data-testid="close"
          type="button"
          onClick={this.onClickDisplayBanner}
        >
          <BsX size={20} />
        </BannerCloseButton>
      </Banner>
    )
  }
}

export default BannerCard
