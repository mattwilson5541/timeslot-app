import { useState } from "react";
//Component Library
import { 
    Box, 
    Modal,
    Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
//Helpers
import {computeDuration} from '../../helpers/durationHelper';
//CSS Theme
import Theme from '../../Theme';
//Components
import TimeslotForm from "../timeslotForm";


const ViewTimeslotModal = ({
    openViewModal,
    handleCloseViewModal, 
    activityToEdit, 
    editActivity
}) => {
    const [edit, setEdit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let activityForm = event.target;
        let edittedActivity = {
            activityName: activityForm.name.value,
            date: activityForm.date.value,
            startTime: activityForm.startTime.value,
            endTime: activityForm.endTime.value,
            numMaxGuests: activityForm.guests.value,
            duration: computeDuration(activityForm.startTime.value, activityForm.endTime.value)
        }

        editActivity(edittedActivity);
        setEdit(false);
        handleCloseViewModal();
    };

    const handleClose = () => {
        setEdit(false);
        handleCloseViewModal();
    }

    const cancelActivity = () => {
        let canceledActivity = {...activityToEdit, canceled: true};
        editActivity(canceledActivity);
        setEdit(false);
        handleCloseViewModal();
    }

    return (
        <Modal
                open={openViewModal}
                onClose={handleClose}
            >
                { edit ? <Box sx={Theme.Box}>
                    <Typography sx={Theme.Title}>Edit Timeslot</Typography>
                    <TimeslotForm 
                        edit={edit} 
                        cancelActivity={cancelActivity} 
                        activityToEdit={activityToEdit} 
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                    />
                </Box>
                :
                <Box sx={Theme.Box}>
                    <Typography sx={Theme.Title} data-testid="modal-title">{activityToEdit.activityName} <EditIcon sx={{cursor: "pointer"}} data-testid="edit-icon" onClick={() => {setEdit(true)}}/></Typography>
                    <Typography>Date: {activityToEdit.date}</Typography>
                    <Typography>Start Time: {activityToEdit.startTime}</Typography>
                    <Typography>End Time: {activityToEdit.endTime}</Typography>
                    <Typography>Max Number of Guests: {activityToEdit.numMaxGuests}</Typography>
                </Box>
                }
            </Modal>
    )
}

export default ViewTimeslotModal;