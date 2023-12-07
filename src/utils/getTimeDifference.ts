export const getTimeDifference = (
  currentTimestamp: string,
  nextTimestamp: string
) => {
  const currentTime = new Date(currentTimestamp);
  const nextTime = new Date(nextTimestamp);
  return Number(nextTime) - Number(currentTime);
};