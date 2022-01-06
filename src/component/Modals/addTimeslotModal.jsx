import { useState } from "react";
//Component Library
import { 
    Button, 
    Box, 
    Modal,
    Typography
} from "@mui/material";
//Helpers
import {computeDuration} from '../../helpers/durationHelper';
//CSS Theme
import Theme from '../../Theme';
//Components
import TimeslotForm from "../timeslotForm";

const AddTimeslotModal = ({addActivity}) => {
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let activityForm = event.target;
        let newActivity = {
            activityName: activityForm.name.value,
            date: activityForm.date.value,
            startTime: activityForm.startTime.value,
            endTime: activityForm.endTime.value,
            numMaxGuests: activityForm.guests.value,
            duration: computeDuration(activityForm.startTime.value, activityForm.endTime.value)
        }
        addActivity(newActivity);
        handleClose();
    };

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button sx={Theme.Button} variant="contained" onClick={handleOpen}>Schedule a Timeslot</Button>
            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <Box sx={Theme.Box}>
                    <Typography sx={Theme.Title} data-testid="modal-title">Schedule a Timeslot</Typography>
                    <TimeslotForm
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>
        </div>
    )
}

export default AddTimeslotModal;