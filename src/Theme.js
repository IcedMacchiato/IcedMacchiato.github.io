import React from 'react'
import styled from 'styled-components'
import lightvid from './content/lighttheme.mp4'

const Container = styled.div`

`
const Video = styled.video`
    width: 100%;
    height: 100%;
`


const Theme = () => {
  return (
<Container>
    <Video autoPlay loop muted>
        <source src = {lightvid} type = 'video/mp4'/>
    </Video>
</Container>
  )
}

export default Theme