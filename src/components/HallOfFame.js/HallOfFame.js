import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import styled from 'styled-components';
import {
  ActivityContent,
  RowPreviewWrapper,
} from '../styled-components/utilities';

const BoxContentWrapper = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const mocks = [
  {
    name: 'คุณสุภกิจ',
    title: 'ยอดขายโตขึ้น 300%',
    description: 'ยินดีกับยอดขายในเดือนที่ผ่านมา',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxODI4MTB8fGVufDB8fHw%3D&w=1000&q=80',
  },
  {
    name: 'คุณชัย',
    title: 'ยอดขายโตขึ้น 300%',
    description: 'ยินดีกับยอดขายในเดือนที่ผ่านมา',
    avatar: 'https://thumbs.dreamstime.com/z/young-man-portrait-18441696.jpg',
  },
  {
    name: 'คุณแก้ว',
    title: 'ยอดขายโตขึ้น 300%',
    description: 'ยินดีกับยอดขายในเดือนที่ผ่านมา',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80',
  },
];

export default function HallOfFame() {
  return (
    <ActivityContent backgroundColor={'#f6e78b'} style={{ padding: '2rem' }}>
      <RowPreviewWrapper>
        {mocks
          ? mocks.map((each) => (
              <BoxContentWrapper key={each.name}>
                <Avatar size={128} src={each.avatar} />
                <Card
                  style={{
                    width: 250,
                    borderRadius: '10px',
                    marginTop: '1rem',
                  }}
                >
                  <h2>{each.name}</h2>
                  <p>{each.description}</p>
                </Card>
              </BoxContentWrapper>
            ))
          : null}
      </RowPreviewWrapper>
    </ActivityContent>
  );
}
