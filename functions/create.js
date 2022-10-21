const Crud = require('../model/schema');

exports.create = async (req, res) => {

    const { TaskId, Title, Status } = req.body;

    if(!TaskId || !Title || !Status) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    let list = new Crud({
        TaskId:TaskId,
        Title:Title,
        Status:Status
      })

      list.save().then(list => {
        res.status(200).json('Task added successfully');
    }).catch(err => {
        res.status(400).send({'fail':err});
    });

};
