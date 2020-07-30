const http = require('http') //https://nodejs.org/api/http.html
const chalk = require('chalk')
const ProgressBar = require('progress')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World\n')
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
	process.argv.forEach((val, index) => {
		console.log(`${index}: ${val}`)
	})

	console.time('doSomething()')
	console.timeEnd('doSomething()')

	console.error('hello')

	console.log(chalk.yellow('hi!'))

	// const bar = new ProgressBar(':bar', { total: 10 })
	// const timer = setInterval(() => {
	// 	bar.tick()
	// 	if (bar.complete) {
	// 		clearInterval(timer)
	// 	}
	// }, 100)

	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	})
	readline.question('What is your name?', (name) => {
		console.log(`Hi ${name}!`)
		readline.close()
	})
	// process.exit(1)
	// process.kill(process.pid, 'SIGTERM')
})
