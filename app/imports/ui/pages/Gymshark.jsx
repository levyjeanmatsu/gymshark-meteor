import React from 'react';
import TopMenu from '../Components/TopMenu';
import MiddleMenu from '../Components/MiddleMenu';
import FooterMenu from '../Components/FooterMenu';

export default class Gymshark extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}
