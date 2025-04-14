export default function convertToBase(number, frombase, tobase) {
  return parseInt(number, frombase).toString(tobase);
}
