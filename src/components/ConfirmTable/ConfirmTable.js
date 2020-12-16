import { EditOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import Column from 'antd/lib/table/Column';
import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ModalForComfirmation from '../ModalForComfirmation/ModalForComfirmation';
import { Heading } from '../styled-components/utilities';
import axios from '../../config/axios';
import moment from 'moment';
const ProofWrapper = styled.div`
  margin: 1rem 5rem;
`;

const dateFormat = 'DD/MM/YYYY';

const RemarkWrapper = styled.div`
  max-width: 6rem;
`;

export default function ConfirmTable() {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [successPublish, setSuccessPublish] = useState(false);
  const [unconfirmList, setUnconfirmList] = useState();
  const history = useHistory();
  const [selectUnconfirmList, setSelectUnconfirmList] = useState();

  const handleCheck = (description, image_urls, _id, user_id, status) => {
    setModalVisible(true);
    setSelectUnconfirmList({ description, image_urls, _id, user_id, status });
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get('/proof/');
        setUnconfirmList(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();

    return;
  }, []);

  return (
    <Fragment>
      <Heading color='#f78f1e'>อนุมัติกิจกรรม</Heading>
      <Table
        dataSource={unconfirmList}
        loading={loading}
        rowKey={(item) => item._id}
      >
        <Column
          title='กิจกรรม'
          render={(item) => item?.activity?.title}
          key='title'
        />
        <Column
          title='รางวัล/Point'
          render={(item) => item?.activity?.given_points}
          key='given_points'
        />
        <Column
          title='ผู้ส่ง'
          render={(item) => item?.user?.email}
          key='email'
        />
        <Column
          title='ประเภท'
          render={(item) => item?.activity?.category}
          key='category'
        />
        <Column
          title='สถานะ'
          render={(item) => (
            <Fragment>
              <Tag
                color={
                  item.status === 'rejected'
                    ? '#c24914'
                    : item.status === 'success'
                    ? '#009979'
                    : '#bedcfa'
                }
                key={item.status}
              >
                {item.status}
              </Tag>
            </Fragment>
          )}
          key='status'
        />
        <Column
          title='หมายเหตุ'
          render={(item) => {
            return <RemarkWrapper>{item.remark}</RemarkWrapper>;
          }}
          key='remark'
        />
        <Column
          title='วันที่ส่ง'
          render={(item) => {
            return moment(item?.createdAt).format(dateFormat);
          }}
          key='createdAt'
          defaultSortOrder='ascend'
          sorter={(a, b) => moment(b.createdAt) - moment(a.createdAt)}
        />

        <Column
          title=''
          render={(item) => (
            <Fragment>
              <EditOutlined
                style={{ fontSize: '1rem', marginRight: '1rem' }}
                onClick={() =>
                  handleCheck(
                    item.description,
                    item.image_urls,
                    item._id,
                    item.user._id,
                    item.status
                  )
                }
              />
            </Fragment>
          )}
          key='check'
        />
      </Table>
      <ModalForComfirmation
        visible={modalVisible}
        setModalVisible={setModalVisible}
        setUnconfirmList={setUnconfirmList}
        unconfirmList={unconfirmList}
        {...selectUnconfirmList}
      />
      <Modal title='Title' footer={null} visible={successPublish}>
        <p>Congrat! Success! Well Done!</p>
      </Modal>
    </Fragment>
  );
}
