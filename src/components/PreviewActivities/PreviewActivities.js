import React from 'react';
import { Row, Col, Button } from 'antd';
import {
  ActivityContent,
  Image,
  Title,
  Paragraph,
} from '../styled-components/utilities';

export default function PreviewActivities({ rows }) {
  const colsArray = Array(rows ? rows : 1)
    .fill()
    .map((_, i) => i + 1);

  return (
    <ActivityContent backgroundColor={'rgba(251, 233, 140, 0.2);'}>
      <Row justify='center'>
        {colsArray &&
          colsArray.map((col, ind) => (
            <React.Fragment key={ind}>
              <Col xl={6} lg={{ span: 6, offset: 0 }} md={11} sm={24}>
                <Image src='https://via.placeholder.com/300x290' alt='' />
                <Row justify='center'>
                  <Title>ของขวัญปีใหม่</Title>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, alias! Lorem ipsum
                  </Paragraph>
                  <Button type='primary' shape='round'>
                    เข้าร่วม
                  </Button>
                </Row>
              </Col>
              <Col
                xl={{ span: 6, offset: 2 }}
                lg={{ span: 6, offset: 2 }}
                md={11}
                sm={24}
              >
                <Image src='https://via.placeholder.com/300x290' alt='' />
                <Row justify='center'>
                  <Title>รีไซเคิลขวด</Title>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, Lorem ipsum dolor
                  </Paragraph>
                  <Button type='primary' shape='round'>
                    เข้าร่วม
                  </Button>
                </Row>
              </Col>
              <Col
                xl={{ span: 6, offset: 2 }}
                lg={{ span: 6, offset: 2 }}
                md={0}
                sm={0}
              >
                <Image src='https://via.placeholder.com/300x290' alt='' />
                <Row justify='center'>
                  <Title>สร้างเสริมสุขภาพ</Title>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, alias! Lorem ipsum,
                  </Paragraph>
                  <Button type='primary' shape='round'>
                    เข้าร่วม
                  </Button>
                </Row>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </ActivityContent>
  );
}
