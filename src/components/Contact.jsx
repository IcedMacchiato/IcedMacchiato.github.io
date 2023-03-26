import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Res"

const Container = styled.div`
    margin-top: -4px;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F8E7D1;
    
`
const Wrapper = styled.div`
    
    align-items: center;
    justify-content: center;
    width: 40%;
    padding: 20px;
    border-radius: 15px;
    background-color: gray;
    ${mobile({ width: "100vw" })}
`
const Title = styled.form`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color:white;
`
const Info = styled.p`
    color: white;
    display: flex;
`


const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Contact: </Title>
            <Info>williamtang25@gmail.com</Info>
        </Wrapper>
    </Container>
  )
}

export default Contact