import styled from 'styled-components'
import { Button } from 'semantic-ui-react'


const SidebarButton = styled(Button)`
    &&&&&& {
        background: #B7B1BA;
        border-radius: 50%;
        opacity: .3;
        transition: 500ms;
    }
    &&&&&&:hover {
        opacity: 1;        
    }
    &&&&&&:active {
        color: #443E47;
    }
`
const SidebarCanvas = styled.div`    
    background-color: #7b7182;    
    height: 92vh;
    width: 100%;
    padding: 1rem;

`
const SidebarContainer = styled.div`
    height: 46.5vh;
`
const SidebarHeader = styled.h3`
    font-family: multi-display, sans-serif;
    font-weight: 500;
    color: #B7B1BA;
    display: inline-block;
    font-size: 1.5rem;
    margin-bottom: .5rem;
    opacity: .8;
`
const SidebarText = styled.h4`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0 0 1rem;
    color: #CFCBD1;
`
const SmallMessageCard = styled.div`
    border: .3px solid #d6cbc7; 
    padding: .2rem;
    background: #e4ddda;
`
const Submenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`


export { 
    SidebarButton,
    SidebarCanvas, 
    SidebarContainer, 
    SidebarHeader, 
    SidebarText,
    SmallMessageCard, 
    Submenu,
}
