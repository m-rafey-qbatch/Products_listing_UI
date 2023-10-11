import { connect } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";
import { selectProducts,selectLoading,selectError } from "../../selectors";
import ProductFilter from "./ProductFilter";

const mapStateToProps = (state: RootState) => {
  return {
    products: selectProducts(state),
    loading: selectLoading(state),
    error: selectError(state),
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {};
};

const ProductFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFilter);

export default ProductFilterContainer;
