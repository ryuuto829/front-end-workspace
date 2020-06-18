/** EMAIL INPUT VALIDATION */
const checkEmailValidity = input => {
  const EMAIL_REGEX = /\S+@\S+\.\S+/; // text@text.text
  return EMAIL_REGEX.test(input);
};

export default function checkInput(inputText, inputType = "text") {
  const text = inputText.trim();

  /** GENERAL VALIDATION CHEKING */
  if (text.length === 0) return "This field is required";

  switch (inputType) {
    case "email":
      if (!checkEmailValidity(text)) return "Not well formed email address";
      return null;
    case "password":
      if (text.length < 6) return "Must be 6 or more in length";
      return null;
    case "text":
      if (text.length < 3) return "Must be 3 or more in length";
      return null;
    default:
      return null;
  }
};