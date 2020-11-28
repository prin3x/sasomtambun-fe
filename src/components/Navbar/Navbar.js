import React, { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LoginRegister from '../LoginRegister/LoginRegister';
import { UserContext } from '../../context/userContext/userContext';
import { getRole } from '../../services/LocalStorageService';
import { Typography } from 'antd';

const NavbarContainer = styled.div`
  background: #f58052;
  color: #fff;
`;

const LogoContainer = styled.div`
  padding: 0.25rem 1rem;
  margin-top: 1rem;
  color: #000;
`;

const NavigatorContainer = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  padding: 0rem 20rem;
  @media (max-width: 1290px) {
    padding: 0rem 10rem;
  }
  @media (max-width: 900px) {
    padding: 0rem 5rem;
  }
  @media (max-width: 700px) {
    padding: 0rem 1rem;
  }
  @media (max-width: 500px) {
    padding: 0rem;
  }
`;

const NavigatorUl = styled.ul`
  list-style: none;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  margin-left: -2rem;
  margin-top: 1rem;
`;

const NavigatorLi = styled.li`
  padding: 0.25rem 1rem;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 0.25rem 0.5rem;
  }
`;

const NavLinkStyle = {
  color: '#000',
};

export default function Navbar() {
  const { role, dispatch } = useContext(UserContext);

  return (
    <NavbarContainer>
      <NavigatorContainer>
        <LogoContainer>LOGO</LogoContainer>
        <NavigatorUl>
          <NavigatorLi>
            <NavLink to='/home' style={NavLinkStyle}>
              หน้าแรก
            </NavLink>
          </NavigatorLi>

          <NavigatorLi>
            <NavLink to='/activities' style={NavLinkStyle}>
              กิจกรรม
            </NavLink>
          </NavigatorLi>

          <NavigatorLi>
            <NavLink to='/donations' style={NavLinkStyle}>
              บริจาค
            </NavLink>
          </NavigatorLi>

          <NavigatorLi>|</NavigatorLi>
          {role === 'authenticated' ? (
            <Fragment>
              <NavigatorLi>
                <NavLink to='/profile' style={NavLinkStyle}>
                  โปรไฟล์
                </NavLink>
              </NavigatorLi>
              <NavigatorLi>
                <Typography.Text>125</Typography.Text> Points
              </NavigatorLi>
            </Fragment>
          ) : (
            <Fragment>
              <NavigatorLi>
                <LoginRegister type='สมัครมาชิก' />
              </NavigatorLi>

              <NavigatorLi>
                <LoginRegister type='เข้าสู่ระบบ' />
              </NavigatorLi>
            </Fragment>
          )}
        </NavigatorUl>
      </NavigatorContainer>
    </NavbarContainer>
  );
}
