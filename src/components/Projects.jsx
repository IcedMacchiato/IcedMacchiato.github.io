import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {mobile} from "../Res"

// temp solution to the white space between the vid and next div
const Container = styled.div`
    margin-top: -4px;
    background-color: #F8E7D1;
`
const Wrapper = styled.div`
    padding: 10px 50px;
    align-items: center;
    justify-content: center;
    display: grid;
    ${mobile({ padding: "0px", flexdirection: "column" })}
    
`
const TextContainer = styled.div`
    flex:1;
    padding: 30px;
    
`

const Title = styled.h1`
    
`
const Desc = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 1.8;
    ${mobile({ padding: "0px" })}
    
`
const ImageContainer = styled.div`
    flex:1;
    
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
    ${mobile({ display: "none"})}
    
`

const AboutWrap = styled.div`
    display:flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${mobile({ padding: "0px" })}
`

const About = styled.div`
    margin: 20px;
    padding: 20px;
    width: 50%;
    align-items: center;
    justify-content: center;
    ${mobile({ margin: "5px", padding: "5px" })}
`

const ProjectH = styled.h1`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
`

const TopWrap = styled.div`
    padding: 20px;
    background-color: beige;
    border-radius: 15px;
    ${mobile({ width: "100vw"})}
    
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const MiddleWrap = styled.div`
    padding: 20px;
    background-color: #FFEFCB;
    border-radius: 15px;
`

const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const BottomWrap = styled.div`
    padding: 20px;
    background-color: beige;
    border-radius: 15px;
`

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 30%;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: gray;
    color: white;
    cursor: pointer;
    ${mobile({ width: "50vw" })}
`

const Projects = () => {
  return (
    <Container>
        <Wrapper>
            <AboutWrap>
            <About>
                <Title>About Me</Title>
                <Desc>Hello all, my name is Will and I'm a Data scientist by day and Software Developer by night. 
 I've been coding for 5+ years and found a love for machine learning along the way, which was when 
 I decided to focus on statistics in order to further build upon my analytical knowledge. 
 I've always found big data interesting because it allows people to make decisions which have 
 huge impact on them and their surroundings. After going through and learning all these statistical theories, 
 I've applied my knowledge to conduct studies and make models based on big data sets for real world problems. </Desc>
            
            </About>
            </AboutWrap>
            <ProjectH>Projects</ProjectH>
            <TopWrap>
            <Top>
            <ImageContainer>
            <Image src="https://cdn.discordapp.com/attachments/905593409811660901/1002372533942751304/unknown.png"/>
                </ImageContainer>
                <TextContainer>
                <Title>Kohi - Modern and Minimalist Coffee/Tea Shop</Title>
                <Desc>During my travels abroad, I always like to checkout as many local cafes as possible. 
What stood out the most to me were the cafes over in Japan. Everything over there is so aesthetic 
to where any photo would come out looking good, this was especially true for cafes. 
After checking a few out, I found inspiration to create a Responsive, Modern, and Minimalist landing page for these coffee shops
since a decent amount of sites over there were still either in basic HTML or they didn't have a website in general.</Desc>
            
            <a style={{textDecoration: 'none'}} target="_blank" href="https://icedmacchiato.github.io/Kohi" rel="noreferrer"> <Button>View</Button></a>
                </TextContainer>
                
            </Top>
            </TopWrap>
            <MiddleWrap>
            <Middle>
            <TextContainer>
                <Title>BTC-ETH-DOGE-21-22-Trend-Analysis</Title>
                <Desc>
                    Due to the recent boom and decline of crypto within 2021 - 2022, I decided to analyze the trend of three popular crypto currrencies:
                    Bitcoin, Ethereum, and DogeCoin.
                </Desc>
            </TextContainer>
            <ImageContainer>
            <Image src="https://cdn.discordapp.com/attachments/987099787054698618/1002373661761732708/unknown.png"/>
                </ImageContainer>
            </Middle>
            </MiddleWrap>
            <BottomWrap>
            <Bottom>
            <ImageContainer>
            <Image src="https://cdn.discordapp.com/attachments/905593409811660901/1002375979316031608/unknown.png"/>
                </ImageContainer>
            <TextContainer>
                <Title>MERN - Rest API</Title>
                <Desc>
                I built a REST API through the MERN stack for the Kohi website so users could Create Accounts, Sign In, and Checkout with Stripe. 
                The admin on the site could also add new products and photos to their catalog, while the users could search and filter through products 
                based on their category.
                </Desc>
            </TextContainer>
            </Bottom>
            </BottomWrap>
        </Wrapper>
    </Container>
  )
}

export default Projects