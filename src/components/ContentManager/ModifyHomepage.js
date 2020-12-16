import { Fragment, useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import {
  Heading,
  NavBarInsideContentManagement,
} from '../styled-components/utilities';
import axios from '../../config/axios';
import { errorNotification } from '../antdUtils/notification';
import { Button } from 'antd';

const ContentWrapper = styled.div`
  width: calc(100% - 12%);
  background: #fff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const HeadingAndIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Heading2 = styled.h2`
  font-weight: 500;
`;

const ImageWrapper = styled.img`
  width: 80%;
  height: 20rem;
  margin-bottom: 2rem;
`;

export default function ModifyHomepage() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [carousel, setCarousel] = useState();
  const toggleUpdate = (id) => {
    history.push(`${url}/edit/${id}`);
  };
  const deleteCarousel = async (id) => {
    try {
      await axios.delete(`/homepage/${id}`);
      setCarousel(carousel.filter((image) => image._id !== id));
    } catch (error) {
      errorNotification(error);
    }
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get('/homepage/');
        if (data) setCarousel(data);
        return;
      } catch (error) {
        errorNotification(error);
        return;
      }
    })();
    return;
  }, []);

  return (
    <Fragment>
      <Heading color='#f78f1e'>จัดการแบนเนอร์</Heading>
      <NavBarInsideContentManagement>
        <Button>
          <Link to={`${url}/edit`}>+ สร้างแบนเนอร์ใหม่</Link>
        </Button>
      </NavBarInsideContentManagement>
      {carousel?.length ? (
        carousel.map((image) => (
          <ContentWrapper key={image._id}>
            <HeadingAndIconWrapper>
              <Heading2>{image.title}</Heading2>
              <div>
                <EditOutlined
                  onClick={() => toggleUpdate(image._id)}
                  style={{ fontSize: '2rem', marginRight: '2rem' }}
                />
                <DeleteOutlined
                  onClick={() => deleteCarousel(image._id)}
                  style={{ fontSize: '2rem' }}
                />
              </div>
            </HeadingAndIconWrapper>
            <ImageWrapper src={image.image_desktop_url} />
          </ContentWrapper>
        ))
      ) : (
        <Link to={`${url}/edit`}>
          <ContentWrapper>
            You haven't created any carousel images
          </ContentWrapper>
        </Link>
      )}
    </Fragment>
  );
}
