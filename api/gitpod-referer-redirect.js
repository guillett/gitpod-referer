module.exports = async (req, res) => {
  res.setHeader('Location', req.headers.referer)
  res.status(302)
  res.send(`Redirecting to ${res.getHeader('location')}`)
}
