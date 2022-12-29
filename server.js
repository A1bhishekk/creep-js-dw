/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const path = require('path')
const home = path.join(__dirname, '/public')
const app = express()
app.use(express.static(home))
app.use(express.static(path.join(__dirname, '/docs')))

// redirect /tests/ to /docs/tests
app.use('*', (req, res, next) => {
	const testRoute = /^\/tests\//i.test(req.originalUrl)
	if (testRoute) {
		const url = `/docs${req.originalUrl}`
		return res.redirect(url)
	}
	return next()
})
// app.use('/docs', express.static(__dirname + '/docs'))

app.listen(8000, () => console.log('⚡server is running on port 8000'))
