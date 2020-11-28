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

const { TabPane } = Tabs;

const ActivityShowcaseContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ActivityShowcase = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover > svg {
    opacity: 1;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
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
        defaultActiveKey='1'
        onChange={callback}
        centered
        tabBarGutter={50}
        size='large'
      >
        <TabPane
          tab={
            <ActivityShowcase>
              <Donate onClick={handleClick} />
              <Subtitle>บริจาค</Subtitle>
            </ActivityShowcase>
          }
          key='1'
        >
          <PreviewActivities rows={rows} />
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
          <PreviewActivities />
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
          <PreviewActivities />
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
          <PreviewActivities />
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
              <Subtitle>โปรเจค</Subtitle>
            </ActivityShowcase>
          }
          key='6'
        >
          <PreviewActivities rows={rows} />
        </TabPane>
      </Tabs>
    </ActivityShowcaseContainer>
  );
}
