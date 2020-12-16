import { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as UserProfile } from '../../assets/svg/profile.svg';
import { Title, Lead, InputInfo } from '../styled-components/utilities';
import { Button, Typography, Avatar } from 'antd';
import { UserContext } from '../../context/userContext/userContext';

const { Text } = Typography;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const ControllerContainer = styled.div`
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    width: 20rem;
  }
  @media screen and (max-width: 800px) {
    width: 40rem;
  }
  @media screen and (max-width: 720px) {
    width: 30rem;
  }
  @media screen and (max-width: 420px) {
    width: 23.4rem;
  }
  @media screen and (max-width: 380px) {
    width: 23.25rem;
  }
`;

const ImageAndPoint = styled.div`
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const InfoContainer = styled.div`
  width: 40rem;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  display: flex;
  margin-left: 3rem;
  padding: 2rem 4rem;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 39rem;
    margin-left: 2rem;
  }
  @media screen and (max-width: 950px) {
    width: 32rem;
    margin-left: 2rem;
  }
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
    width: 40rem;
    margin-left: 0rem;
  }
  @media screen and (max-width: 720px) {
    padding: 2rem;
    width: 30rem;
  }
  @media screen and (max-width: 420px) {
    width: 23.4rem;
  }
`;

const AccountInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 380px) {
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-width: 20rem;
  &:nth-of-type(2) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 420px) {
    min-width: 12.5rem;
  }
`;
const FieldWrapper = styled.div`
  display: flex;
`;

export default function UserInfoContainer() {
  const { userInfo, logoutFromWebsite } = useContext(UserContext);

  const {
    available_points,
    email,
    department,
    fname,
    lname,
    phone,
    avartar_url,
  } = userInfo;
  return (
    <Fragment>
      <Wrapper>
        <ControllerContainer>
          <ImageAndPoint>
            <Avatar size={126} />
            <Title color='#FD6B0D'>
              {available_points} <span style={{ color: '#000' }}>Point</span>
            </Title>
          </ImageAndPoint>
          <Button type='primary' danger onClick={logoutFromWebsite}>
            Log Out
          </Button>
        </ControllerContainer>
        <InfoContainer>
          <AccountInfo>
            <Title color='#FD6B0D'>บัญชีของคุณ</Title>
            <FieldWrapper>
              <FieldContainer>
                <Text>อีเมล</Text>
                <InputInfo>{email}</InputInfo>
              </FieldContainer>
            </FieldWrapper>
            <FieldWrapper>
              <FieldContainer>
                <Text>ชื่อ</Text>
                <InputInfo>{fname}</InputInfo>
              </FieldContainer>
              <FieldContainer>
                <Text>นามสกุล</Text>
                <InputInfo>{lname}</InputInfo>
              </FieldContainer>
            </FieldWrapper>
            <FieldWrapper>
              <FieldContainer>
                <Text>เบอร์โทร</Text>
                <InputInfo>{phone}</InputInfo>
              </FieldContainer>
              <FieldContainer>
                <Text>แผนก</Text>
                <InputInfo>{department}</InputInfo>
              </FieldContainer>
            </FieldWrapper>
            {/* <FieldWrapper>
              <Button type='primary'>ยืนยัน</Button>
              <Button type='primary'>ยกเลิก</Button>
            </FieldWrapper> */}
          </AccountInfo>
        </InfoContainer>
      </Wrapper>
    </Fragment>
  );
}
