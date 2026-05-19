use("fortuneCloud");
db.students.find();

db.students.insertOne({
    name:"Karan",
    contact:3456218976,
    city:"Sangli"
});

db.students.insertMany([
    {
        name:"Suraj",
        contact:1244217583,
        city:"Kolhapur"
    },
    {
        name:"Rahul",
        contact:1244997583,
        city:"Mumbai"
    }
]);

db.students.find().toArray();

db.students.find();