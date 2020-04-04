const path = require('path')

const controller = {
  getIndex: (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '.build', 'index.html'), (err) => {
      if (err) console.log(err)
    })
  }
}

module.exports = controller
