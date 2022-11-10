import { useState } from "react";
export const Tasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <>
      <h2>Tasks Component</h2>
    </>
  );
};
