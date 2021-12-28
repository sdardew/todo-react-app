import React, { Component } from 'react';
import {TextField, Paper, Button, Grid} from "@material-ui/core";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {title: {title: ""}}; // 사용자의 입력을 저장할 오브젝트
    }
    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingLight:16}}>
                        <TextField placeholder="Add Todo here" fullWidth></TextField>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button color="secondary" variant="outlined">
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;