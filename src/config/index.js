const MODE = "staging";

export const CONFIG = {
  API_ROOT_ADDRESS:
    MODE === "staging" ? process.env.REACT_APP_API_ROOT_ADDRESS : "abc",
};
