import Counter from "$lib/Counter/index.svelte";
import { render, fireEvent } from "@testing-library/svelte";

it("Counter component Increments", async () => {
  const { getByRole, getByTestId } = render(Counter);

  const increment = getByRole("button", {name: "Decrease the counter by one"});
  const counter = getByTestId("count");

  await fireEvent.click(increment); // 1
  await fireEvent.click(increment); // 2
  await fireEvent.click(increment); // 3

  expect(counter.textContent).toBe("3");
});

it("Counter component Decrements", async () => {
  const { getByRole, getByTestId } = render(Counter);

  const decrement = getByRole("button", {name: "Increase the counter by one"});
  const counter = getByTestId("count");

  await fireEvent.click(decrement); // -1
  await fireEvent.click(decrement); // -2

  expect(counter.textContent).toBe("-2");
});

it("Counter component works", async () => {
  const { getByRole, getByTestId } = render(Counter);

  const increment = getByRole("button", {name: "Decrease the counter by one"});
  const decrement = getByRole("button", {name: "Increase the counter by one"});
  const counter = getByTestId("count");

  await fireEvent.click(increment); // 1
  await fireEvent.click(increment); // 2
  await fireEvent.click(decrement); // 1
  await fireEvent.click(increment); // 2
  await fireEvent.click(increment); // 3
  await fireEvent.click(decrement); // 2
  await fireEvent.click(increment); // 3

  expect(counter.textContent).toBe("3");
});
