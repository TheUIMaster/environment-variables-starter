var fs = require("fs");

let currentEnv = "dev";

console.log(process.argv[2] + "");
if (process.argv.length > 2) {
  currentEnv = process.argv[2];

  fs.writeFile(
    "./src/date.js",
    "export let date ='" + new Date().toISOString() + "'",
    "utf-8",
    function (err, data) {
      if (err) throw err;
      console.log("Done!");
    }
  );
  fs.readFile(
    "./src/urls/" + currentEnv + ".js",
    "utf-8",
    function (err, data) {
      data
        ? fs.writeFile(
            "./src/apiUrls.js",
            "export " + data,
            "utf-8",
            function (err, data) {
              if (err) throw err;
              console.log("Done!");
            }
          )
        : console.log(err);
    }
  );
}
