import { useParams } from 'react-router-dom'
// hooks
import { useLocalStorage, useChat } from '../../hooks/index';
// components
import { MessageForm } from './MessageForm/MessageForm';
import { MessageList } from './MessageList/MessageList';
import { UserList } from './UserList/UserList';
// styles
import { Container } from 'react-bootstrap'

export function ChatRoom() {
  if(!localStorage.getItem('username')) {
    window.location.href = '/';
  }

  const { roomId } = useParams()
  const [username] = useLocalStorage('username')
  const { users, messages, sendMessage, removeMessage } = useChat(roomId)

  return (
    <Container>
      <UserList users={users} />
      <MessageList messages={messages} removeMessage={removeMessage} />
      <MessageForm username={username} sendMessage={sendMessage} />
    </Container>
  )
}
