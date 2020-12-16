import React, { Fragment, useEffect, useState } from 'react';
import { Button, Progress, Spin } from 'antd';
import {
  ActivityContent,
  MainSectionHeader,
  RowPreviewWrapper,
  ItemPreviewWrapper,
  ImagePreviewWrapper,
  TitlePreview,
} from '../styled-components/utilities';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../config/axios';
import { LoadingOutlined } from '@ant-design/icons';

export default function PreviewDonations() {
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState();
  let { pathname } = useLocation();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `/donation/?limit=${pathname === '/donations' ? null : 6}`
        );
        setDonations(data);
        return setLoading(false);
      } catch (error) {
        return setLoading(false);
      }
    })();

    return;
  }, [pathname]);

  const LoadingIcon = <LoadingOutlined style={{ fontSize: '5rem' }} spin />;

  return (
    <ActivityContent>
      <MainSectionHeader>บริจาค</MainSectionHeader>
      <RowPreviewWrapper>
        {donations ? (
          donations.map((item) => (
            <ItemPreviewWrapper key={item._id}>
              <ImagePreviewWrapper
                src={item.main_image_url}
                alt='placeholder'
              />
              <TitlePreview>{item.title}</TitlePreview>
              <p>{item.short_desc}</p>
              <span>ร่วมบริจาคแล้ว {item.participants} คน</span>
              <Link to={`/donations/${item._id}`}>
                <Button type='primary' shape='round'>
                  เข้าร่วม
                </Button>
              </Link>
              <Progress
                strokeColor={{
                  '0%': '#ffc808',
                  '100%': '#f78f1e',
                }}
                percent={Math.round(
                  (item?.collect_points / item?.target_points) * 100
                )}
              />
            </ItemPreviewWrapper>
          ))
        ) : (
          <Fragment>
            <Spin indicator={LoadingIcon} spinning={loading} />
          </Fragment>
        )}
      </RowPreviewWrapper>
    </ActivityContent>
  );
}
