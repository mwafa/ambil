#!/usr/bin/env node
const app = require("yargs")
const Table = require("cli-table")
const fs = require("fs")
// const fetch = require("node-fetch")

const db = require("./db")
const { BASE_URL } = require("./constant")

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
        const url = BASE_URL + file_data.url
        fetch(url)
          .then((r) => r.text())
          .then((data) => {
            fs.writeFileSync(file_data.filename, data)
          })
          .catch((e) => {
            console.error("Download Error!!!")
            console.error(e)
          })
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
