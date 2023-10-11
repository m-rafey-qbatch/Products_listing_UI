import { connect } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";
import ProductCard from "./ProductCard";

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {};
};

const ProductCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);

export default ProductCardContainer;
