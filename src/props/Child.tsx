interface ChildProps {
  colour: string;
  onClick: () => void;
}

export const Child = ({ colour, onClick }: ChildProps) => {
  return (
    <div>
      {colour}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ colour, onClick }) => {
  return (
    <div>
      {colour}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};
