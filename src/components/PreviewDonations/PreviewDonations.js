import React from 'react';
import { Row, Progress, Col, Button } from 'antd';
import {
  ActivityContent,
  Image,
  ProgressContainer,
  Title,
  Paragraph,
  MainSectionHeader,
} from '../styled-components/utilities';



export default function PreviewDonations({ rows }) {
  const colsArray = Array(rows ? rows : 1).fill().map((_, i) => i + 1)
  return (
    <ActivityContent style={{marginTop: '3.5rem'}}>
          <MainSectionHeader>บริจาค</MainSectionHeader>
      <Row justify='center'>
        {colsArray &&
          colsArray.map((col, ind) => (
            <React.Fragment key={ind}>
              <Col
                xl={6} lg={{ span: 6, offset: 0 }} md={11} sm={24}
              >
                <Image src='https://via.placeholder.com/300x290' alt='' />
                <Row justify='center'>
                  <Title>ของขวัญปีใหม่</Title>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, alias! Lorem ipsum dolor sit amet consectetur,
                  </Paragraph>
                </Row>
                <Row justify='center'>
                  <ProgressContainer>
                    <Progress
                      percent={90}
                      strokeColor={{ '0%': '#f59b34', '100%': '#FB9A2B' }}
                      strokeWidth={30}
                      trailColor={'#fff2e3'}
                      showInfo={false}
                    />
                    <Button
                      type='primary'
                      style={{ marginLeft: '0.5rem' }}
                      shape='round'
                    >
                      บริจาค
                    </Button>
                  </ProgressContainer>
                  <Paragraph>Point 90,000/100,000</Paragraph>
                </Row>
              </Col>
              <Col
               xl={{ span: 6, offset: 2}} lg={{ span: 6, offset: 2 }}  md={11} sm={24}
              >
                <Image src='https://via.placeholder.com/300x290' alt='' />
                <Row justify='center'>
                  <Title>ของขวัญปีใหม่</Title>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, alias! Lorem ipsum dolor sit amet consectetur,
                  </Paragraph>
                </Row>
                <Row Row justify='center'>
                  <ProgressContainer>
                    <Progress
                      percent={90}
                      strokeColor={{ '0%': '#f59b34', '100%': '#FB9A2B' }}
                      strokeWidth={30}
                      trailColor={'#fff2e3'}
                      showInfo={false}
                    />
                    <Button
                      type='primary'
                      style={{ marginLeft: '0.5rem' }}
                      shape='round'
                    >
                      บริจาค
                    </Button>
                  </ProgressContainer>
                  <Paragraph>Point 90,000/100,000</Paragraph>
                </Row>
              </Col>
              <Col
                xl={{ span: 6, offset: 2}} lg={{ span: 6, offset: 2 }}  md={0} 
              >
                <Image
                  style={{ display: 'block' }}
                  src='https://via.placeholder.com/300x290'
                  alt=''
                />
                <Row justify='center'>
                  <Title>ของขวัญปีใหม่</Title>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, alias! Lorem ipsum dolor sit amet consectetur,
                  </Paragraph>
                </Row>
                <Row>
                  <ProgressContainer>
                    <Progress
                      percent={90}
                      strokeColor={{ '0%': '#f59b34', '100%': '#FB9A2B' }}
                      strokeWidth={30}
                      trailColor={'#fff2e3'}
                      showInfo={false}
                    />
                    <Button
                      type='primary'
                      style={{ marginLeft: '0.5rem' }}
                      shape='round'
                    >
                      บริจาค
                    </Button>
                  </ProgressContainer>
                  <Paragraph>Point 90,000/100,000</Paragraph>
                </Row>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </ActivityContent>
  );
}
