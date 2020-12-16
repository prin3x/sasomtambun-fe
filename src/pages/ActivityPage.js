import React, { Fragment, useEffect, useState } from 'react';
import { ActivityContent } from '../components/styled-components/utilities';
import styled from 'styled-components';
import { Carousel, Button, Input, Form, Modal } from 'antd';
import UploadPictures from '../components/UploadPictures/UploadPictures';
import axios from '../config/axios';
import { useParams } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';
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
  const [activity, setActivity] = useState();
  const [showSubmit, setShowSubmit] = useState(false);
  const { id } = useParams();
  const [subImageUrls, setSubImageUrls] = useState();
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/activity/${id}`);
      return setActivity(data);
    })();
    return;
  }, [id]);

  const onFinish = async (values) => {
    try {
      const result = await axios.post(`/proof/${id}`, {
        description: values.description,
        image_urls: subImageUrls,
      });
      if (result.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      handleError(error);
    }
  };

  function handleError(msg) {
    Modal.error({
      title: 'Error Unauthorized',
      icon: <CloseCircleOutlined />,
      content: msg.message,
      okText: 'Ok',
    });
  }

  return (
    <ActivityContent backgroundColor={'rgba(251, 233, 140, 0.2)'}>
      {activity ? (
        <Fragment>
          <TitleWithMargin color='#000'>{activity?.title}</TitleWithMargin>
          <SinglePageLayout>
            <ContentOnLeftSide>
              <Carousel effect='fade' autoplay>
                <CarouselContainerInPage>
                  <ImageContainer
                    src={activity.main_image_url}
                    alt='main image'
                  />
                </CarouselContainerInPage>
                {activity.sub_image_urls ? (
                  activity.sub_image_urls.map((image) => (
                    <CarouselContainerInPage key={image}>
                      <ImageContainer src={image} alt='' />
                    </CarouselContainerInPage>
                  ))
                ) : (
                  <CarouselContainerInPage></CarouselContainerInPage>
                )}
              </Carousel>
              <RuleContainer>
                <h2>กติกา</h2>
                <Rules>{activity?.content}</Rules>
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
                <PointsContainer>{activity?.given_points}</PointsContainer>
                {showSubmit ? (
                  <Form onFinish={onFinish}>
                    <Form.Item name='description'>
                      <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name='proof' label='อัพโหลดหลักฐาน'>
                      <UploadPictures
                        setSubImageUrls={setSubImageUrls}
                        route='proof'
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType='submit'>ส่งหลักฐาน</Button>
                    </Form.Item>
                  </Form>
                ) : (
                  <Button onClick={() => setShowSubmit(true)}>
                    ส่งหลักฐาน
                  </Button>
                )}
              </SubmitArea>
            </SubmitProofContainerOnRight>
          </SinglePageLayout>
        </Fragment>
      ) : null}
    </ActivityContent>
  );
}
