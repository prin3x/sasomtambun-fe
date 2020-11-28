import React from 'react';
import { ActivityContent } from '../components/styled-components/utilities';
import styled from 'styled-components';
import { Carousel, Button, Input } from 'antd';
import { UploadPictures } from '../components/Upload/Upload';
const SinglePageLayout = styled.div`
  display: flex;
  padding: 0 5rem;
  justify-content: space-between;
`;

const ContentOnLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
`;

const SubmitProofContainerOnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background: #fb9a2b;
  border: 1px solid #fb9a2b;
  border-radius: 15px;
`;

const TitleContainer = styled.div`
  padding: 1rem;
  width: 100%;
  text-align: center;
`;

const ImageContainer = styled.img`
  width: 100%;
  max-height: 30rem;
`;

const CarouselContainerInPage = styled.section`
  background: #999;
`;

const RuleContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const Rules = styled.p`
  font-size: 1.1rem;
`;

const TitleWithMargin = styled.h1`
  font-size: 2rem;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || '#000'};
  margin-left: 4rem;
`;
const InpageTitle = styled.h1`
  font-size: 2rem;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || '#000'};
`;

const SubmitArea = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 0 0 15px 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PointsContainer = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fb9a2b;
  text-align: center;
`;

export default function ActivityPage(props) {
  const [showSubmit, setShowSubmit] = React.useState(false);

  return (
    <ActivityContent backgroundColor={'rgba(251, 233, 140, 0.2)'}>
      <TitleWithMargin color='#000'>ของขวัญปีใหม่</TitleWithMargin>
      <SinglePageLayout>
        <ContentOnLeftSide>
          <Carousel effect='fade'>
            <CarouselContainerInPage>
              <ImageContainer
                src='https://via.placeholder.com/400x325'
                alt=''
              />
            </CarouselContainerInPage>
            <CarouselContainerInPage>
              <ImageContainer
                src='https://via.placeholder.com/400x325'
                alt=''
              />
            </CarouselContainerInPage>
            <CarouselContainerInPage>
              <ImageContainer
                src='https://via.placeholder.com/400x325'
                alt=''
              />
            </CarouselContainerInPage>
            <CarouselContainerInPage>
              <ImageContainer
                src='https://via.placeholder.com/400x325'
                alt=''
              />
            </CarouselContainerInPage>
          </Carousel>
          <RuleContainer>
            <h2>กติกา</h2>
            <Rules>
              ด้วยการเปลี่ยนพื้นที่ว่างซอยหน้าวัดหัวลำโพงเป็นพื้นที่สาธารณะ
              ซึ่งสวนแห่งนี้จะเป็นสวนที่เกิดจากความร่วมมือกันทุกภาคส่วน
              มาร่วมกันซื้อเครื่องเล่น เช่น ชิงช้า เครื่องออกกำลังกาย
              โต๊ะเก้าอี้ มอบให้สวนสาธารณะใหม่แห่งนี้กัน
            </Rules>
            <h2>ระยะเวลาโครงการ</h2>
            <Rules>เปิดใช้งานประมาณช่วงเดือนกรกฎาคม 2564</Rules>
            <h2>หลักฐานที่ต้องแสดง</h2>
            <Rules>พื้นที่ก่อสร้างสวนซอยหน้าวัดหัวลำโพง เขตบางรัก</Rules>
          </RuleContainer>
        </ContentOnLeftSide>
        <SubmitProofContainerOnRight>
          <TitleContainer>
            <InpageTitle fontWeight={500} color={'#fff'}>
              เข้าร่วมกิจกรรม
            </InpageTitle>
          </TitleContainer>
          <SubmitArea>
            <Rules>Point ที่จะได้รับในกิจกรรมนี้</Rules>
            <PointsContainer>268</PointsContainer>
            {showSubmit ? (
              <React.Fragment>
                <Input.TextArea rows={4} />
                <UploadPictures />
                <Button onClick={() => setShowSubmit(!true)}>ส่งหลักฐาน</Button>
              </React.Fragment>
            ) : (
              <Button onClick={() => setShowSubmit(true)}>ส่งหลักฐาน</Button>
            )}
          </SubmitArea>
        </SubmitProofContainerOnRight>
      </SinglePageLayout>
    </ActivityContent>
  );
}
