// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );

    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you."
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );

    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("Hello.....");

// callback hell

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\n Yes it is.",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "test.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
