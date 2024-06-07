import { Model, Table, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import Knowledge from './Knowledge';
import Skill from './Skill';
import Bibliograph from './Bibliograph';
import CurricularUnitySkill from './CurricularUnitySkill';

interface CurricularUnityAttributes {
  objective: string;
  name: string;
  knowledges: Knowledge[];
  skills: Skill[];
  bibliographs: Bibliograph[];
}

@Table({ tableName: 'curricularUnity' }) // Define table name here
export default class CurricularUnity extends Model<CurricularUnityAttributes> implements CurricularUnityAttributes{
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  objective!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => Knowledge)
  knowledges!: Knowledge[];

  @BelongsToMany(() => Skill, () => CurricularUnitySkill)
  skills!: Skill[];

  @HasMany(() => Bibliograph)
  bibliographs!: Bibliograph[];
}
