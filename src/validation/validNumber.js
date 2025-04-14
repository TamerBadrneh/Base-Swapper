export default function validNumber(number, base) {
  let maxBases = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base);

  let regex = new RegExp(`^[${maxBases}]+(\\.[${maxBases}]+)?$`, "i");

  if (!regex.test(number)) return false;

  // Ensure parseInt can correctly interpret the integer part
  let integerPart = number.split(".")[0]; // Take only integer part
  return !isNaN(parseInt(integerPart, base));
}
