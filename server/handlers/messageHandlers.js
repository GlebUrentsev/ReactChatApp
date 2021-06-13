const { nanoid } = require('nanoid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/messages.json')
const db = low(adapter)

db.defaults({
  "messages": [
    {
      "id": "common",
      "values": [
        {
          "messageId": "353",
          "senderName": "Test",
          "messageText": "Test",
          "createdAt": "2021-05-14"
        }
      ]
    },
    {
      "id": "common1",
      "values": [
        {
          "messageId": "353",
          "senderName": "Test",
          "messageText": "Test",
          "createdAt": "2021-05-14"
        }
      ]
    }
  ]
}).write()

module.exports = (io, socket, roomId) => {
  const getMessages = () => {
    const messages = db.get('messages').find(item => item.id === roomId).get('values').value()
    io.in(socket.roomId).emit('messages', messages)
  }

  const addMessage = (message) => {
    db.get('messages').find(item => item.id === roomId).get('values')
      .push({
        messageId: nanoid(8),
        createdAt: new Date(),
        ...message
      })
      .write()

    getMessages()
  }

  const removeMessage = (messageId) => {
    db.get('messages').find(item => item.id === roomId).get('values').remove({ messageId }).write()

    getMessages()
  }

  socket.on('message:get', getMessages)
  socket.on('message:add', addMessage)
  socket.on('message:remove', removeMessage)
}
