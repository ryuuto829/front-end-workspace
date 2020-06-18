import checkInput from './Validation';

/** Setup input array */
export const addInputs = (state, setState) => {
  return {
    state: state,
    setState: setState
  }
};

/** update input state */
export const updateValidationState = (input, setInput) => {
  setInput(prevState => ({
    ...prevState,
    isValid: input === null,
    failedValidationMessage: input
  }));
};

export const checkValidation = inputs => {
  let validity = true;
  for (let input of inputs) {
    const validation = checkInput(input.state.text, input.state.inputType);
    updateValidationState(validation, input.setState);
    if (validation !== null) validity = false;
  }
  return validity;
};

export const submitData = (type, email, password, onSuccess) => {
  const API_KEY = "AIzaSyBP35fN5kxqq_hYobER3JZKhajME9ePZIc";
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.state.text,
      password: password.state.text,
      returnSecureToken: true
    })
  };

  let url;
  
  if (type === "login") {
    url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }

  if (type === "register") {
    url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  }

  fetch(`${url}${API_KEY}`, config)
    .then(res => {
      return res.json();
    })
    .then(res => {
      email.setState({ ...email.state, text: "" });
      password.setState({ ...password.state, text: "" });

      if (res.error) throw res.error;
      if (res.idToken) onSuccess(true);
    })
    .catch(err => {
      const errorMessage = err.message.toLowerCase().split('_').join(' ');

      updateValidationState(errorMessage, email.setState);
      updateValidationState(errorMessage, password.setState);
    });
};
