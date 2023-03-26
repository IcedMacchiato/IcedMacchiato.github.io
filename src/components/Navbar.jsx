import DarkModeIcon from '@mui/icons-material/DarkMode';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {mobile} from "../Res"

const Container = styled.div`
    height:60px;
    background-color: #F8E7D1;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`
const NightButton = styled.div`
    display:flex;
    font-size: 14px;
    color: black;
    
`

const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    color:black;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const NavOptions = styled.div`
    font-size: 14px;
    color:black;
    cursor: pointer;
    margin-left: 25px;
`

const NavOpLink = styled.a`
    color:black;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <NightButton>
                
                    <CoffeeOutlinedIcon />
                    
                </NightButton>
            </Left>
            <Center>
            <Link to={`/`} style={{textDecoration: 'none'}}>
                <Logo>IcedMacchiato</Logo>
                </Link>
            </Center>
            <Right>
                <NavOptions></NavOptions>
                <NavOptions>
                    <NavOpLink>
                    <a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/IcedMacchiato?tab=repositories" rel="noreferrer"> Github </a>
                    </NavOpLink>
                </NavOptions>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar