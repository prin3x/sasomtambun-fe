import React from 'react';
import PreviewDonations from '../components/PreviewDonations/PreviewDonations';
import { LayoutContainer } from '../components/styled-components/utilities'

export default function Donations(props) {
    return (
        <LayoutContainer>
            <PreviewDonations rows={3} />
        </LayoutContainer>
    );
}
