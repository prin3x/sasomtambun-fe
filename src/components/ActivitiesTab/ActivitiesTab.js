import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import PreviewActivities from '../PreviewActivities/PreviewActivities';
import { ReactComponent as Donate } from '../../assets/svg/Donate.svg';
import { ReactComponent as Healthy } from '../../assets/svg/Healthy.svg';
import { ReactComponent as Knowledge } from '../../assets/svg/knowledge.svg';
import { ReactComponent as Csc } from '../../assets/svg/csc.svg';
import { ReactComponent as Challenge } from '../../assets/svg/challenge.svg';
import { ReactComponent as Project } from '../../assets/svg/project.svg';
import { MainSectionHeader } from '../styled-components/utilities';
import Spinner from '../Spinner/Spinner';

const { TabPane } = Tabs;

const ActivityShowcaseContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ActivityShowcase = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover > svg {
    opacity: 1;
  }
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
`;

export default function ActivitiesTab({ rows }) {
  function callback(key) {
    console.log(key);
  }

  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <ActivityShowcaseContainer>
      <MainSectionHeader>กิจกรรม</MainSectionHeader>
      <Tabs
        defaultActiveKey='0'
        onChange={callback}
        centered
        tabBarGutter={35}
        size='large'
      >
        <TabPane
          tab={
            <ActivityShowcase>
              <Donate onClick={handleClick} />
              <Subtitle>ทั้งหมด</Subtitle>
            </ActivityShowcase>
          }
          key='0'
        >
          <PreviewActivities />
        </TabPane>
        <TabPane
          tab={
            <ActivityShowcase>
              <Donate onClick={handleClick} />
              <Subtitle>บริจาค</Subtitle>
            </ActivityShowcase>
          }
          key='1'
        >
          <PreviewActivities category='บริจาค' />
        </TabPane>
        <TabPane
          tab={
            <ActivityShowcase>
              <Healthy onClick={handleClick} />
              <Subtitle>สุขภาพ</Subtitle>
            </ActivityShowcase>
          }
          key='2'
        >
          <PreviewActivities category='สุขภาพ' />
        </TabPane>
        <TabPane
          tab={
            <ActivityShowcase>
              <Knowledge />
              <Subtitle>ความรู้</Subtitle>
            </ActivityShowcase>
          }
          key='3'
        >
          <PreviewActivities category='ความรู้' />
        </TabPane>
        <TabPane
          tab={
            <ActivityShowcase>
              <Challenge />
              <Subtitle>เป้าหมาย 7 วัน</Subtitle>
            </ActivityShowcase>
          }
          key='4'
        >
          <PreviewActivities category='เป้าหมาย_7_วัน' />
        </TabPane>
        <TabPane
          tab={
            <ActivityShowcase>
              <Csc />
              <Subtitle>CSC โปรเจค</Subtitle>
            </ActivityShowcase>
          }
          key='5'
        >
          <PreviewActivities />
        </TabPane>
        <TabPane
          tab={
            <ActivityShowcase>
              <Project />
              <Subtitle>สินค้า</Subtitle>
            </ActivityShowcase>
          }
          key='6'
        >
          <PreviewActivities category='สินค้า' />
        </TabPane>
      </Tabs>
    </ActivityShowcaseContainer>
  );
}
