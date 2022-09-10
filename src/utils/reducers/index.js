export const reducer = (state, action) => {
  switch (action.type) {
    case "changeValue":
      return { ...state, [action.field]: action.value };
    default:
      console.log("Error");
  }
};
