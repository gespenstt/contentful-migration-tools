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
import { createUpdateFile } from '../tools/handle-file';

export default class Generate extends Command {
  static description = 'Generate migration file for an element';

  static examples = ['contentful-migration-tools generate'];

  public async run(): Promise<void> {
    try {
      const basePath = process.cwd();
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
      const epoch = Math.round(Date.now() / 1000);
      const elementPrefix = getElementPrefix(type);
      const elementWithPrefix = `${elementPrefix}-${name}`;
      const elementPath = getPath(
        FILES_CONTENT.TCT_SCRIPT,
        elementWithPrefix,
        type,
        epoch,
      );
      const elementContentTypePath = getPath(
        FILES_CONTENT.TCT_REF_SCRIPT,
        elementWithPrefix,
        type,
        epoch,
      );
      const elementPathContent = parseContent(
        getContent(FILES_CONTENT.TCT_SCRIPT),
        elementWithPrefix,
        type,
        epoch,
      );
      const elementContentTypePathContent = parseContent(
        getContent(FILES_CONTENT.TCT_REF_SCRIPT),
        elementWithPrefix,
        type,
        epoch,
      );
    } catch (error) {
      this.log(chalk.bgRedBright(error));
    }
  }
}
