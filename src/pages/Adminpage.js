import {
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu, Typography } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { Children, useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import AllContentManagement from '../components/AllContentManagement/AllContentManagement';
import ConfirmTable from '../components/ConfirmTable/ConfirmTable';
import ContentEditor from '../components/ContentEditor/ContentEditor';
import DonationEditor from '../components/ContentEditor/DonationEditor';
import EditHomepage from '../components/ContentEditor/EditHomepage';
import ActContentManager from '../components/ContentManager/ActContentManager';
import DonateContentManager from '../components/ContentManager/DonateContentManager';
import ModifyHomepage from '../components/ContentManager/ModifyHomepage';

const AdminComponentWrapper = styled.div`
  display: flex;
  padding: 5rem 1rem;
`;

const MenuWrapper = styled.div`
  padding: 0 0rem;
  .ant-menu-item {
    height: 2rem;
  }
  .ant-menu-item-selected {
  }
`;

const ContentWrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
`;

export default function AdminPage() {
  const { path, url } = useRouteMatch();

  return (
    <AdminComponentWrapper>
      <MenuWrapper>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
        >
          <SubMenu key='sub1' icon={<MailOutlined />} title='จัดการคอนเทนท์'>
            <Menu.Item key='1'>
              <Link to={`${path}/activities`}>กิจกรรม</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to={`${path}/donations`}>บริจาค</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='3' icon={<PieChartOutlined />}>
            <Link to={`${path}/confirm-request`}>อนุมัติกิจกรรม</Link>
          </Menu.Item>
          <Menu.Item key='4' icon={<PieChartOutlined />}>
            <Link to={`${path}/homepage`}>จัดการหน้าแรก</Link>
          </Menu.Item>
        </Menu>
      </MenuWrapper>

      <ContentWrapper>
        <Switch>
          <Route
            exact
            path={`${url}/activities`}
            component={ActContentManager}
          />
          <Route
            exact
            path={`${url}/donations`}
            component={DonateContentManager}
          />
          <Route
            exact
            path={`${url}/confirm-request`}
            component={ConfirmTable}
          />
          <Route exact path={`${url}/homepage`} component={ModifyHomepage} />
          <Route exact path={`${url}/homepage/edit`} component={EditHomepage} />
          <Route
            exact
            path={`${url}/homepage/edit/:id`}
            component={EditHomepage}
          />
          <Route
            exact
            path={`${url}/edit/activity`}
            component={ContentEditor}
          />
          <Route
            exact
            path={`${url}/edit/activity/:id`}
            component={ContentEditor}
          />
          <Route
            exact
            path={`${url}/edit/donation`}
            component={DonationEditor}
          />
          <Route
            exact
            path={`${url}/edit/donation/:id`}
            component={DonationEditor}
          />
        </Switch>
      </ContentWrapper>
    </AdminComponentWrapper>
  );
}
