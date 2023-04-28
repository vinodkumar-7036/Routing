function Rootreducer(state = [], action) {
  switch (action.type) {
    case "INTIALIZED":
      return [...state, action.payload];
    default:
      return state;
  }
}
export default Rootreducer;
