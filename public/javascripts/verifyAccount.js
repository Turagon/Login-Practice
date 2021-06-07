function verifyAccount (data, ...arr) {
  const result = arr.filter(item => {
    return item.email === data.account && item.password === data.password
  })
  return result[0]? result[0].firstName: null
}

module.exports = verifyAccount