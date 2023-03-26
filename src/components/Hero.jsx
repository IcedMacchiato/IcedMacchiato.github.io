import { imageListClasses } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import lightvid from '../content/lighttheme.mp4'
import darkvid from '../content/darktheme.mp4'


const Container = styled.div`

`
const Video = styled.video`
    width: 100%;
    height: 100%;
`


const Hero = () => {
  return (
    <Container>
            <Video autoPlay loop muted>
                <source src = {lightvid} type = 'video/mp4'/>
            </Video>
    </Container>
  )
}

export default Hero