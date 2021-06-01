const server = require("./api/server");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

/* // create a teacher
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
}); */
