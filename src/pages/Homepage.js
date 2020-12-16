import { Divider } from 'antd';
import React from 'react';
import ActivitiesTab from '../components/ActivitiesTab/ActivitiesTab';
import CarouselContent from '../components/Carousel/Carousel';
import HallOfFame from '../components/HallOfFame.js/HallOfFame';
import PreviewDonations from '../components/PreviewDonations/PreviewDonations';

export default function Homepage({ role }) {
  return (
    <React.Fragment>
      <CarouselContent />
      <ActivitiesTab />
      <Divider style={{ margin: '0' }} />
      <HallOfFame />
      <Divider style={{ margin: '0' }} />
      <PreviewDonations />
    </React.Fragment>
  );
}
