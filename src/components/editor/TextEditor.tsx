import { Component } from 'react';
import { Box, Paper, Typography } from '@mui/material'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { styles } from './TextEditorStyles';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface IState {
    editorState: EditorState
}

class TextEditor extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState: EditorState) => {
        this.setState({ editorState })
    }

    render() {
        const { editorState } = this.state;

        return (
            <Box sx={styles.mainBox}>
                <Typography variant='h2'>Text Editor</Typography>
                <Paper sx={styles.editorPaper}>
                    <Editor
                        editorState={editorState}
                        wrapperStyle={styles.totalEditorStyle}
                        toolbarStyle={styles.toolBarStyles}
                        editorStyle={styles.editorStyles}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Paper>
            </Box>
        )
    }
}
export default TextEditor
