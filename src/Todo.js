import React from 'react';
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import { DeleteOutlined } from '@material-ui/icons';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item, readOnly: true};
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly)
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly?", this.state.readOnly)
        });
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,
                        }}
                        onClick={this.offReadOnlyMode}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;