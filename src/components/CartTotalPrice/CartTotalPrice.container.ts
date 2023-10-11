import { connect } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";
import {
  selectCartItems,
} from "../../selectors";
import CartTotalPrice from "./CartTotalPrice";

const mapStateToProps = (state: RootState) => {
  return {
    cartItems: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {};
};

const CartTotalPriceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTotalPrice);

export default CartTotalPriceContainer;
