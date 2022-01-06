const Theme = {
    Colors: {
        blue: "#1976d2",
        lighterBlue: "#378fe7",
        darkerBlue: "#1669bb",
        darkestBlue: "#0e4377"
    },
    Box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column'
    },
    Row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    FormControl: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'flex-start',
        '& .cancelButton': {
            marginLeft: '25%'
        }
    },
    TextField: {
        borderRadius: '2px',
        borderBottom: 'none',
        margin: '10px'
    },
    Button: {
        margin: '10px',
        height: '50px'
    },
    Title: {
        fontWeight: 'bold',
        fontSize: '1.25em'
    },
    CalendarContainer: {
        width: '80%',
        minWidth: '750px',
        minHeight: '1000px',
        margin: 'auto',
        marginTop: '20px',
        overflowY: 'scroll',
        padding: '0px 10px 10px 10px',
        borderStyle: 'solid',
        borderColor: '#CACFD2',
        borderWidth: '0px 0px 0px 1px',
        position: 'relative',
        '& .title':{
            marginLeft: '10%',
            textAlign: 'left',
            padding: '15px',
            fontWeight: 'bold',
            fontSize: '2em'
        },
        '& .background':{
            position: "absolute",
            width: '90%'
        },
    },
    Timeblock: {
        '& .time': {
            width: '10%',
            marginTop: '-12.5px'
        },
        '& .calendar': {
            width: '90%',
            borderStyle: 'solid',
            borderColor: '#CACFD2',
            borderWidth: '1px 0px 0px 1px'
        },
        width: '100%',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
    },
    Error: {
        color: "red"
    }
  };

  export default Theme;