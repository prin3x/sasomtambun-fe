import { Fragment, useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import axios from '../../config/axios';
const columns = [
  {
    title: 'โครงการที่ได้บริจาค',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Point ที่บริจาค',
    dataIndex: 'donate_points',
    key: 'donate_points',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Fragment>
        <Tag color={status === 'ส่งมอบแล้ว' ? 'green' : 'blue'} key={status}>
          {status?.toUpperCase()}
        </Tag>
      </Fragment>
    ),
  },
];

export default function UserDonationHistory() {
  const [pastDonations, setPastDonations] = useState();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/donate/mydonation`);
      return setPastDonations(data);
    })();
    return;
  }, []);

  const rowData =
    pastDonations &&
    pastDonations.map((item) => {
      return {
        id: item._id,
        title: item.donation?.title,
        donate_points: item.donate_points,
        status: item.donation?.status,
      };
    });
  return (
    <Fragment>
      <Table
        dataSource={rowData ? rowData : null}
        columns={columns}
        rowKey={(record) => record.id}
      />
    </Fragment>
  );
}
