const mongoose = require('mongoose');

main()
  .then((res) => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
const employee = mongoose.model("employee", userSchema);

User.deleteMany({name : "adam"}).then((res) => {
  console.log(res);
})
.catch(function errMessage(err){
  console.log(err);
});;

User.find({}).then((res) => {
  console.log(res);
})
.catch(function errMessage(err){
  console.log(err);
});

// User.updateOne({ name: "eva" }, { age: 73 });


// User.find({age:{$gt:30}}).then((res) => {
//   console.log(res);
// })
// .catch(function errMessage(err){
//   console.log(err);
// });


// User.insertMany([
//   {
//     name: "tony",
//     email: "tony@gmail.com",
//     age: 32,
//   },
//   {
//     name: "john",
//     email: "john@gmail.com",
//     age: 82,
//   },
//   {
//     name: "eva",
//     email: "eva@gmail.com",
//     age: 17,
//   }
// ]).then((res) => {
//   console.log(res);
// });

// const user1 = new User({
//   name : "adam",
//   email:"adam@gmail.com",
//   age : 48,
// });

// user1.save();

// const user2 = new User({
//   name : "eve",
//   email:"eve@gmail.com",
//   age : 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });