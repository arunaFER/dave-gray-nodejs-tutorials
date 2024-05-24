const fs = require("fs");

// // Check if dir exists
// // create dir
// if (!fs.existsSync("./new")) {
//   fs.mkdir("./new", (err) => {
//     if (err) throw err;
//     console.log("Directory created");
//   });
// }

// // Check if dir exists
// // remove dir
// if (fs.existsSync("./new")) {
//   fs.rmdir("./new", (err) => {
//     if (err) throw err;
//     console.log("Directory removed");
//   });
// }

// Check if dir exists and create dir
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");

    // Check if dir exists and remove dir
    if (fs.existsSync("./new")) {
      fs.rmdir("./new", (err) => {
        if (err) throw err;
        console.log("Directory removed");
      });
    }
  });
}
