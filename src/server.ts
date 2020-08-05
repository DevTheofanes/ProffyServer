import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const users = [
    {
      name: "Theo",
      age: 16,
    },
    {
      name: "Mell",
      age: 16,
    },
  ];

  return res.json(users);
});

app.listen(3333);
