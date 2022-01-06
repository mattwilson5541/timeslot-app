import {getTodaysDateStringForCode} from './helpers/dateHelper';
import {computeDuration} from './helpers/durationHelper';

export const activityData = [
    {
        activityName: 'Wake up to dog stepping on face',
        date: getTodaysDateStringForCode(),
        startTime: '08:00',
        endTime: '08:15',
        duration: computeDuration('08:00', '08:15'),
        numMaxGuests: 1,
        canceled: false
    },
    {
        activityName: 'Wishing the GPU Market was not insane',
        date: getTodaysDateStringForCode(),
        startTime: '00:00',
        endTime: '23:59',
        duration: computeDuration('00:00', '23:59'),
        numMaxGuests: 1,
        canceled: false
    },
    {
        activityName: 'Misha randomly Barking',
        date: getTodaysDateStringForCode(),
        startTime: '04:56',
        endTime: '05:07',
        duration: computeDuration('04:56', '05:07'),
        numMaxGuests: 1,
        canceled: false
    },
    {
        activityName: "Sweet Sweet Sleep",
        date: getTodaysDateStringForCode(),
        startTime: '00:00',
        endTime: '07:59',
        duration: computeDuration('00:00', '07:59'),
        numMaxGuests: 10,
        canceled: false
    },
    {
        activityName: "Convincing Sara to get Pho for lunch",
        date: getTodaysDateStringForCode(),
        startTime: '12:00',
        endTime: '12:30',
        duration: computeDuration('12:00', '12:30'),
        numMaxGuests: 10,
        canceled: false
    },
    {
        activityName: 'Daily Standup',
        date: getTodaysDateStringForCode(),
        startTime: '09:15',
        endTime: '09:30',
        duration: computeDuration('09:15', '09:30'),
        numMaxGuests: 6,
        canceled: false
    },
    {
        activityName: 'Work',
        date: getTodaysDateStringForCode(),
        startTime: '09:00',
        endTime: '17:00',
        duration: computeDuration('09:00', '17:00'),
        numMaxGuests: 1,
        
        canceled: false
    },
    {
        activityName: 'LAN PARTY!',
        date: getTodaysDateStringForCode(),
        startTime: '18:00',
        endTime: '23:00',
        duration: computeDuration('18:00', '23:00'),
        numMaxGuests: 10,
        canceled: false
    },
    {
        activityName: 'Pricing out a PC build even though the market is silly',
        date: getTodaysDateStringForCode(),
        startTime: '17:00',
        endTime: '18:15',
        duration: computeDuration('17:00', '18:15'),
        numMaxGuests: 1,
        canceled: false
    },
    {
        activityName: 'Getting Sad at the price of my new PC build',
        date: getTodaysDateStringForCode(),
        startTime: '18:20',
        endTime: '18:40',
        duration: computeDuration('18:20', '18:40'),
        numMaxGuests: 1,
        canceled: false
    },
];

export const times = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM"
];