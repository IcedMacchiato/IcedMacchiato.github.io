import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'


const Container=styled.div`
    margin: 0px;
`
const Wrapper=styled.div`
    padding: 50px 50px;
    align-items: center;
    justify-content: center;
    display: grid;
    background-color: beige;
`
const Title = styled.h1`
    display:flex;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`
const DescBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const DescWrap = styled.div`
    width: 50%;
    padding: 30px 30px;
    border-radius: 15px;
    background-color: #FFEFCB;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`

const Desc = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 1.8;
`
const Button = styled.button`
    width: 30%;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: transparent;
    color: Black;
    cursor: pointer;
`

const ContentWrap = styled.div`
    
`
const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
`

const Kohi = () => {
  return (
    <Container>
        <Navbar/>
            <Wrapper>
                <Title>Kohi - Modern and Minimalist Cafe</Title>
                <DescBox>
                <DescWrap>
                <Desc>
                    The Landing page has a slider component in which the user is able to move between different categories
                    such as Coffee, Tea, and Specific kinds of Matcha. As they scroll down, they are able to further search for specific products
                    based on their category. Please check out my Github for more info regarding this project.
                </Desc>

                    <a style={{textDecoration: 'none'}} target="_blank" href="https://icedmacchiato.github.io/Kohi" rel="noreferrer"> <Button>View</Button></a>
            
                </DescWrap>
                </DescBox>
                    <ContentWrap>
                            <ImageContainer>
                            <Image src="https://cdn.discordapp.com/attachments/905593409811660901/1002372533942751304/unknown.png"/>
                            <Image src= "https://cdn.discordapp.com/attachments/905593409811660901/1002372632810893432/unknown.png"/>
                            </ImageContainer>
                    </ContentWrap>
            </Wrapper>
    </Container>
  )
}

export default Kohi