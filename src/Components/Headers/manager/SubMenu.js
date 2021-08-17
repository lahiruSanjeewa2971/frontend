import React, {useState} from 'react'
import { IconContext } from 'react-icons/lib';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px

    &:hover{
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 50px;
    padding-left: 3rem;
    display: flex;
    align-item: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

export default function SubMenu({item}){
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <IconContext.Provider value={{ color: 'red '}}>
                <SidebarLink to={item.path} onClick={item.subNav &&
                showSubnav}>
                    <div>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </div>

                    <div>
                        {item.subNav && subnav
                            ? item.iconOpened
                            : item.subNav
                                ? item.iconClosed : null}
                    </div>
                </SidebarLink>
                {subnav && item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index} style={{paddingTop: "15px", fontSize: "18px"}}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })}
            </IconContext.Provider>
        </>
    )
}
