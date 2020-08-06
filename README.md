# Ambil CLI

CLI Application to download default config file

## Install

```shell
npm install -g ambil-cli
```

## Help

```shell
ambil --help
```

```
ambil <cmd> [args]

Commands:
  ambil get [name]  Get config file
  ambil list        Show all config list

Options:
  --version  Show version number  [boolean]
  --help     Show help            [boolean]
```

## Basic Usage

### Show all configs

```shell
ambil list
```

```
┌───────────┬───────────────┐
│ Name      │ Filename      │
├───────────┼───────────────┤
│ gitignore │ .gitignore    │
├───────────┼───────────────┤
│ tsconfig  │ tsconfig.json │
├───────────┼───────────────┤
│ gitkeep   │ .gitkeep      │
├───────────┼───────────────┤
│ prettier  │ .prettierrc   │
├───────────┼───────────────┤
│ pysetup   │ setup.cfg     │
└───────────┴───────────────┘
```

### Download

Example download `tsconfig.json`

```shell
ambil get tsconfig
```
