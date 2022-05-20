import {Command, Flags} from '@oclif/core'

export default class Generate extends Command {
  static description = 'Generate migration file for an element'

  static examples = [
    'contentful-migration-tools generate',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Generate)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/jaime/git/rd/contentful-migration-tools/src/commands/generate.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
