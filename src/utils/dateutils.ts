export const formatDateTime = (date: Date) => {
  const dateTimeFormat = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return dateTimeFormat.format(date);
};
