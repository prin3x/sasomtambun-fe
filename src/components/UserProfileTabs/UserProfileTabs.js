import { Tabs } from 'antd';
import UserInfoContainer from '../UserInfoContainer/UserInfoContainer';
import styled from 'styled-components';
import UserHistoryTable from '../UserHistoryTable/UserHistoryTable';
import UserDonationHistory from '../UserDonationHistory/UserDonationHistory';

const { TabPane } = Tabs;

const AlterAntd = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  .ant-tabs-tab {
    margin-right: 10rem;
    @media screen and (max-width: 1280px) {
      margin-right: 5rem;
    }
    @media screen and (max-width: 770px) {
      margin-right: 1.5rem;
    }
    @media screen and (max-width: 380px) {
      margin-right: 1rem;
    }
  }
`;

export default function UserProfileTabs() {
  return (
    <AlterAntd>
      <Tabs defaultActiveKey='1' centered size='large'>
        <TabPane tab={'โปรไฟล์ของฉัน'} key='1'>
          <UserInfoContainer />
        </TabPane>
        <TabPane tab={'ติดตามกิจกรรม'} key='2'>
          <UserHistoryTable />
        </TabPane>
        <TabPane tab={'ประวัติการบริจาค'} key='3'>
          <UserDonationHistory />
        </TabPane>
        {/* <TabPane tab={'เหรียญรางวัล'} key='4'></TabPane> */}
      </Tabs>
    </AlterAntd>
  );
}
