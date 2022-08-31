const ErrorMessages = {
  signup: {
    userName:
      'Username must be between 4-75 characters, contain 1 letter, and may contain no special characters except hyphen [-] or apostrophe.',
    userNameExists: 'User name already in use, please try another',
    name: 'Name must be between 1-35 characters, contain 1 letter, and may contain no special characters except hyphen [-] or apostrophe.',
    email: 'Please enter a valid email address.',
    emailExists: 'Account already exists - Please Login',
    password:
      'Password must be between 8-128 characters, it must contain 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.',
    repeatPassword: 'Password must match.',
    business: 'Please select Yes / No',
  },
};

export default ErrorMessages;
