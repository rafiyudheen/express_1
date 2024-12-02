const { error } = require("console");
const express = require("express");
const { writeFile, readFile } = require("fs");
const cors = require("cors");
const { default: mongoose, Schema } = require("mongoose");

const dotEnv = require("dotenv");
dotEnv.config({ path: "./.env" });

mongoose
  .connect(process.env.CONN_STRING)
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const toDoTask_Schema = new Schema({
  task: { type: String },
  status: { type: String },
});

const todoTaskModel = mongoose.model("todoTasks", toDoTask_Schema);

const app = express();
// const path = "C:\\Entri\\express\\data.json";
port = 3000;

app.use(cors());
app.use(express.json());

// async function getData() {
//   const MyPromise = new Promise((resolve, reject) => {
//     readFile(path, (error, data) => {
//       if (error) {
//         console.log(error);
//         return;
//       }

//       resolve(JSON.parse(data));
//     });
//   });

//   let c = await MyPromise;
//   return c;
// }

app.post("/", async (req, res) => {
  // let parsedData = await getData();
  // // console.log(parsedData)
  // // updating name in shipping_address
  // req.body.id = ++parsedData.maxID;
  // console.log(req.body);
  // parsedData.tasks.push(req.body);

  // writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
  //   if (err) {
  //     console.log("Failed to write updated data to file");
  //     return;
  //   }

  //   });

  await todoTaskModel
    .create(req.body)
    .then(() => {
      res.send("Updated file successfully");
      console.log("Updated file successfully");
    })
    .catch((err) => {
      res.json(err);
    });
});
// console.log(parsedData)

app.get("/", async (req, res) => {
  // let parsedData;

  // let parsedData = await getData();
  // console.log();

  res.send("Connected");
  //parsedData.tasks[0].status="On Progress24"
});

app.patch("/", async (req, res) => {
  // let parsedData = await getData();
  // let index = req.body.index;
  // console.log(req.body);
  // parsedData.tasks.splice(index, 1, req.body.task);
  // writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
  //   if (err) {
  //     console.log("Failed to write updated data to file");
  //     return;
  //   }

  //   console.log("Updated file successfully");
  // });
  res.send("Updated");
});

app.delete("/", async (req, res) => {
  // let parsedData = await getData();
  // console.log(req.body);
  // let index = req.body.index;

  // // console.log(parsedData,"from Delete")

  // parsedData.tasks.splice(index, 1);
  // writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
  //   if (err) {
  //     console.log("Failed to write updated data to file");
  //     return;
  //   }

  //   console.log("Updated file successfully");
  // });

  res.send("Deleted");
});

app.listen(port, () => {
  console.log(`workimg on ${port}`);
});
