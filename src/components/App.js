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
        </div>
    </MuiThemeProvider>
);

export default App;
