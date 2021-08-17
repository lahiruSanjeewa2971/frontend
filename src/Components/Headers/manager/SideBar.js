import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    margin-top: 30px;
`;

const SideBarNav = styled.nav`
    background: #15171c;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

function SideBar() {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>

            <SideBarNav sidebar={sidebar} style={{fontSize: "20px"}}>
                <SidebarWrap>
                    <NavIcon to="/" style={{color: "white", textDecoration: "none"}}>
                        Explores CAFE
                    </NavIcon>
                    <div style={{paddingTop: "20px"}}>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </div>
                </SidebarWrap>
            </SideBarNav>
        </>
    )
}

export default SideBar
