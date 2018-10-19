/* eslint-disable max-len,react/jsx-no-comment-textnodes */

import React from 'react';
import { Grid, Menu, Image, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Menu text vertical>
                <Menu.Item header>GYMSHARK CENTRAL</Menu.Item>
                // eslint-disable-next-line max-len
                <Menu.Item><Image src="//cdn.shopify.com/s/files/1/0156/6146/t/105/assets/logo-grey.svg?7888821502835704119"/>Click to visit</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              <Menu text vertical>
                <Menu.Item header>CONTACT US</Menu.Item>
                <Menu.Item>Email Support</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              <Menu text vertical>
                <Menu.Item header>MY ACCOUNT</Menu.Item>
                <Menu.Item>Login</Menu.Item>
                <Menu.Item>Register</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              <Menu text vertical>
                <Menu.Item header>SIGN UP FOR OUR NEWSLETTER</Menu.Item>
                <Menu.Item><Input placeholder="Your email address"/></Menu.Item>
              </Menu>

            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
