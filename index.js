const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewares
app.use(cors());
app.use(express.json());

//ROUTES//

// create a teacher
app.post("/teacher", async (req, res) => {
  try {
    const { first_name, last_name, homeroom_number, department, email, phone } =
      req.body;

    const newTeacher = await pool.query(
      "INSERT INTO teachers (first_name, last_name, homeroom_number, department, email, phone ) VALUES($1, $2, $3, $4, $5, $6)",
      [first_name, last_name, homeroom_number, department, email, phone]
    );

    res.status(200).send(newTeacher);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get all teachers
app.get("/teachers", async (req, res) => {
  try {
    const allTeachers = await pool.query("SELECT * FROM teachers");

    res.status(200).send(allTeachers.rows);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
