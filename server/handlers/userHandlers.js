const users = {
  "common": {
    1: { username: 'Test', online: false }
  }
}

module.exports = (io, socket, roomId) => {
  const getUsers = () => {
    io.in(socket.roomId).emit('users', users[roomId])
  }

  const addUser = ({ username, userId }) => {
    if(!users[roomId]) {
      users[roomId] = {};
    }
    if (!users[roomId][userId]) {
      users[roomId][userId] = { username, online: true }
    } else {
      users[roomId][userId].online = true
    }
    getUsers()
  }

  const removeUser = (userId) => {
    if (users[roomId][userId]) {
      users[roomId][userId].online = false
    }
    getUsers()
  }

  socket.on('user:get', getUsers)
  socket.on('user:add', addUser)
  socket.on('user:leave', removeUser)
}
