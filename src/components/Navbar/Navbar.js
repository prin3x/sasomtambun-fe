import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import './Navbar.css';
import LoginRegister from '../LoginRegister/LoginRegister';
import { UserContext } from '../../context/userContext/userContext';
import { Button, Typography } from 'antd';
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
    padding: 0.25rem 0.2rem;
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
  min-width: 100%;
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
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-30rem)')};
    transition: all 0.5s ease-in-out;
    & > li {
      margin-top: 2.5rem;
      transform: ${({ open }) =>
        open ? 'translateX(0)' : 'translateX(-30rem)'};
      transition: all 0.5s ease-in-out;
      &:nth-child(1) {
        transition-delay: 0.2s;
      }
      &:nth-child(2) {
        transition-delay: 0.3s;
      }
      &:nth-child(3) {
        transition-delay: 0.4s;
        margin-bottom: 5rem;
      }
    }
    & > li:last-child {
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
`;

const NavigatorLi = styled.li`
  width: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .active {
    border: 1px solid #fb9a2b;
    border-radius: 2rem;
    padding: 0.25rem 0.25rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 450px) {
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
  const { userInfo, role, logoutFromWebsite } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <NavbarContainer>
      <NavigatorContainer>
        <Burger open={open} setOpen={setOpen} />
        <LogoContainer onClick={() => history.push('/')}>
          <img
            src='https://res.cloudinary.com/dthnl7fio/image/upload/v1608088786/sasomtambun/127531052_1017639498734055_8573310296503582026_n_a0rirr.png'
            alt='logo'
          />
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
          <NavigatorLi>&nbsp; | &nbsp;</NavigatorLi>

          {role === 'User' ? (
            <Fragment>
              <NavigatorLi>
                <NavLink to='/profile' style={NavLinkStyle}>
                  <UserOutlined style={{ marginRight: '1rem' }} />
                </NavLink>
              </NavigatorLi>
              <NavigatorLi>
                <Typography.Text>
                  {userInfo?.available_points} Points
                </Typography.Text>
              </NavigatorLi>
            </Fragment>
          ) : role === 'Admin' ? (
            <Fragment>
              <NavigatorLi onClick={() => history.push('/admin/activities')}>
                <Button type='ghost'>Admin Panel</Button>
              </NavigatorLi>
              <NavigatorLi style={{ marginLeft: '2rem' }}>
                <Button type='primary' onClick={() => logoutFromWebsite()}>
                  Logout
                </Button>
              </NavigatorLi>
            </Fragment>
          ) : (
            <Fragment>
              <NavigatorLi>
                <LoginRegister type='สมัครสมาชิก' />
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
