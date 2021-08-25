import { merge } from "./helper";

const ourConfig = {
  u: {},
  hello: {
    call: {
      o: [1, 2],
      two: 12,
    },
  },
  three: {
    one: {
      ye: "hello",
    },
  },
  keyframes: {
    ripple1: {
      "100%": { transform: "scale(2)", opacity: 0 },
    },
    progress1: {
      "0%": {
        left: "-30%",
      },
      "100%": {
        left: "100%",
      },
    },
  },
  gui: "true",
};

const mainConfig = {
  u: {},
  hello: {
    call: {
      one: [1, 2, 3],
      three: 45,
    },
  },
  three: {
    one: {
      bye: "bye",
    },
  },
  keyframes: {
    ripple: {
      "100%": { transform: "scale(2)", opacity: 0 },
    },
    progress: {
      "0%": {
        left: "-30%",
      },
      "100%": {
        left: "100%",
      },
    },
  },
  animation: {
    ripple: "ripple .6s linear",
    progress: "progress 3s ease 0s infinite normal none running",
  },
};

const res = {
  animation: {
    progress: "progress 3s ease 0s infinite normal none running",
    ripple: "ripple .6s linear",
  },
  gui: "true",
  hello: { call: { o: [1, 2], one: [1, 2, 3], three: 45, two: 12 } },
  keyframes: {
    progress: { "0%": { left: "-30%" }, "100%": { left: "100%" } },
    progress1: { "0%": { left: "-30%" }, "100%": { left: "100%" } },
    ripple: { "100%": { opacity: 0, transform: "scale(2)" } },
    ripple1: { "100%": { opacity: 0, transform: "scale(2)" } },
  },
  three: { one: { bye: "bye", ye: "hello" } },
  u: {},
};

describe("Merge", () => {
  test("It must merge two object in one", () => {
    const result = merge(ourConfig, mainConfig);

    expect(result).toEqual(res);
  });

  test("It must thrown possible overriding error", () => {
    try {
      const target = {
        hello: { one: "one", three: { one: 23 } },
        gui: true,
      };

      const source = {
        hello: { on: "one", three: { one: 23 } },
        gui: true,
      };

      const result = merge(target, source);

      expect(result).toEqual(res);
    } catch (err) {
      expect(err.message).toEqual(
        "Possible overriding key - hello.three.one | value - 23"
      );
    }
  });
});
