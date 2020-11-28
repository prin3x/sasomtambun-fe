import styled from 'styled-components';
import UserProfileTabs from '../components/UserProfileTabs/UserProfileTabs';

const ProfilePageBackground = styled.div`
  width: 100vw;
  background: #e5e5e5;
  padding: 1rem 20rem;
  @media screen and (max-width: 1280px) {
    padding: 1rem 10rem;
  }
  @media screen and (max-width: 770px) {
    padding: 0;
  }
  @media screen and (max-width: 380px) {
    padding: 0 0;
  }
`;

export default function UserProfile() {
  return (
    <ProfilePageBackground>
      <UserProfileTabs />
    </ProfilePageBackground>
  );
}
