import { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../context/userContext/userContext';
import { Button } from 'antd';

const NavbarContainer = styled.div`
  background: #f58052;
  color: #fff;
  position: relative;
`;

const LogoContainer = styled.div`
  padding: 0.25rem 1rem;
  margin-top: 0.5rem;
  height: auto;
  width: 5rem;
  color: #000;
  cursor: pointer;
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
`;

const NavigatorUl = styled.ul`
  list-style: none;
  min-width: 100%;
  justify-content: flex-end;
  display: flex;
  margin-left: -2rem;
  margin-top: 1rem;
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
  cursor: pointer;
`;

export default function NavbarForAdmin() {
  const { userInfo, logoutFromWebsite } = useContext(UserContext);
  const history = useHistory();
  return (
    <NavbarContainer>
      <NavigatorContainer>
        <LogoContainer onClick={() => history.push('/')}>
          <img src='/assets/img/logo.png' alt='logo' />
        </LogoContainer>
        <NavigatorUl>
          <NavigatorLi>{userInfo.email}</NavigatorLi>
          <Button type='primary' onClick={() => logoutFromWebsite()}>
            Logout
          </Button>
        </NavigatorUl>
      </NavigatorContainer>
    </NavbarContainer>
  );
}
