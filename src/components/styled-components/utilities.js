import styled from 'styled-components';

export const ActivityContent = styled.div`
  padding: 5rem 5rem;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  @media screen and (max-width: 1280px) {
    padding: 2rem 2rem;
    .ant-row {
      .ant-col {
        margin: 0 2.5rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    padding: 2rem 5rem;
    .ant-row {
      .ant-col {
        margin: 1rem 0.75rem;
      }
    }
  }
  @media screen and (max-width: 770px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 380px) {
    padding: 2rem 2rem;
  }
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.color};
`;
export const Heading2 = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

export const ProgressContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
export const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2rem;
  color: ${(props) => props.color};
  @media (max-width: 1300px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 450px) {
  }
`;

export const Lead = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${(props) => props.color};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.75rem;
  color: ${(props) => props.color};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  display: block;
  min-height: 4rem;
`;

export const InputInfo = styled.p`
  font-size: 1.25rem;
  display: block;
  height: 2rem;
`;

export const LayoutContainer = styled.section`
  width: 100vw;
  height: 100vh;
`;

export const MainSectionHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-left: auto;
  @media (max-width: 1300px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const formItemLayout = {
  labelAlign: 'left',
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

export const NavBarInsideContentManagement = styled.div`
  align-self: flex-end;
  button.ant-btn {
    padding: 0.75rem;
    border-radius: 4px;
    background: #ffc808;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const ButtonStyle = {
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  color: '#fff',
};

export const IconStyle = { fontSize: '1rem', marginRight: '1rem' };

export const RowPreviewWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ItemPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5rem;
  margin: 0 3rem 1rem;
`;

export const ImagePreviewWrapper = styled.img`
  width: 12.5rem;
  height: 12.5rem;
`;

export const TitlePreview = styled.h3`
  margin-top: 1rem;
`;

export const dateFormat = 'YYYY/MM/DD';

export const ContentEditorFlexWrapper = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  .ant-input {
    border-radius: 2px;
  }
  .ant-form-item-control-input-content {
    .ant-select-selector,
    .ant-picker {
      border-radius: 2px;
      height: 100%;
    }
  }
  .ant-upload {
    width: 10rem;
    height: 10rem;
  }

  textarea.ant-input {
    max-width: 60rem;
    width: 50rem;
    height: 7.5rem;
  }
  .ant-input.desc_textarea {
    height: 10rem;
  }
`;
