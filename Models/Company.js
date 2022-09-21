module.exports = (sequelize,Sequelize) => {
    const Company = sequelize.define("company", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        FIO_contact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            isEmail: true,
            allowNull: false
        },
        site: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postcode: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        house: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        geo_width: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        geo_length: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Company;
}
