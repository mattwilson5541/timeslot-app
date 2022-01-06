import { useState, useEffect } from 'react'
import { Box, TextField, Button } from "@mui/material";

//Components
import AddTimeslotModal from './Modals/addTimeslotModal';
import ViewTimeslotModal from './Modals/viewTimeslotModal';
import Timeslot from './timeslot';

//CSS Theme
import Theme from '../Theme';

//Helpers
import {getDateStringForView, getTodaysDateStringForCode} from '../helpers/dateHelper';

//data
import {activityData, times} from '../data';

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(getTodaysDateStringForCode());
    const [selectedDateActivities, setSelectedDateActivities] = useState([]);
    const [activities, setActivities] = useState([...activityData])
    const [activityToEdit, setActivityToEdit] = useState({});
    const [openViewModal, setOpenViewModal] = useState(false);

    useEffect(() => {
        setSelectedDateActivities(activities.filter(activity => activity.date === selectedDate));
    }, [selectedDate, activities]);

    const addActivity = (newActivity) => {;
        let newActivities = [...activities, newActivity];
        setActivities(newActivities);
    };

    const editActivity = (edittedActivity) => {
        let edittedActivities = [...activities];
        let index = edittedActivities.indexOf(activityToEdit);
        edittedActivities[index] = edittedActivity;
        setActivities(edittedActivities);
    };

    const handleChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleOpenViewModal = (activityToEdit) => {
        setActivityToEdit(activityToEdit);
        setOpenViewModal(true)
    };

    const handleCloseViewModal = () => {
        setActivityToEdit({});
        setOpenViewModal(false);
    };

    return (
        <div>
            <Box sx={Theme.Row}>
                <TextField
                    sx={Theme.TextField}
                    id="date"
                    label="Date"
                    type="date"
                    inputProps={{
                        min: getTodaysDateStringForCode(),
                        "data-testid":"date-select"
                    }}
                    onChange={handleChange}
                    defaultValue={getTodaysDateStringForCode()}
                    focused
                /> 
                <AddTimeslotModal 
                    addActivity={addActivity}
                />
            </Box>
            <Box sx={Theme.CalendarContainer}>
                <Box 
                    className="title" 
                    data-testid="date-display"
                >
                    {getDateStringForView(selectedDate)}
                </Box>
                <Box className="background">
                {
                    times.map((time) => {
                        return <Box sx={Theme.Timeblock}>
                                    <Box className="time">{time}</Box>
                                    <Box className='calendar'></Box>
                                </Box>
                    })
                }
                </Box>
                {
                    selectedDateActivities.map((activity) => {
                        return <Timeslot 
                                    activity={activity} 
                                    handleOpenViewModal={handleOpenViewModal} 
                                    activitiesForOverlapCompare={selectedDateActivities}
                                />
                    })
                }
            </Box>

            <ViewTimeslotModal 
                editActivity={editActivity}
                activityToEdit={activityToEdit}
                handleCloseViewModal={handleCloseViewModal}
                openViewModal={openViewModal}
            />
        </div>
    );
}

export default CalendarComponent;