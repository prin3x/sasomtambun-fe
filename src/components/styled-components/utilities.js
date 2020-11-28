import styled from 'styled-components';

export const ActivityContent = styled.div`
  padding: 2rem 15rem;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  @media screen and (max-width: 1280px) {
    padding: 2rem 5rem;
  }
  @media screen and (max-width: 770px) {
    padding: 2rem;
  }
  @media screen and (max-width: 380px) {
    padding: 2rem 0;
  }
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const Heading = styled.h1`
  font-size: 2rem;
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
