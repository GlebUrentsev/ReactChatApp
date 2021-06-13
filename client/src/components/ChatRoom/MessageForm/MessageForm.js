import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { MdSend } from "react-icons/md";

export const MessageForm = ({ username, sendMessage }) => {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      sendMessage({ messageText: text, senderName: username });
      setText("");
    }
  };

  return (
    <>
      <Form onSubmit={handleSendMessage}>
        <Form.Group className="d-flex">
          <Form.Control
            value={text}
            onChange={handleChangeText}
            type="text"
            placeholder="Message..."
          />
          <Button variant="primary" type="submit" style={{ minWidth: "100px" }}>
            Отправить
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
