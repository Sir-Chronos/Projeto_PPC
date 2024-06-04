import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import CurricularUnity from './CurricularUnity';
import Skill from './Skill';

@Table({ tableName: 'curricularUnitySkills' })
export default class CurricularUnitySkill extends Model<CurricularUnitySkill> {
  @ForeignKey(() => CurricularUnity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  curricularUnityId!: number;

  @ForeignKey(() => Skill)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  skillId!: number;
}
