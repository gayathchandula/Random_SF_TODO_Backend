const Crud = require("../model/schema");

exports.deleteById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  Crud.findByIdAndRemove(req.params.id, (err, data) => {
    if (err)
      return res.status(500).send("There was a problem deleting the task.");
    res.status(200).send(`task was deleted`);
  });
};
