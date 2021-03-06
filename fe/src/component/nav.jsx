import React from 'react'
import {
    NavLink,
    withRouter
} from "react-router-dom"
import { Flex, Icon, Popup } from "antd-mobile"
import Prop from "./popup"
import Util from "../util/Util"
import {
    connect
} from "react-redux"

class Nav extends React.Component {
    render() {
        const { login, location } = this.props
        const { pathname } = location
        console.log(pathname);
        const homeActive = pathname === '/home'
        const userActive = (pathname === '/user' || pathname === '/collect')
        return <Flex id="footerNav">
            <Flex.Item>
                <NavLink activeClassName="active home" to="/home" >
                    <Icon type={require('../common/svg/list.svg')} color={homeActive ? "#108ee9" : "#777"} className="home" size="xxs" />
                    <span className="nav-label">首页</span>
                </NavLink>
            </Flex.Item>
            <Flex.Item>
                <span className="circle" onClick={(e) => {
                    if (login) {
                        Popup.show(<Prop history={this.props.history}></Prop>, {
                            animationType: 'slide-up'
                        })
                    } else {
                        Util.Toast.info('请登录')
                    }
                }}>
                    <Icon type={require('../common/svg/edit.svg')} size="xxs" className="edit" />
                </span>
            </Flex.Item>
            <Flex.Item>
                <NavLink activeClassName="active user" to="/user">
                    <Icon type={require('../common/svg/user.svg')} color={userActive ? "#108ee9" : "#777"} size="xxs" />
                    <span className="nav-label" style={{ color: userActive ? "#108ee9" : "#333" }}>我的</span>
                </NavLink>
            </Flex.Item>
        </Flex>
    }

}

const connectNav = connect(
    state => ({
        login: state.loginStatus.login
    })
)(Nav)

export default withRouter(connectNav) 
