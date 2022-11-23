import Toast from "react-bootstrap/Toast";

export const ToastOnStart = () => {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Start The Task</strong>
        <small>1Describing Event</small>
      </Toast.Header>
      <Toast.Body>Press the Add Task button to start application.</Toast.Body>
    </Toast>
  );
};
