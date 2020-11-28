import { Fragment } from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'โครงการที่ได้บริจาค',
    dataIndex: 'donation',
    key: 'donation',
  },
  {
    title: 'Point ที่บริจาค',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Fragment>
        <Tag color={status === 'ส่งมอบแล้ว' ? 'green' : 'blue'} key={status}>
          {status.toUpperCase()}
        </Tag>
      </Fragment>
    ),
  },
];

const dataSource = [
  {
    key: '1',
    donation: 'เทใจเพื่อน้อง 1',
    point: 250,
    status: 'ส่งมอบแล้ว',
    remark: '',
  },
  {
    key: '2',
    donation: 'เทใจเพื่อน้อง 1',
    point: 250,
    status: 'อยู่ระหว่างการระดมทุน',
    remark: 'ภาพไม่ครบ',
  },
];

export default function UserDonationHistory() {
  return (
    <Fragment>
      <Table dataSource={dataSource} columns={columns} />
    </Fragment>
  );
}
