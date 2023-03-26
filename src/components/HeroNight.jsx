import React from 'react'
import styled from 'styled-components';
import darkvid from '../content/darktheme.mp4'

const Container = styled.div`
   
`

const Video = styled.video`
    width: 100%;
    height: 100%;
`

const HeroNight = () => {
  return (
    <Container>
        <Video autoPlay loop muted>
            <source src = {darkvid} type = 'video/mp4'/>
        </Video>
    </Container>
  )
}

export default HeroNight