import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
margin-top: 6rem;
    width: 100%;
    height: 100%;
    padding: 5rem;
    display: flex;
    justify-content: center;
    background: rgb(250, 140, 15);
`
const Heading = styled.h1`
  font-size: 1.5rem;
`;

export default function Footer(props) {
    return (
        <FooterContainer>
            <Heading>Copyright &copy; 2020</Heading>
        </FooterContainer>
    );
}

