const DB = require('./DBController');
const Company = DB.db.companies;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title && !req.body.FIO_contact && !req.body.phone && !req.body.email && !req.body.site && !req.body.postcode
        && !req.body.city && !req.body.street && !req.body.house && !req.body.latitude && !req.body.longitude) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const company = {
        title: req.body.title,
        FIO_contact: req.body.FIO_contact,
        phone: req.body.phone,
        email: req.body.email,
        site: req.body.site,
        postcode: req.body.postcode,
        city: req.body.city,
        street: req.body.street,
        house: req.body.house,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }

    Company.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Company."
            });
        });
};

exports.findAll = (req, res) => {
    Company.findAll({raw:true}).then(companies=>{
        res.send(companies);
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Companies"
        })
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Company.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            } else {
              res.status(404).send({
                  message: `Cannot find Company with id = ${id}.`
              });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error retrieving Company with id = ${id}.`
            });
        })

};

exports.update = (req, res) => {
    const id = req.params.id;

    Company.update(req.body, {
        where : { id: id }
    })
        .then(data => {
            if(data) {
                res.send({
                    message: "Company was updated successfully."
                });
            }else {
                res.send({
                    message: `Cannot update Company with id= ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Company with id= ${id}error ${err}`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Company.destroy({
        where: { id: id }
    })
        .then(num  => {
            if (num === 1) {
                res.send({
                    message: "Company was deleted successfully."
                })
            } else {
                res.send({
                    message: `Cannot delete Company with id = ${id}`
                });
            }
        })
        .catch(err =>{
        res.status(500).send({
            message: `Error deleting Company with id=${id}.${err.message}`
        });
      });
};