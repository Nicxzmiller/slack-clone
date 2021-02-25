import React from "react";
import styled from "styled-components"
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime"

function Header(){
    return (
        <HeaderContainer>
            {/*Header left*/}
            <HeaderLeft>
                <HeaderAvatar/>
                <AccessTimeIcon/>
            </HeaderLeft>

            {/*Header search*/}
            <HeaderSearch>

            </HeaderSearch>

            {/*Header right*/}
            <HeaderRight>

            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
  
`

const HeaderLeft = styled.div`
  
`

const HeaderAvatar=styled(Avatar)`
  
`

const HeaderSearch = styled.div`
  
`

const HeaderRight = styled.div`
  
`