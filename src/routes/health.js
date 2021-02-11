// Health
exports.health = (req, res) => {
  res.json({
    status: 'success',
    data: 'API is available',
  })
}
