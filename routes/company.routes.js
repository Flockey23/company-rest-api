module.exports = app => {
    const companies = require('../Controllers/companyController');
    const router = require("express").Router();
    router.get("/",companies.findAll);
    router.post("/",companies.create);
    router.get("/:id",companies.findOne)
    router.put("/:id",companies.update)
    router.delete("/:id",companies.delete)
    app.use('/api/companies',router);
}