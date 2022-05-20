import {Command, Flags} from '@oclif/core'

export default class Migrate extends Command {
  static description = 'Run Contentful migrations scripts'

  static examples = [
    'contentful-migration-tools migrate',
  ]

  public async run(): Promise<void> {
    this.log(`path=${process.cwd()}`)
  }
}
