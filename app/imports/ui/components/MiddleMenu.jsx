import React from 'react';
import { Header, Grid, List, Button } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid relaxed verticalAlign="middle" className="main-background" columns="equal" textAlign="centered">
          <Grid.Row>
            <Grid.Column>
              <List className="inside">
                <List.Item><Header as="h1">POWER YOUR PERFORMANCE</Header></List.Item>
                <List.Item> All the Energy you Need.</List.Item>
                <List.Item> <Button color='black'>EXPLORE</Button></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column> </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
