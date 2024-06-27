import React from 'react'

const ThemeAndSaveContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  changeTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
})

export default ThemeAndSaveContext
