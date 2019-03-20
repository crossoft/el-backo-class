import React from 'react'
import Button from './Button'
import MenuContainer from './MenuContainer'


export default () => (
  <MenuContainer>
    <MenuContainer>
      In Index route here
    </MenuContainer>

    <Button to='/singleplayer/new'>
      Singleplayer
    </Button>
  </MenuContainer>
)
