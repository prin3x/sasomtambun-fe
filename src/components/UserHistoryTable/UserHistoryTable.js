import { Table, Tag } from 'antd';
import axios from '../../config/axios';
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import './UserHistoryTable.less';

const ActivityNameContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const columns = [
  {
    title: 'กิจกรรมที่เข้าร่วม',
    dataIndex: 'title',
    key: 'title',
    render: (activity) => (
      <ActivityNameContainer>{activity}</ActivityNameContainer>
    ),
  },
  {
    title: 'Point ที่ได้รับ',
    dataIndex: 'given_points',
    key: 'given_points',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Fragment>
        <Tag
          color={
            status === 'success'
              ? 'green'
              : status === 'pending'
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

export default function UserHistoryTable() {
  const [prooHistory, setProofHistory] = useState();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`/proof/myproof`);
      return setProofHistory(data);
    })();
    return;
  }, []);

  const rowData =
    prooHistory &&
    prooHistory.map((proof) => {
      return {
        id: proof?._id,
        title: proof?.activity?.title,
        given_points: proof?.activity?.given_points,
        status: proof?.status,
        remark: proof?.remark,
      };
    });

  return (
    <Table
      columns={columns}
      dataSource={rowData ? rowData : null}
      rowKey={(record) => record.id}
    />
  );
}
