const fetch = require("node-fetch");
const readline = require("readline-sync");
const chalk = require("chalk");
const getaccount = (username) =>
  new Promise((resolve, reject) => {
    fetch("https://api.github.com/users/" + username, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
(async () => {
  console.log(`
    ********************************************************
    ***************** GET DATA ACCOUNT GITHUB **************
    ********************************************************\n`);
  const username = readline.question(
    chalk.green("[?] ") + "Input Your Username Target : "
  );

  const data = await getaccount(username);
  if (data["message"] == "Not Found") {
    console.log(chalk.red("[+] ") + `Data/Username Not`);
  } else {
    console.log("");
    console.log(chalk.green("[+] ") + `Account : ${data["login"]}`);
    console.log(chalk.green("[+] ") + `Account Name : ${data["name"]}`);
    console.log(chalk.green("[+] ") + `Following  : ${data["following"]}`);
    console.log(chalk.green("[+] ") + `Followers : ${data["followers"]}`);
  }
})();
