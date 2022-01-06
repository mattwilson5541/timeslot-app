import { useState, useEffect } from 'react'

//Component Library
import { Box, TextField, Button } from "@mui/material";
import { top } from '@mui/system';

//CSS Theme
import Theme from '../Theme';

//Helpers
import { computeDuration } from '../helpers/durationHelper';

const TimeslotComponent = ({activity, handleOpenViewModal, activitiesForOverlapCompare}) => {
    const [overlap, setOverlap] = useState(0);

    useEffect(() => {    
        const computeOverlap = () => {
            let overlapCountArray = [];
            activitiesForOverlapCompare.map((activityToCompare) => {
                if(activity !== activityToCompare){
                    if (doActivitiesOverlap(activity, activityToCompare)
                       && activity.duration < activityToCompare.duration) {
                        overlapCountArray.push(activityToCompare);
                    };
                };
            });
            setOverlap(overlapCountArray.length);
        }
        computeOverlap();
    }, [activity, activitiesForOverlapCompare]);

    const styles = {
        marginLeft: '10%',
        borderRadius: '4px',
        border: '2px solid black',
        backgroundColor: activity.canceled ? Theme.Colors.darkestBlue : Theme.Colors.blue,
        color: 'white',
        display: 'block',
        fontSize: activity.duration >= 15 ? '.7em' : '.5em',
        whiteSpace: 'nowrap',
        padding: '0px 5px 0px 5px',
        "&:hover": {
            backgroundColor: Theme.Colors.darkerBlue
        },
        textDecoration: activity.canceled ? 'line-through' : 'none',
    }

    const computeStartTimePosition = () => {
        let start = new Date('01/01/2000 '+activity.startTime);
        let hours = start.getHours();
        let mintues = start.getMinutes();
        return (hours * 60) + mintues;
    }

    const isTimeBetween = (time, startTime, endTime) => {
        let timeToCompare = new Date('01/01/2000 '+time); 
        let startToCompare = new Date('01/01/2000 '+startTime);        
        let endToCompare = new Date('01/01/2000 '+endTime);
        
        return (startToCompare <= timeToCompare && endToCompare >= timeToCompare)
    }

    const doActivitiesOverlap = (activityOne, activityTwo) => {
        return isTimeBetween(activityOne.startTime, activityTwo.startTime, activityTwo.endTime) 
        || isTimeBetween(activityOne.endTime, activityTwo.startTime, activityTwo.endTime) 
        || isTimeBetween(activityTwo.startTime, activityOne.startTime, activityOne.endTime) 
        || isTimeBetween(activityTwo.endTime, activityOne.startTime, activityOne.endTime)
    }

    return (
        <Box sx={{...styles, 
            position: 'absolute',
            top: 74 + computeStartTimePosition(),
            left: `${overlap * 6}%`,
            height: activity.duration + 'px',
            cursor: 'pointer',
            zIndex: `${2 + overlap}`
        }}
        data-testid="timeslot"
        onClick={() => {handleOpenViewModal(activity)}}>
            {activity.activityName}
        </Box>
    )
};

export default TimeslotComponent;