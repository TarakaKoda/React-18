import { useEffect, useRef } from "react";

const UseRefHook = () => {
  const usernameRef = useRef<HTMLInputElement>(null);

  // afterRender
  useEffect(() => {
    // SideEffect
    if (usernameRef.current) usernameRef.current.focus();
  });

  useEffect(() => {
    document.title = 'My new App'
  })

  return (
    <input
      ref={usernameRef}
      placeholder="Username"
      type="text"
      className="form-control"
    />
  );
};

export default UseRefHook;
