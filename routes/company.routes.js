module.exports = app => {
    const companies = require('../Controllers/companyController');
    const users = require('../Controllers/userController');
    const routerCompanies = require("express").Router();
    const routerAuth = require("express").Router();
    routerCompanies.get("/",companies.findAll);
    routerCompanies.post("/",companies.create);
    routerCompanies.get("/:id",companies.findOne)
    routerCompanies.put("/:id",companies.update)
    routerCompanies.delete("/:id",companies.delete)

    routerAuth.post("/signup",users.signup);
    routerAuth.post("/signin",users.signin);

    app.use('/api/companies',routerCompanies);
    app.use('/api/auth',routerAuth);
}