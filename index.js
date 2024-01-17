const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // Add this line

const PORT = 8080;

app.get("/tshirt", (req, res) => {
  res.status(200).send([
    {
      tshirt: "plain",
      size: "large",
      type: "full-hand",
      team: "real-madrid",
      player: "10",
    },
    {
      tshirt: "striped",
      size: "xxl",
      type: "sleeve-less",
      team: "juventus",
      player: "1",
    },
    {
      tshirt: "checked",
      size: "medium",
      type: "half-hand",
      team: "barcelona",
      player: "11",
    },
  ]);
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    return res
      .status(418)
      .send({ message: "Send something in the logo da dappi manadya" });
  }

  res.send({
    tshirt: `T-shirt with your ${logo} and ID of ${id}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
