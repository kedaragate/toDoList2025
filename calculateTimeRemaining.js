export default function calculateTimeRemaining(dueDate) {
  const currentDate = new Date();
  const timeDifferenceInMilliseconds = Math.abs(
    Date.parse(dueDate) - Date.parse(currentDate)
  );

  const timeDifferenceInHours = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60)
  );

  const timeDifferenceInDays = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  const timeRemaining = `${timeDifferenceInDays} ${
    timeDifferenceInDays > 1 ? "Days" : "Day"
  } and ${timeDifferenceInHours - timeDifferenceInDays * 24} Hours`;
  return timeRemaining;
}
