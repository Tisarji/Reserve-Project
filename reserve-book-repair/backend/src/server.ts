import app from './app'
import chalk from 'chalk'

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
	console.log(chalk.green.bold(`💣 Server is running at `) + chalk.bgGray.underline(`http://localhost:${PORT}`));
})
