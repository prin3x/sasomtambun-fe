import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table, Tag, Typography } from 'antd';
import Column from 'antd/lib/table/Column';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/axios';
import {
  Heading,
  IconStyle,
  NavBarInsideContentManagement,
} from '../styled-components/utilities';

export default function ActContentManager() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState();
  const handleDelete = async (id) => {
    await axios.delete(`/activity/${id}`);
    setActivities(activities.filter((el) => el._id !== id));
  };
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get('/activity/');
        setActivities(data);
        return setLoading(false);
      } catch (error) {
        return setLoading(false);
      }
    })();

    return;
  }, []);

  return (
    <Fragment>
      <Heading color='#f78f1e'>จัดการคอนเท้นท์</Heading>
      <NavBarInsideContentManagement>
        <Button>
          <Link to='/admin/edit/activity'>+ สร้างกิจกรรม</Link>
        </Button>
      </NavBarInsideContentManagement>
      <Table
        dataSource={activities}
        rowKey={(item) => item._id}
        loading={loading}
      >
        <Column title='กิจกรรม' dataIndex='title' key='title' />
        <Column title='รางวัล' dataIndex='given_points' key='given_points' />
        <Column
          title='สถานะ'
          render={(item) => (
            <Fragment>
              <Tag
                color={item.status === 'กำลังดำเนินการ' ? '#f78f1e' : '#009979'}
                key={item.status}
              >
                {item.status}
              </Tag>
            </Fragment>
          )}
        />
        <Column title='ประเภท' dataIndex='category' key='category' />
        <Column
          title='จำนวนผู้เข้าร่วม'
          dataIndex='participants'
          key='participants'
        />
        <Column
          title=''
          render={(item) => (
            <Fragment>
              <Link to={`/admin/edit/activity/${item._id}`}>
                <EditOutlined style={IconStyle} />{' '}
              </Link>
              <DeleteOutlined
                style={IconStyle}
                onClick={() => handleDelete(item._id)}
              />
            </Fragment>
          )}
          key='editor'
        />
      </Table>
    </Fragment>
  );
}
