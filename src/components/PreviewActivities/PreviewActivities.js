import React, { Fragment, useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import {
  ActivityContent,
  RowPreviewWrapper,
  ItemPreviewWrapper,
  ImagePreviewWrapper,
  TitlePreview,
} from '../styled-components/utilities';
import axios from '../../config/axios';
import { Link, useLocation } from 'react-router-dom';
import { errorNotification } from '../antdUtils/notification';
import { LoadingOutlined } from '@ant-design/icons';
import Spinner from '../Spinner/Spinner';

export default function PreviewActivities({ category }) {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState();
  let { pathname } = useLocation();

  useEffect(() => {
    (async function () {
      try {
        if (category) {
          const { data } = await axios.get(
            `/activity/?category=${category}&limit=${
              pathname === '/activities' ? null : 6
            }`
          );
          setLoading(false);
          return setActivities(data);
        } else {
          const { data } = await axios.get(
            `/activity/?limit=${pathname === '/activities' ? null : 6}`
          );
          setLoading(false);
          return setActivities(data);
        }
      } catch (error) {
        return errorNotification(error);
      }
    })();

    return;
  }, [category, pathname]);

  const LoadingIcon = <LoadingOutlined style={{ fontSize: '5rem' }} spin />;

  return (
    <ActivityContent backgroundColor={'rgba(251, 233, 140, 0.2);'}>
      <RowPreviewWrapper>
        {activities ? (
          activities.map((item) => (
            <ItemPreviewWrapper key={item._id}>
              <ImagePreviewWrapper
                src={item.main_image_url}
                alt='placeholder'
              />
              <TitlePreview>{item.title}</TitlePreview>
              <p>{item.short_desc}</p>
              <span>เข้าร่วมแล้ว {item.participants} คน</span>
              <Link to={`/activities/${item._id}`}>
                <Button type='primary' shape='round'>
                  เข้าร่วม
                </Button>
              </Link>
            </ItemPreviewWrapper>
          ))
        ) : (
          <Spinner />
        )}
      </RowPreviewWrapper>
    </ActivityContent>
  );
}
