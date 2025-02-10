/**
 * Calculates the time remaining until the given due date.
 *
 * @param {string} dueDate - The due date as a date string.
 * @returns {string} - A string representing the time remaining in the format "X Days & Y Hours".
 */

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
  } & ${timeDifferenceInHours - timeDifferenceInDays * 24} Hours`;
  return timeRemaining;
}
