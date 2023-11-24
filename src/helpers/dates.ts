export const calculateDateDifference = (
  dateString: string
): { days: number; label: string; color: string } => {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  // Check if the targetDate is a valid date
  if (isNaN(targetDate.getTime())) {
    console.error("Invalid date string");
    return { days: 0, label: "", color: "neutral.light" };
  }

  // Calculate the difference in days
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  enum LateLabels {
    "Today",
    "Tomorrow",
    "2 days",
  }

  let label: string;
  let color: string;

  if (daysDifference > 2) {
    // More than 2 days difference
    label = targetDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    color = "neutral.light";
  } else if (daysDifference >= 0) {
    label = LateLabels[daysDifference];
    color = "tertiary";
  } else {
    // Past due date
    label =
      daysDifference === -1
        ? "Yesterday"
        : targetDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
    color = "primary";
  }

  return { days: daysDifference, label, color };
};
