export default function getTime() {
  let now = new Date();
  return {
    hour: now.getHours(),
    minute: now.getMinutes()
  };
}
