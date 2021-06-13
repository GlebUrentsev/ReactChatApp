import TimeAgo from 'react-timeago'
import { ListGroup, Card, Button } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'

export const MessageListItem = ({ msg, removeMessage }) => {
  const handleRemoveMessage = (id) => {
    removeMessage(id)
  }

  const { messageId, messageText, senderName, createdAt, currentUser } = msg
  return (
    <ListGroup.Item
      className={`d-flex ${currentUser ? 'justify-content-end' : ''}`}
      style={{border: 'none'}}
    >
      <Card
        bg={`${currentUser ? 'primary' : 'secondary'}`}
        text='light'
        style={{ width: '55%' }}
      >
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <Card.Text as={TimeAgo} date={createdAt} className='small' />
          <Card.Text>{senderName}</Card.Text>
        </Card.Header>
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text>{messageText}</Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  )
}
