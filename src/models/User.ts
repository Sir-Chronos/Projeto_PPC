import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface UserAttributes {
  name: string;
  password: string;
  email: string;
}

@Table({ tableName: 'users' })
export default class User extends Model<UserAttributes> implements UserAttributes {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  email!: string;
}
