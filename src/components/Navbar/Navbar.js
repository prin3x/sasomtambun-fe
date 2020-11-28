import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import './Navbar.css';
import LoginRegister from '../LoginRegister/LoginRegister';
import { UserContext } from '../../context/userContext/userContext';
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const NavbarContainer = styled.div`
  background: #f58052;
  color: #fff;
  position: relative;
`;

const LogoContainer = styled.div`
  padding: 0.25rem 1rem;
  margin-top: 0.5rem;
  height: auto;
  color: #000;
  cursor: pointer;
  @media (max-width: 500px) {
    padding: 0.25rem 0.20rem;
    margin-left: 12.5rem;
  }
  @media (max-width: 400px) {
    margin-left: 10.5rem;
  }
  @media (max-width: 360px) {
    margin-left: 5rem;
  }
  & > img {
    width: 8rem;
  }
`;

const NavigatorContainer = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  padding: 0rem 20rem;
  width: 100%;
  height: 3.5rem;
  position: fixed;
  top: 0;
  z-index: 5;
  @media (max-width: 1290px) {
    padding: 0rem 5rem;
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
  @media (max-width: 500px) {
    margin: 0;
    background: #fff;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100%;
    z-index: 10;
    opacity: ${({ open }) => (open ? '1':'0')};
    transform: ${({ open }) => (open ? 'translateX(0)':'translateX(-30rem)')};
    transition: all 0.5s ease-in-out;
    & > li {
      margin-top: 2.5rem;
      transform: ${({ open }) => (open ? 'translateX(0)':'translateX(-30rem)')};
      transition: all 0.5s ease-in-out;
      &:nth-child(1){
        transition-delay: 0.2s;
      }
      &:nth-child(2){
        transition-delay: 0.3s;
      }
      &:nth-child(3){
        transition-delay: 0.4s;
        margin-bottom: 5rem;
      }
    }
    & > li:last-child{
      display: none;
    }
  }
`;


const UserSection = styled.div`
list-style: none;
  display: flex;
  margin-top: 1rem;
  width: 18rem;
  justify-content: flex-start;
  padding-right: 0.75rem;
  @media (max-width: 500px) {
    justify-content: flex-end;
  }
`


const NavigatorLi = styled.li`
  padding: 0.25rem 1rem;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 600px) {
    padding: 0.25rem 0.25rem;
  }
  @media (max-width: 500px) {
    padding: 0.25rem 0.20rem;
  }
  @media (max-width: 450px) {
    margin-top: 0;
  }
`;

const NavLinkStyle = {
  color: '#000',
};

const StyledBurger = styled.button`
margin-top: 0.5rem;
margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: none;
  position: fixed;
  top: 0.1%;
  
  @media (max-width: 500px) {
    display: flex;
    z-index: 100;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#f58052' : '#f58052')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;


const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default function Navbar(props) {
  const { role } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const history = useHistory()



  return (
    <NavbarContainer>
      <NavigatorContainer>
        <Burger open={open} setOpen={setOpen} />
        <LogoContainer onClick={() => history.push('/')}>
          <img src="assets/img/logo.png" alt=""/>
        </LogoContainer>
        <NavigatorUl open={open}>
          <NavigatorLi onClick={() => setOpen(false)}>
            <NavLink to='/home' style={NavLinkStyle}>
              หน้าแรก
            </NavLink>
          </NavigatorLi>

          <NavigatorLi onClick={() => setOpen(false)}>
            <NavLink to='/activities' style={NavLinkStyle}>
              กิจกรรม
            </NavLink>
          </NavigatorLi>

          <NavigatorLi onClick={() => setOpen(false)}>
            <NavLink to='/donations' style={NavLinkStyle}>
              บริจาค
            </NavLink>
          </NavigatorLi>

          <NavigatorLi>|</NavigatorLi>
        </NavigatorUl>

          {role === 'authenticated' ? (
            <UserSection>
              <NavigatorLi>
                <NavLink to='/profile' style={NavLinkStyle}>
                <UserOutlined style={{marginRight: '1rem'}} />
                <Typography.Text>125 Points</Typography.Text> 
                </NavLink>
              </NavigatorLi>
            </UserSection>
          ) : (
            <UserSection>
              <NavigatorLi>
                <LoginRegister type='สมัครมาชิก' />
              </NavigatorLi>

              <NavigatorLi>
                <LoginRegister type='เข้าสู่ระบบ' />
              </NavigatorLi>
            </UserSection>
          )}
      </NavigatorContainer>
    </NavbarContainer>
  );
}
