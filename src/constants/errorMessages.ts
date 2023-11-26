export const getErrorMessage = (errorCode = "") => {
  switch (errorCode) {
    case "BAD_USER_INPUT":
      return "Invalid input provided. Please check the provided values and ensure they match the expected format.";
    case "INTERNAL_SERVER_ERROR":
      return "An unexpected error occurred on the server. Please try again later or contact support if the issue persists.";
    case "UNAUTHORIZED":
      return "You are not authorized to perform this action. Please check your permissions or login with the appropriate credentials.";
    case "NOT_FOUND":
      return "The requested resource could not be found. Please verify the provided identifier or location and try again.";
    case "DUPLICATE_UNIQUE_FIELD":
      return "A unique field constraint violation occurred. Please ensure that the provided values are unique and do not conflict with existing data.";
    default:
      return "An unexpected error occurred.";
  }
};
