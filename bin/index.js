#!/usr/bin/env node
const app = require("yargs")
const db = require("./db")
const Table = require("cli-table")

app
  .scriptName("ambil")
  .usage("$0 <cmd> [args]")
  .command(
    "get [name]",
    "Get config file",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        default: "",
        describe: "name of config file",
      })
    },
    (argv) => {
      const config_files = db.filter((i) => i.name === argv.name)
      if (config_files.length < 1) console.log("Config File not found!")
      else {
        const file_data = config_files[0]
        console.log(`Downloading ${file_data.filename}`)
        // TO DO
        // Download files..
      }
    }
  )
  .command("list", "Show all config list", () => {
    const table = new Table({
      head: ["Name", "Filename"],
    })
    table.push(...db.map((item) => [item.name, item.filename]))
    console.log(table.toString())
  })
  .help().argv
