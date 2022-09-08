import { Child } from "./Child";

const Parent = () => {
  return <Child colour="blue" onClick={() => console.log("Clicked!")} />;
};

export default Parent;
