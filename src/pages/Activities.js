import React from 'react';
import styled from 'styled-components';
import ActivitiesTab from '../components/ActivitiesTab/ActivitiesTab';

import { LayoutContainer } from '../components/styled-components/utilities'


export default function Activities(props) {
    return (
        <LayoutContainer>
            <ActivitiesTab rows={3} />
        </LayoutContainer>
    );
}

