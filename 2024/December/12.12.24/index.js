const { log, error } = require("console");
const fs = require("fs");

// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("error reading file");
//     return;
//   }
//   console.log("data recived:", data);
// });

// fs.writeFile("sample2.txt", "99898", (err) => {
//   if (err) {
//     console.error("error writing file");
//     return;
//   }
//   console.log("file created");
// });

fs.appendFile("./sample.txt", "\nsomething something", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("file has been appended");
});
