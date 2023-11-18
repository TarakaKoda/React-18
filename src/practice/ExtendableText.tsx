import { useState } from "react";

interface Props {
  children: string;
  maxCharacters?: number;
}

const ExtendableText = ({ children, maxCharacters = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxCharacters) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxCharacters);

  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "more" : "less"}
      </button>
    </p>
  );
};

export default ExtendableText;
