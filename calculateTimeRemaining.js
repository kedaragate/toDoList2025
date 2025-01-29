export default function calculateTimeRemaining(dueDate) {
  const currentDate = new Date();
  const timeRemainingToCompleteTheTaskInMiliseconds = Math.abs(
    Date.parse(dueDate) - Date.parse(currentDate)
  );

  const timeRemainingToCompleteTheTaskInHours = Math.floor(
    timeRemainingToCompleteTheTaskInMiliseconds / (1000 * 60 * 60)
  );

  const timeRemainingToCompleteTheTaskInDays = Math.floor(
    timeRemainingToCompleteTheTaskInMiliseconds / (1000 * 60 * 60 * 24)
  );

  const timeRemainingToCompleteTheTask = `${timeRemainingToCompleteTheTaskInDays} ${
    timeRemainingToCompleteTheTaskInDays > 1 ? "Days" : "Day"
  } and ${
    timeRemainingToCompleteTheTaskInHours -
    timeRemainingToCompleteTheTaskInDays * 24
  } Hours`;
  return timeRemainingToCompleteTheTask;
}
