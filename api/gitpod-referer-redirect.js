module.exports = async (req, res) => {
  const gitpodURL = `https://gitpod.io/#${req.headers.referer}`
  res.setHeader('Location', gitpodURL)
  res.status(302)
  res.send(`Redirecting to ${gitpodURL}`)
}
