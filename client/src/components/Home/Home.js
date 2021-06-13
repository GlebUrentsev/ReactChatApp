import { useState, useRef } from 'react'
import { useLocalStorage } from '../../hooks/index';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Home() {
  const [username, setUsername] = useLocalStorage('username', 'YourTestNickName')
  // eslint-disable-next-line no-unused-vars
  const [roomId, setRoomId] = useState(new URL(window.location).searchParams.get('locationChat'));
  const linkRef = useRef(null)

  const handleNameInput = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    linkRef.current.click()
  }

  const trimmed = username.trim()
  return (
    <Form
      className='mt-5'
      style={{ maxWidth: '320px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      onSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Label>Enter your nickname:</Form.Label>
        <Form.Control value={username} onChange={handleNameInput} />
      </Form.Group>
      {trimmed && (
        <Button variant='success' as={Link} to={`/${roomId}`} ref={linkRef}>
          Start chat
        </Button>
      )}
    </Form>
  )
}
