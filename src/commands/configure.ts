import { Command } from '@oclif/core';
import { prompt } from 'inquirer';
import * as chalk from 'chalk';
import { ConfigurePromptResponse } from '../types/configure';
import { checkAndCreateFolder, createUpdateFile } from '../tools/handle-file';

export default class Configure extends Command {
  static description = 'Create migration structure folders';

  static examples = ['contentful-migration-tools configure'];

  public async run(): Promise<void> {
    try {
      const basePath = process.cwd();
      const userInput: ConfigurePromptResponse = await prompt([
        {
          type: 'input',
          name: 'pathName',
          message: 'What is the name for the migration scripts folder?',
          default: 'migrations',
        },
      ]);

      const migrationFolder = `${basePath}/${userInput?.pathName}`;

      checkAndCreateFolder(migrationFolder);
      checkAndCreateFolder(`${migrationFolder}/src`);
      checkAndCreateFolder(`${migrationFolder}/content-types`);
      createUpdateFile(`${migrationFolder}/content-types/.gitkeep`, '', true, false);
      checkAndCreateFolder(`${migrationFolder}/src/atoms`);
      createUpdateFile(`${migrationFolder}/src/atoms/.gitkeep`, '', true, false);
      checkAndCreateFolder(`${migrationFolder}/src/molecules`);
      createUpdateFile(`${migrationFolder}/src/molecules/.gitkeep`, '', true, false);
      checkAndCreateFolder(`${migrationFolder}/src/organisms`);
      createUpdateFile(`${migrationFolder}/src/organisms/.gitkeep`, '', true, false);
      checkAndCreateFolder(`${migrationFolder}/src/pages`);
      createUpdateFile(`${migrationFolder}/src/pages/.gitkeep`, '', true, false);
      checkAndCreateFolder(`${migrationFolder}/src/semantics`);
      createUpdateFile(`${migrationFolder}/src/semantics/.gitkeep`, '', true, false);
      checkAndCreateFolder(`${migrationFolder}/src/templates`);
      createUpdateFile(`${migrationFolder}/src/templates/.gitkeep`, '', true, false);

      this.log(`🎉🎉  Configuration for migrations ended successfully 🎉🎉`);
    } catch (error) {
      this.log(chalk.bgRedBright(error));
    }
  }
}
