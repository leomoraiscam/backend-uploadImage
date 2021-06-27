import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          field: 'created_at',
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.File, { foreignKey: 'user_id', as: 'files' });
  }
}

export default User;
