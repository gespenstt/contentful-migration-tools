import {Command, Flags} from '@oclif/core'

export default class Configure extends Command {
  static description = 'Create migration structure folders'

  static examples = [
    'contentful-migration-tools configure',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    path: Flags.string({char: 'p', description: 'name of the folder that will contain the scripts. e.g. "migrations"'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  public async run(): Promise<void> {
    this.log(`path=${process.cwd()}`)
  }
}
