/* eslint-disable max-len */
import React from 'react';
import { Container, Menu, Dropdown, Image, Input, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {

    return (
        <Menu borderless>
          <Container>
            <Image className="logo" src="//cdn.shopify.com/s/files/1/0156/6146/t/105/assets/logo.svg?7888821502835704119\"/>
          </Container>
          <Container className ="top-menu">
            <Menu.Item position="left">
              <Dropdown item text="MENS">
                <Dropdown.Menu>
                  <Dropdown.Item>NEW RELEASES</Dropdown.Item>
                  <Dropdown.Item>OUTLET</Dropdown.Item>
                  <Dropdown.Item>VIEW ALL PRODUCTS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item position="left">
              <Dropdown item text="WOMENS">
                <Dropdown.Menu>
                  <Dropdown.Item>NEW RELEASES</Dropdown.Item>
                  <Dropdown.Item>OUTLET</Dropdown.Item>
                  <Dropdown.Item>VIEW ALL PRODUCTS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item fitted>ACCESSORIES</Menu.Item>
          </Container>
          <Container>
            <Menu.Item><Input className="bar" transparent size="small" placeholder="SEARCH"/></Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
            <Menu.Item><Icon name="user outline"/></Menu.Item>
            <Menu.Item><Icon name="shopping bag"/>0</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
