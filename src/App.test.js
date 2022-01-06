import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { getTodaysDateStringForCode } from './helpers/dateHelper';

test('Schedule a timeslot button opens the schedule modal', async () => {
  render(<App />);
  const buttonElement = screen.getByText(/schedule a timeslot/i);
  userEvent.click(buttonElement);
  await waitFor(() => {
    screen.getByTestId("modal-title");
  });
  const modalElement = screen.getByTestId("modal-title");
  expect(modalElement).toBeInTheDocument();
});

test('Clicking on timeslot opens information modal', async () => {
  render(<App />);
  const timeslot = await screen.findAllByTestId("timeslot")
  userEvent.click(timeslot[0]);
  await waitFor(() => {
    screen.getByTestId("modal-title");
  });
  const modalElement = screen.getByTestId("modal-title");
  expect(modalElement).toBeInTheDocument();
});

test('Clicking edit icon in view modal should bring up edit form', async () => {
  render(<App />);
  const timeslot = await screen.findAllByTestId("timeslot")
  userEvent.click(timeslot[0]);
  await waitFor(() => {
    screen.getByTestId("edit-icon");
  });
  const editIcon = screen.getByTestId("edit-icon");
  userEvent.click(editIcon);
  const editFormcontrol = screen.getByTestId("edit-form-control");
  expect(editFormcontrol).toBeInTheDocument();
});

test('Canceling timeslot should display strikethrough on timeslot title', async () => {
  render(<App />);
  const timeslot = await screen.findAllByTestId("timeslot")
  userEvent.click(timeslot[0]);
  await waitFor(() => {
    screen.getByTestId("edit-icon");
  });
  const editIcon = screen.getByTestId("edit-icon");
  userEvent.click(editIcon);
  const cancelButton = screen.getByTestId("cancel-button");
  userEvent.click(cancelButton);
  const style = window.getComputedStyle(timeslot[0])
  expect(style.textDecoration).toEqual("line-through");
});

test('SelectedDate should display in MM/DD/YYYY format', async () => {
  render(<App />);
  const datepicker = screen.getByTestId("date-select");
  fireEvent.change(datepicker, { target: { value: '2022-08-08' } });
  const selectedDate = screen.getByTestId("date-display");
  expect(selectedDate.textContent).toEqual("08/08/2022");
});