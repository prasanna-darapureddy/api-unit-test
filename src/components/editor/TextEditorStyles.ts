export const styles = {
    mainBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        heigh: '100vh',
        gap: 2,
        p: 5
    },
    editorPaper: {
        p: 4,
        width: { xs: '100%', md: '800px' }
    },

    totalEditorStyle: {
        width: 'inherit',
    },
    toolBarStyles: {
        border: '1px solid #ccc',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    editorStyles: {
        height: 300,
        border: "1px solid #ccc",
        overflow: 'auto',
        p: 3,
        "& ::-webkit-scrollbar": {
            display: 'none !important'
        }
    },

}