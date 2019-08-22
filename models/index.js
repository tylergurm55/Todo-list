const Sequelize = require('sequelize')
const UserModel = require('./user')
const RoutineModel = require('./Routine')
const bcrypt = require('bcrypt')

// connection to the database
const db = new Sequelize({
  database: "express_auth_db",
  dialect: 'postgres'
})




const User = UserModel(db, Sequelize);

User.beforeCreate(async (user, options) => {

    //dodo => %^*JU#*bhjfhUi^&#
    const hashedPassword = await bcrypt.hash(
        user.password,
        Number(process.env.SALT_ROUNDS)
    )
    user.password = hashedPassword
});

const Routine = RoutineModel(db,Sequelize)
User.hasMany(Routine)
Routine.belongsTo(User)

module.exports = {
  db,
  User,
  Routine
}

