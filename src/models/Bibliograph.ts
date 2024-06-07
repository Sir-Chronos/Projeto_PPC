import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import CurricularUnity from './CurricularUnity';

interface BibliographAttributes {
  type: string;
  description: string;
  curricularUnityId: number; // Adicionando a chave estrangeira
}

@Table({ tableName: 'bibliograph' })
export default class Bibliograph extends Model<BibliographAttributes> implements BibliographAttributes {
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

  @ForeignKey(() => CurricularUnity) // Definindo a chave estrangeira
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  curricularUnityId!: number;
}