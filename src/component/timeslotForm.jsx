import { useState } from "react";

//Component Library
import { 
    Button,
    FormControl,
    TextField,
    Typography, 
} from "@mui/material";

//Helpers
import {getTodaysDateStringForCode} from '../helpers/dateHelper';

//CSS Theme
import Theme from '../Theme';

const TimeslotForm = ({edit, cancelActivity, activityToEdit, handleSubmit, handleClose}) => {
    const [errorMessage, setErrorMessage] = useState("");

    const validateSubmit = (event) => {
        event.preventDefault();
        if(event.target.endTime.value <= event.target.startTime.value){
            setErrorMessage("End time cannot be less than or equal to start time.");
        } else {
            handleSubmit(event);
        }
    }

    return(
        <form onSubmit={validateSubmit}>
            <FormControl data-testid="edit-form-control" sx={Theme.FormControl} variant="standard">
            <TextField 
                sx={Theme.TextField} 
                name='name' 
                label="Activity Name" 
                color="primary" 
                defaultValue={activityToEdit?.activityName} 
                focused
                required
            />
            <TextField
                sx={{...Theme.TextField}}
                name="date"
                label="Date"
                type="date"
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                    min: getTodaysDateStringForCode()
                }}
                defaultValue={activityToEdit?.date}
                focused
                required
            />
            <TextField
                sx={Theme.TextField}
                name="startTime"
                label="Start Time"
                type="Time"
                InputLabelProps={{
                    shrink: true,
                }}
                defaultValue={activityToEdit?.startTime}
                focused
                required
            />
            <TextField
                sx={Theme.TextField}
                name="endTime"
                label="End Time"
                type="Time"
                InputLabelProps={{
                shrink: true,
                }}
                defaultValue={activityToEdit?.endTime}
                focused
                required
            />
            <TextField 
                sx={{...Theme.TextField, width: "125px"}} 
                name="guests" 
                label="Max # of Guests" 
                color="primary" 
                defaultValue={activityToEdit?.numMaxGuests}
                focused
                required
            />
            {errorMessage && <Typography sx={Theme.Error}>{errorMessage}</Typography>}
        </FormControl>
        <FormControl sx={Theme.FormControl} variant="standard">
            <Button sx={Theme.Button} variant="contained" type='submit'>{ (edit && activityToEdit.canceled) ? "Reschedule" : "Save"}</Button>
            <Button sx={Theme.Button} onClick={handleClose}>Close</Button>
            { (edit && !activityToEdit?.canceled) &&
                <Button 
                    sx={Theme.Button}
                    className="cancelButton"
                    variant="contained" 
                    color="error" 
                    onClick={cancelActivity}
                    data-testid="cancel-button"
                >
                    Cancel Activity
                </Button>
            }
        </FormControl>
    </form>
    )
}

export default TimeslotForm;