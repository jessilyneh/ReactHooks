import { useState } from "react";
// import useState to use hooks inside hooks

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
}
