"use strict";

import Sequelize from "sequelize/types";
import connection from "../database/connectMySQL";

const Admin = connection.define("tbl_admin", {
    id_admin:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    login: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(14),
        allowNull: false
    }
});

Admin.sync();
