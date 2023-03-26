import React from 'react'
import lightvid from '../content/lighttheme.mp4'
import darkvid from '../content/darktheme.mp4'
import styled from 'styled-components'
import Theme from '../Theme'


const Button = styled.button`

`


const Switch = (Theme) => {
  return (
    <Button onClick={Theme}>
       test
    </Button>
  )
}

export default Switch