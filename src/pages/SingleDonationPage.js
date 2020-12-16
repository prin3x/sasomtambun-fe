import React, { useEffect, useState, Fragment } from 'react';
import { ActivityContent } from '../components/styled-components/utilities';
import styled from 'styled-components';
import { Carousel, Button, Input, Progress } from 'antd';
import UploadPictures from '../components/UploadPictures/UploadPictures';
import axios from '../config/axios';
import { Redirect, useParams } from 'react-router-dom';
import DonateModal from '../components/DonateModal/DonateModal';
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

export default function SingleDonationPage(props) {
  const [donation, setDonation] = useState();
  const [pop, setPop] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/donation/${id}`);
      return setDonation(data);
    })();

    return;
  }, [id]);

  const popModal = () => {
    setPop(true);
  };

  return (
    <ActivityContent backgroundColor={'rgba(251, 233, 140, 0.2)'}>
      {donation ? (
        <Fragment>
          <TitleWithMargin color='#000'>{donation?.title}</TitleWithMargin>
          <SinglePageLayout>
            <ContentOnLeftSide>
              <Carousel effect='fade'>
                <CarouselContainerInPage>
                  <ImageContainer
                    src={donation.main_image_url}
                    alt='main image'
                  />
                </CarouselContainerInPage>
                {donation.sub_image_urls
                  ? donation.sub_image_urls.map((image) => (
                      <CarouselContainerInPage>
                        <ImageContainer src={image} alt='' />
                      </CarouselContainerInPage>
                    ))
                  : null}
              </Carousel>
              <RuleContainer>
                <h2>กติกา</h2>
                <Rules>{donation?.content}</Rules>
                <h2>ระยะเวลาโครงการ</h2>
                <Rules>เปิดใช้งานประมาณช่วงเดือนกรกฎาคม 2564</Rules>
                <h2>หลักฐานที่ต้องแสดง</h2>
                <Rules>พื้นที่ก่อสร้างสวนซอยหน้าวัดหัวลำโพง เขตบางรัก</Rules>
              </RuleContainer>
            </ContentOnLeftSide>
            <SubmitProofContainerOnRight>
              <TitleContainer>
                <InpageTitle fontWeight={500} color={'#fff'}>
                  ร่วมบริจาค
                </InpageTitle>
              </TitleContainer>
              <SubmitArea>
                <Rules>เป้าหมายสำหรับการบริจาคครั้งนี้</Rules>
                <PointsContainer>
                  {donation?.collect_points}/{donation?.target_points}
                </PointsContainer>
                <Progress
                  strokeColor={{
                    '0%': '#ffc808',
                    '100%': '#f78f1e',
                  }}
                  percent={Math.round(
                    (donation?.collect_points / donation?.target_points) * 100
                  )}
                />
                <Button type='primary' onClick={popModal}>
                  บริจาค
                </Button>
                <DonateModal pop={pop} setPop={setPop} />
              </SubmitArea>
            </SubmitProofContainerOnRight>
          </SinglePageLayout>
        </Fragment>
      ) : null}
    </ActivityContent>
  );
}
