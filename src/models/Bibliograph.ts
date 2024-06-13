import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface BibliographAttributes {
  type: string;
  description: string;
}

@Table({ tableName: 'bibliograph' })
class Bibliograph extends Model<BibliographAttributes> implements BibliographAttributes {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  type!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description!: string;
}

export default Bibliograph;
