import { RiRadioButtonLine } from "react-icons/ri";
import { Accordion, Card, Badge } from "react-bootstrap";

export const UserList = ({ users }) => {
  const usersArr = Object.entries(users);
  const activeUsers = Object.values(users).filter((u) => u.online).length;

  return (
    <Accordion className="mt-4">
      <Card style={{ alignItems: "flex-end" }}>
        <Card.Header bg="none">
          Users{" "}
          <Badge variant="light" className="ml-1">
            {activeUsers}
          </Badge>
        </Card.Header>
        {usersArr.map(([userId, obj]) => (
          <Accordion.Collapse eventKey="0" key={userId}>
            <Card.Body>
              <RiRadioButtonLine
                className={`mb-1 ${
                  obj.online ? "text-success" : "text-secondary"
                }`}
                size="0.8em"
              />{" "}
              {obj.username}
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};
