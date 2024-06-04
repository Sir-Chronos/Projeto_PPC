import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "skill" }) // Define table name here
export default class Skill extends Model<Skill> {
  @Column(DataType.STRING) // Define type of the column
  type!: string;

  @Column(DataType.STRING) // Define type of the column
  description!: string;
}
