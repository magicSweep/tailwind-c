import {
  render,
  fireEvent,
  waitFor,
  cleanup,
  screen,
  RenderResult,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";
/* 
beforeAll()
afterEach()
afterAll() */

/* test("Render default button", async () => {
  render(<Button>Hello btn</Button>);

  //fireEvent.click(screen.getByText('Load Greeting'))

  //await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("button")).toHaveClass("uppercase");
});
 */
let _render: RenderResult;

describe("Snapshots", () => {
  beforeEach(() => {
    _render = render(<Button>Hello btn</Button>);
  });

  afterEach(cleanup);

  test("matches snapshot", () => {
    const { baseElement } = _render;
    expect(baseElement).toMatchSnapshot();
  });
});
