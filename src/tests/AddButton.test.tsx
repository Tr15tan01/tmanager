import { AddButton } from "../components";
import { render, screen } from "@testing-library/react";

//mocking handleClick function
const handleClick = () => {
  console.log("handleClick");
};

test("Renders Add Button", () => {
  render(
    <AddButton
      color="outline-info"
      // handleClick={handleClick}
      task={"hi"}
      onChange={handleClick}
      onSubmit={handleClick}
    />
  );
  const el = screen.getByText(/Add Task/i);
  expect(el).toBeInTheDocument();
});
