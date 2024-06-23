import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {HiMenu} from 'react-icons/hi'

import {
  HeaderContainer,
  HeaderImage,
  ListContainer,
  ListItem,
} from './styledComponent'

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    </Link>

    <ListContainer>
      <ListItem>
        <FaMoon size={16} />
      </ListItem>
      <ListItem>
        <Popup modal trigger={<HiMenu size={22} />}>
          {close => (
            <MenuPopupContainer>
              <h1>hi</h1>
            </MenuPopupContainer>
          )}
        </Popup>
      </ListItem>
      <ListItem>
        <FiLogOut size={20} />
      </ListItem>
    </ListContainer>
  </HeaderContainer>
)

export default Header
