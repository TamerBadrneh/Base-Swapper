import emptyField from "./notEmptyField";
import isValidBase from "./validBase";
import validNumber from "./validNumber";

export default function formValidator(number, fromBase, toBase) {
  if (emptyField(number)) return "Please enter a number...";

  if (emptyField(fromBase) || emptyField(toBase))
    return "Please enter a base...";

  if (!isValidBase(fromBase) || !isValidBase(toBase))
    return "Invalid Base, Please enter a number between 2 and 36...";

  if (!validNumber(number, fromBase))
    return "Invalid Number, Your number is not following the base specified...";

  return "";
}
