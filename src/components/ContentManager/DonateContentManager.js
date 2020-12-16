import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table, Tag, Typography } from 'antd';
import Column from 'antd/lib/table/Column';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../config/axios';
import {
  Heading,
  IconStyle,
  NavBarInsideContentManagement,
} from '../styled-components/utilities';

export default function DonateContentManager() {
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState();
  const handleDelete = async (id) => {
    await axios.delete(`/donation/${id}`);
    setDonations(donations.filter((el) => el._id !== id));
  };
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get('/donation/?limit=20');
        setDonations(data);
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
          <Link to='/admin/edit/donation'>+ สร้างกิจกรรม</Link>
        </Button>
      </NavBarInsideContentManagement>
      <Table
        dataSource={donations}
        rowKey={(item) => item._id}
        loading={loading}
      >
        <Column title='กิจกรรม' dataIndex='title' key='title' />
        <Column
          title='สถานะ'
          dataIndex='status'
          key='status'
          render={(status) => (
            <Fragment>
              <Tag
                color={status === 'กำลังดำเนินการ' ? '#f78f1e' : '#009979'}
                key={status}
              >
                {status}
              </Tag>
            </Fragment>
          )}
        />
        <Column
          title='ยอดบริจาค'
          dataIndex='collect_points'
          key='collect_points'
        />
        <Column
          title='เป้าหมาย'
          dataIndex='target_points'
          key='target_points'
        />
        <Column
          title='ยอดผู้เข้าร่วม'
          dataIndex='participants'
          key='participants'
        />
        <Column
          title=''
          render={(item) => (
            <Fragment>
              <Link to={`/admin/edit/donation/${item._id}`}>
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
