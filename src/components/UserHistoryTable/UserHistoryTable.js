import { Table, Tag } from 'antd';
import { Fragment } from 'react';
import styled from 'styled-components';
import './UserHistoryTable.less';

const ActivityNameContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const columns = [
  {
    title: 'กิจกรรมที่เข้าร่วม',
    dataIndex: 'activity',
    key: 'activity',
    render: (activity) => (
      <ActivityNameContainer>{activity}</ActivityNameContainer>
    ),
  },
  {
    title: 'Point ที่ได้รับ',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Fragment>
        <Tag
          color={
            status === 'อนุมัติ'
              ? 'green'
              : status === 'รอการอนุมัติ'
              ? 'blue'
              : 'red'
          }
          key={status}
        >
          {status.toUpperCase()}
        </Tag>
      </Fragment>
    ),
  },
  {
    title: 'เหตุผลที่ไม่ผ่าน',
    dataIndex: 'remark',
    key: 'remark',
  },
];

const dataSource = [
  {
    key: '1',
    activity: 'เทใจเพื่อน้อง 1',
    point: 250,
    status: 'รอการอนุมัติ',
    remark: '',
  },
  {
    key: '2',
    activity: 'เทใจเพื่อน้อง 1',
    point: 250,
    status: 'ไม่ผ่าน',
    remark: 'ภาพไม่ครบ',
  },
  {
    key: '3',
    activity: 'เทใจเพื่อน้อง 2',
    point: 500,
    status: 'อนุมัติ',
    remark: '',
  },
];

export default function UserHistoryTable() {
  return <Table dataSource={dataSource} columns={columns} />;
}
