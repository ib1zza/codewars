export function humanReadable(time: number): string {
  const seconds = time % 60;
  const minutes = Math.floor((time % 3600) / 60);
  const hours = Math.floor(time / 60 / 60);

  return `${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}:${makeTwoDigits(
    seconds
  )}`;
}

function makeTwoDigits(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

console.log(humanReadable(3600));
