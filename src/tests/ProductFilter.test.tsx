import { render, fireEvent } from "@testing-library/react";
import ProductFilter from "../components/ProductFilter/ProductFilter";

describe("ProductFilter Component", () => {
  it("changes color selection", () => {
    const products = [
      { name: "Product 1", colour: "Red" },
      { name: "Product 2", colour: "Blue" },
    ];
    const handleColorChange = jest.fn();

    const { getByTestId } = render(
      <ProductFilter
        products={products}
        handleColorChange={handleColorChange}
        loading={false}
        error={null}
      />
    );

    const colorFilterSelect = getByTestId("color-filter") as HTMLSelectElement;

    fireEvent.change(colorFilterSelect, { target: { value: "Blue" } });

    expect(handleColorChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "Blue" }),
      })
    );
  });

  it("displays loading message", () => {
    const products: any[] = [];
    const handleColorChange = jest.fn();

    const { getByText } = render(
      <ProductFilter
        products={products}
        handleColorChange={handleColorChange}
        loading={true}
        error={null}
      />
    );

    const loadingMessage = getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });
});
