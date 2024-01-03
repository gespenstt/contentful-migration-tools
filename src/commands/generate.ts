import { Command, Flags } from '@oclif/core';
import { prompt } from 'inquirer';
import * as chalk from 'chalk';
import * as fs from 'fs';
import { readFileSync } from 'fs';
import { TCT_SCRIPT, TCT_EDITED_SCRIPT } from '../constants/content-type';
import { GeneratePromptResponse } from '../types/generate';
import { getPath, getContent, parseContent } from '../tools/handle-template';
import { FILES_CONTENT } from '../types/commons';
import { getElementPrefix } from '../tools/element-prefix';
import { checkAndCreateFolder, createUpdateFile } from '../tools/handle-file';
import { getFirstEpoch } from '../tools/first-epoch';

export default class Generate extends Command {
  static description = 'Generate migration file for an element';

  static examples = ['contentful-migration-tools generate'];

  public async run(): Promise<void> {
    try {
      const basePath = `${process.cwd()}/${process.env.CMT_PATH ?? 'migrations'}`;
      const userInput: GeneratePromptResponse = await prompt([
        {
          type: 'list',
          name: 'type',
          message: 'Select the type of script element',
          default: '',
          choices: ['atom', 'molecule', 'organism', 'template', 'page', 'semantic'],
          validate(value) {
            if (!value) {
              return 'Select a type element';
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is the element name?. e.g. hero, heading, button, link',
          validate(value) {
            if (!value) {
              return 'Please write an element name';
            }
            return true;
          },
        },
      ]);

      let { name, type } = userInput;
      type = `${type}s`;
      const epoch = Math.round(Date.now() / 1000);
      const elementPrefix = getElementPrefix(type);
      const elementWithPrefix = `${elementPrefix}-${name}`;
      const firstFileEpoch = getFirstEpoch(basePath, type, elementWithPrefix);
      const elementPath = getPath(
        FILES_CONTENT.TCT_SCRIPT,
        elementWithPrefix,
        type,
        firstFileEpoch || epoch,
      );

      console.log('`${basePath}${elementPath}`', `${basePath}${elementPath}`)

      if (firstFileEpoch && fs.existsSync(`${basePath}${elementPath}`)) {
        // Content type script already exists
        const elementContentEdited = parseContent(
          getContent(FILES_CONTENT.TCT_SCRIPT),
          elementWithPrefix,
          type,
          epoch,
        );
        const elementPathEdited = getPath(
          FILES_CONTENT.TCT_EDITED_SCRIPT,
          elementWithPrefix,
          type,
          epoch,
        );
        const contentTypePath = getPath(
          FILES_CONTENT.TCT_REF_SCRIPT,
          elementWithPrefix,
          type,
        );
        const scriptContent: Array<string> = require(`${basePath}${contentTypePath}`);
        console.log('elementPathEdited', elementPathEdited)
        console.log('scriptContent', scriptContent)

      } else {
        // Create content type script
        const contentTypePath = getPath(
          FILES_CONTENT.TCT_REF_SCRIPT,
          elementWithPrefix,
          type,
        );
        const elementContent = parseContent(
          getContent(FILES_CONTENT.TCT_SCRIPT),
          elementWithPrefix,
          type,
          epoch,
        );
        const contentTypePathContent = parseContent(
          getContent(FILES_CONTENT.TCT_REF_SCRIPT),
          elementWithPrefix,
          type,
          epoch,
        );
        const elementRootPath = getPath(
          undefined,
          elementWithPrefix,
          type,
          epoch,
        );

        checkAndCreateFolder(`${basePath}${elementRootPath}`);
        createUpdateFile(`${basePath}${elementPath}`, elementContent, false, true);
        createUpdateFile(`${basePath}${contentTypePath}`, contentTypePathContent, false, true);
      }
    } catch (error) {
      console.log(error);
      this.log(chalk.bgRedBright(error));
    }
  }
}
