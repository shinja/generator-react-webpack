'use strict';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

require('styles/DialogExampleDialogDatePicker.css');

class DialogExampleDialogDatePickerComponent extends React.Component {
    
    state = {
        open: false
    };
    
    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };
    
    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />
        ];
        
        return (
            <div>
                <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Dialog With Date Picker"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    Open a Date Picker dialog from within a dialog.
                    <DatePicker hintText="Date Picker" />
                </Dialog>
            </div>
        );
    }
}

// Uncomment properties you need
// DialogExampleDialogDatePickerComponent.propTypes = {};
// DialogExampleDialogDatePickerComponent.defaultProps = {};

export default DialogExampleDialogDatePickerComponent;
