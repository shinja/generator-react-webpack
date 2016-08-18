'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

require('styles/MyAwesomeReact.css');

let MyAwesomeReactComponent = (props) => (
  <div className="myawesomereact-component">
        <RaisedButton label="Default" />
  </div>
);

MyAwesomeReactComponent.displayName = 'MyAwesomeReactComponent';

// Uncomment properties you need
// MyAwesomeReactComponent.propTypes = {};
// MyAwesomeReactComponent.defaultProps = {};

export default MyAwesomeReactComponent;
