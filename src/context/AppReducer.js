export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "DElETE_TRANSACTION":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
  }
};
