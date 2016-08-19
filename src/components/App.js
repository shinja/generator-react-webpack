require('font-awesome/scss/font-awesome.scss');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import DialogExampleDialogDatePickerComponent from './DialogExampleDialogDatePickerComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let App = () => (
    <MuiThemeProvider>
        <div class="test-classname-transfer">
            <MyAwesomeReactComponent />
            <DialogExampleDialogDatePickerComponent />
            <ul>
                <li><a href="https://www.facebook.com/ethangroupofficial/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/ethangroup" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                <li><a href="https://plus.google.com/100310107127062073459/about" target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/company/ethan-group" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </MuiThemeProvider>
);

export default App;
