import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 20px;
`

export const HeaderImage = styled.img`
  width: 100px;
`
export const MobileListContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  margin-top: 4px;
`

export const MenuPopupContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
`
export const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 20px;
`

export const MobileLogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0;
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => props.bgColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  border-radius: 10px;
`
export const LogoutHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const LogoutCancelButton = styled.button`
  background-color: transparent;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 10px 22px;
  cursor: pointer;
  outline: none;
`
export const LogoutConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #f9f9f9;
  border: none;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 11px 22px;
  margin-left: 30px;
  cursor: pointer;
  outline: none;
`

export const DesktopListContainer = styled.ul`
  display: none;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
`
export const DesktopLogoutButton = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 3px 12px;
  border: 1px solid ${props => props.color};
  border-radius: 2px;
  margin-top: 0px;
  cursor: pointer;
  outline: none;
  margin-left: 3px;
`
