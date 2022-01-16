/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Menu from "antd/lib/menu";
import { Link, NavLink, useLocation } from 'react-router-dom';

const MainMenuComponent = () => {
    const location = useLocation();
    console.log('MainMenuComponent - location -->', location);

    const handleClick = (e: any) => {
        console.log('MainMenuComponent-click', e);
    }

    return (
        <Menu onClick={handleClick} mode="horizontal" className="frontend-main-menu">
            <Menu.Item key="home" className="brand-home" style={{ borderBottom: '2px solid transparent' }}>
                <Link to={'/'}>
                    <img src={'/media/ew-logo.svg'} alt={'Logo'} />
                </Link>
            </Menu.Item>
            <Menu.SubMenu key="solutions" title="Solutions">
                <Menu.Item key="pwa">
                    <Link to={'/pwa'}>Progressive web application</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="resources" title="Resources">
                <Menu.Item key="resources_1">User documentation</Menu.Item>
                <Menu.Item key="resources_2">Frontend development</Menu.Item>
                <Menu.Item key="resources_3">Backend development</Menu.Item>
                <Menu.Item key="resources_4">API documentation</Menu.Item>
                <Menu.Item key="resources_5">Research and development</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="marketplace" title="Marketplace">
                <Menu.Item key="marketplace_1">All Extensions</Menu.Item>
                <Menu.Item key="marketplace_2">By EveryWorkflow</Menu.Item>
                <Menu.Item key="marketplace_3">For Marketing</Menu.Item>
                <Menu.Item key="marketplace_4">For Payment</Menu.Item>
                <Menu.Item key="marketplace_5">For Shipping</Menu.Item>
                <Menu.Item key="marketplace_6">For Accounting</Menu.Item>
                <Menu.Item key="marketplace_7">For Frontend</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="community" title="Community">
                <Menu.Item key="community_1">Option 9</Menu.Item>
                <Menu.Item key="community_2">Option 10</Menu.Item>
                <Menu.Item key="community_3">Option 11</Menu.Item>
                <Menu.Item key="community_4">Option 12</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="blog"><Link to={'/blog'}>Blog</Link></Menu.Item>
            <Menu.Item key="about"><Link to={'/about'}>About</Link></Menu.Item>
            <Menu.Item key="contact"><Link to={'/contact'}>Contact</Link></Menu.Item>
            <Menu.SubMenu key="examples" title="Examples">
                <Menu.Item key="privacy-policy">
                    <NavLink to={'/privacy-policy'}>Privacy policy</NavLink>
                </Menu.Item>
                <Menu.Item key="terms-of-use">
                    <NavLink to={'/terms-of-use'}>Terms of use</NavLink>
                </Menu.Item>
                <Menu.Item key="examples/data-form-block">
                    <NavLink to={'/examples/data-form-block'}>Data Form block</NavLink>
                </Menu.Item>
                <Menu.Item key="examples/data-form">
                    <NavLink to={'/examples/data-form'}>Data Form - admin panel page</NavLink>
                </Menu.Item>
                <Menu.Item key="examples/page-builder-edit-page">
                    <NavLink to={'examples/page-builder-edit-page'}>Page builder edit page</NavLink>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
}

export default MainMenuComponent;
