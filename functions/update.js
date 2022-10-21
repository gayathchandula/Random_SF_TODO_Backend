const Crud = require("../model/schema");

exports.update = async (req, res) => {
  const { id, Status } = req.body;


  if (!id || !Status) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  Crud.findById(req.body.id, (err, data) => {
    if (!data) res.status(404).send("Task is not found");
    else {
      data.Status = req.body.Status;

      data
        .save()
        .then((data) => {
          res.json("Task is updated!");
        })
        .catch((err) => {
          res.status(400).send("Update isn't possible");
        });
    }
  });
};
