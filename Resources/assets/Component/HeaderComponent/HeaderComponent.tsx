/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import { Header } from "antd/lib/layout/layout";
import Menu from "antd/lib/menu";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import MainMenuComponent from "@EveryWorkflow/FrontPanelBundle/Component/MainMenuComponent";

const HeaderComponent = () => {
    return (
        <Header className="frontend-header">
            <div className="app-container-center">
                <Row gutter={0} justify="space-between">
                    <Col span={16}>
                        <MainMenuComponent />
                    </Col>
                    <Col span={8}>
                        <Menu mode="horizontal" style={{ border: 'none', textAlign: 'right' }}>
                            <Menu.Item key="search" icon={<SearchOutlined />}>Search</Menu.Item>
                            <Menu.SubMenu key="account" icon={<UserOutlined />} title="Account">
                                <Menu.Item key="1">Account</Menu.Item>
                                <Menu.Item key="2">Setting</Menu.Item>
                                <Menu.Item key="9">Logout</Menu.Item>
                            </Menu.SubMenu>
                            {/*<Menu.Item key="login" icon={<UserOutlined/>}>Login</Menu.Item>*/}
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Header>
    );
}

export default HeaderComponent;
