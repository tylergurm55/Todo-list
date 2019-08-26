const Sequelize = require('sequelize')
const UserModel = require('./user')
const RoutineModel = require('./Routine')
const bcrypt = require('bcrypt')

// connection to the database
const db = new Sequelize((process.env.DATABASE_URL || 'postgres://localhost:5432/routine_me'), {
  database: "routine_me",
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
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

