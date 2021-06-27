import { Model, DataTypes } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        filename: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          field: 'created_at',
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: 'updated_at',
        },
        url_file: {
          type: DataTypes.VIRTUAL,
          get() {
            switch (process.env.STORAGE_TYPE) {
              case 's3':
                return `${process.env.AWS_BUCKET_URL}/${this.filename}`;
              case 'local':
                return `${process.env.APP_URL}:${process.env.PORT}/files/${this.filename}`;
              default:
                return null;
            }
          },
        },
      },
      {
        sequelize,
        tableName: 'files',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default File;
