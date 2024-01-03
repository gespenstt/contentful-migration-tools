oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g contentful-migration-tools
$ contentful-migration-tools COMMAND
running command...
$ contentful-migration-tools (--version)
contentful-migration-tools/0.0.0 darwin-x64 node-v14.17.1
$ contentful-migration-tools --help [COMMAND]
USAGE
  $ contentful-migration-tools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`contentful-migration-tools configure [FILE]`](#contentful-migration-tools-configure-file)
* [`contentful-migration-tools generate [FILE]`](#contentful-migration-tools-generate-file)
* [`contentful-migration-tools help [COMMAND]`](#contentful-migration-tools-help-command)
* [`contentful-migration-tools migrate [FILE]`](#contentful-migration-tools-migrate-file)
* [`contentful-migration-tools plugins`](#contentful-migration-tools-plugins)
* [`contentful-migration-tools plugins:install PLUGIN...`](#contentful-migration-tools-pluginsinstall-plugin)
* [`contentful-migration-tools plugins:inspect PLUGIN...`](#contentful-migration-tools-pluginsinspect-plugin)
* [`contentful-migration-tools plugins:install PLUGIN...`](#contentful-migration-tools-pluginsinstall-plugin-1)
* [`contentful-migration-tools plugins:link PLUGIN`](#contentful-migration-tools-pluginslink-plugin)
* [`contentful-migration-tools plugins:uninstall PLUGIN...`](#contentful-migration-tools-pluginsuninstall-plugin)
* [`contentful-migration-tools plugins:uninstall PLUGIN...`](#contentful-migration-tools-pluginsuninstall-plugin-1)
* [`contentful-migration-tools plugins:uninstall PLUGIN...`](#contentful-migration-tools-pluginsuninstall-plugin-2)
* [`contentful-migration-tools plugins update`](#contentful-migration-tools-plugins-update)

## `contentful-migration-tools configure [FILE]`

Create migration structure folders

```
USAGE
  $ contentful-migration-tools configure [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  Create migration structure folders

EXAMPLES
  $ contentful-migration-tools configure
```

_See code: [dist/commands/configure.ts](https://github.com/gespenstt/contentful-migration-tools/blob/v0.0.0/dist/commands/configure.ts)_

## `contentful-migration-tools generate [FILE]`

Generate migration file for an element

```
USAGE
  $ contentful-migration-tools generate [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  Generate migration file for an element

EXAMPLES
  $ contentful-migration-tools generate
```

_See code: [dist/commands/generate.ts](https://github.com/gespenstt/contentful-migration-tools/blob/v0.0.0/dist/commands/generate.ts)_

## `contentful-migration-tools help [COMMAND]`

Display help for contentful-migration-tools.

```
USAGE
  $ contentful-migration-tools help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for contentful-migration-tools.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `contentful-migration-tools migrate [FILE]`

Run Contentful migrations scripts

```
USAGE
  $ contentful-migration-tools migrate [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  Run Contentful migrations scripts

EXAMPLES
  $ contentful-migration-tools migrate
```

_See code: [dist/commands/migrate.ts](https://github.com/gespenstt/contentful-migration-tools/blob/v0.0.0/dist/commands/migrate.ts)_

## `contentful-migration-tools plugins`

List installed plugins.

```
USAGE
  $ contentful-migration-tools plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ contentful-migration-tools plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `contentful-migration-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ contentful-migration-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ contentful-migration-tools plugins add

EXAMPLES
  $ contentful-migration-tools plugins:install myplugin 

  $ contentful-migration-tools plugins:install https://github.com/someuser/someplugin

  $ contentful-migration-tools plugins:install someuser/someplugin
```

## `contentful-migration-tools plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ contentful-migration-tools plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ contentful-migration-tools plugins:inspect myplugin
```

## `contentful-migration-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ contentful-migration-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ contentful-migration-tools plugins add

EXAMPLES
  $ contentful-migration-tools plugins:install myplugin 

  $ contentful-migration-tools plugins:install https://github.com/someuser/someplugin

  $ contentful-migration-tools plugins:install someuser/someplugin
```

## `contentful-migration-tools plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ contentful-migration-tools plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ contentful-migration-tools plugins:link myplugin
```

## `contentful-migration-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ contentful-migration-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ contentful-migration-tools plugins unlink
  $ contentful-migration-tools plugins remove
```

## `contentful-migration-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ contentful-migration-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ contentful-migration-tools plugins unlink
  $ contentful-migration-tools plugins remove
```

## `contentful-migration-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ contentful-migration-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ contentful-migration-tools plugins unlink
  $ contentful-migration-tools plugins remove
```

## `contentful-migration-tools plugins update`

Update installed plugins.

```
USAGE
  $ contentful-migration-tools plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
