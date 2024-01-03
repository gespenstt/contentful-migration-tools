import * as fs from 'fs';
import * as chalk from 'chalk';

const log = console.log;

export const createUpdateFile = (
  pathFile: string,
  content: string,
  updateContent = false,
  writeLog = true,
): void => {
  try {
    if (writeLog) log(chalk.bold(`🤔 Checking if 📄 exits: "${pathFile}" \n`));
    if (!fs.existsSync(`${pathFile}`)) {
      if (writeLog) log(chalk.bold(`📄 "${pathFile}" `) + chalk.yellow(`not exits`));
      fs.writeFileSync(pathFile, content);
      if (writeLog) log(chalk.bold(`📄 "${pathFile}" `) + chalk.green(`created`) + '\n');
    } else {
      if (writeLog) log(chalk.bold(`📄 "${pathFile}" `) + chalk.green(`exits`) + '\n');
      if (updateContent) {
        if (writeLog) log(chalk.bold(`⚠️ Updating content for file: "${pathFile}"`));
        fs.writeFileSync(pathFile, content);
        if (writeLog) log(chalk.bold(`📄 "${pathFile}" `) + chalk.green(`updated`) + '\n');
      }
    }
  } catch (error) {
    console.log('createUpdateFile error', error)
    if (writeLog) log(chalk.bgRedBright(error));
  }
};

export const checkAndCreateFolder = (pathFolder: string): void => {
  try {
    log(chalk.bold(`🤔 Checking if 📁 exits: "${pathFolder}" \n`));
    if (!fs.existsSync(`${pathFolder}`)) {
      log(chalk.bold(`📁 "${pathFolder}" `) + chalk.yellow(`not exits`));
      fs.mkdirSync(`${pathFolder}`);
      log(chalk.bold(`📁 "${pathFolder}" `) + chalk.green(`created`) + '\n');
    } else {
      log(chalk.bold(`📁 "${pathFolder}" `) + chalk.green(`exits`) + '\n');
    }
  } catch (error) {
    log(chalk.bgRedBright(error));
  }
};
