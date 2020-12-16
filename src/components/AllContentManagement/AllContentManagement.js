import { Button, Typography } from 'antd';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NavBarInsideContentManagement,
  Heading3,
  Heading,
} from '../styled-components/utilities';

export default function AllContentManagement() {
  return (
    <Fragment>
      <Heading color='#f78f1e'>จัดการคอนเท้นท์</Heading>
      <NavBarInsideContentManagement>
        <Button>
          <Link to='/admin/edit'>+ สร้างกิจกรรม</Link>
        </Button>
      </NavBarInsideContentManagement>
    </Fragment>
  );
}
