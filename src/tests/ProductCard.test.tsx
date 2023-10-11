import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import components from "../components";

test("renders ProductCard component", () => {
  render(
    <Provider store={store}>
      <components.ProductCard />{" "}
    </Provider>
  );
});