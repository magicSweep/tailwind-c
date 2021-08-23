import React, { useState, useEffect } from "react";
import { Story, ComponentMeta } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import CenteredModal from "./CenteredModal";
import SliderModal from "./SliderModal";
import { ModalProps } from "./Modal";
import Spinner from "../../progress/Spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6
import Button from "../../buttons/Button";
import LoadableMock from "../../mocks/LoadableMock";

export default {
  component: CenteredModal,
  title: "Portals/Modal",
  decorators: [
    (Story: any) => (
      <div className="flex flex-auto justify-around items-center p-8">
        <Story />
      </div>
    ),
  ],
  excludeStories: /.*Data$/,
};

const Template: Story<ModalProps> = (args) => {
  const [show, setShow] = useState(false);

  console.log("[RENDER MODAL TEMPLATE]", args);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Show modal</Button>
      <div style={{ height: "120vh" }}></div>

      <CenteredModal
        show={show}
        onClose={() => setShow(false)}
        type={args.type}
      >
        <div
          className={`
            relative
            overflow-y-auto
            flex-grow
            flex justify-center items-center flex-wrap
            bg-paper
        `}
        >
          {args.children}
          <Button onClick={() => setShow(false)}>Hide modal</Button>
        </div>
      </CenteredModal>
    </div>
  );
};

export const Centered = Template.bind({});

Centered.args = {
  type: "form",
  children: <LoadableMock />,
};

export const Scrollable = Template.bind({});

Scrollable.args = {
  type: "form",
  children: (
    <div style={{ height: "120vh" }}>
      <h4>Hello from Scrollable modal.</h4>
    </div>
  ),
};

export const SliderType = () => {
  const [show, setShow] = useState(false);

  //console.log("[RENDER MODAL ]");

  return (
    <div>
      <button onClick={() => setShow(true)}>Show modal</button>
      <div style={{ height: "120vh" }}></div>

      <SliderModal show={show}>
        <div className="bg-green-300 h-full w-full flex justify-center items-center">
          <button onClick={() => setShow(false)}>Hide modal</button>
        </div>
      </SliderModal>
    </div>
  );
};

export const FormSpinnerType = Template.bind({});

FormSpinnerType.args = {
  type: "form",
  children: (
    <div
      style={{
        position: "relative",
        padding: "25px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  ),
};

export const Translate = ({ children }: any) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div
      className={`
            transition-transform duration-500 ease-in
            transform ${mount ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      {children}
    </div>
  );
};

export const Animate = () => {
  return (
    <Translate>
      <div
        className={`
            bg-red-700
            flex justify-center items-center
            min-h-36
            min-w-72
        `}
      >
        <p>Hello, from Loadable mock</p>
      </div>
    </Translate>
  );
};

export const Example = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(!show)}>Toggle</Button>
      <CSSTransition
        in={show}
        timeout={400}
        unmountOnExit
        classNames={{
          enter: "opacity-0",
          enterActive: "opacity-100 transition-opacity duration-1000",
          exit: "opacity-0 transition-opacity duration-1000",
          //exitActive: "exit-active",
          //exitActive: "opacity-0",
          /*    enter: "enter",
          enterActive: "enter-active",
          exit: "exit",
          exitActive: "exit-active", */
        }}
      >
        <div className="w-96 h-52 bg-yellow-300">
          <p> Hello, from transition </p>
        </div>
      </CSSTransition>
    </div>
  );
};

export function TodoList() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Pay bills" },
    { id: 3, text: "Invite friends over" },
    { id: 4, text: "Fix the TV" },
  ]);
  return (
    <div>
      <ul>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id as any}
              timeout={500}
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100 transition-opacity duration-1000",
                exit: "opacity-0 transition-opacity duration-1000",
                //exitActive: "exit-active",
                //exitActive: "opacity-0",
                /*    enter: "enter",
              enterActive: "enter-active",
              exit: "exit",
              exitActive: "exit-active", */
              }}
            >
              <li>
                <Button
                  className="remove-btn"
                  onClick={() =>
                    setItems((items) => items.filter((item) => item.id !== id))
                  }
                >
                  &times;
                </Button>
                {text}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <Button
        onClick={() => {
          const text = prompt("Enter some text");
          if (text) {
            setItems((items) => [...items, { id: Date.now(), text }]);
          }
        }}
      >
        Add Item
      </Button>
    </div>
  );
}
