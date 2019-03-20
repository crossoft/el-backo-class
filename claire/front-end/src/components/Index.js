import React from 'react'
import Button from './Button'
import MenuContainer from './MenuContainer'

export default () => (
  <MenuContainer>
    <div>
      In Index route here
    </div>

    <Button to='/singleplayer/new'>
      Singleplayer
    </Button>
  </MenuContainer>
)
