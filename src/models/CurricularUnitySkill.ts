import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import CurricularUnity from './CurricularUnity';
import Skill from './Skill';

interface CurricularUnitySkillAttributes {
  curricularUnityId: number;
  skillId: number;
}

@Table({ tableName: 'curricularUnitySkills' })
export default class CurricularUnitySkill extends Model<CurricularUnitySkillAttributes> implements CurricularUnitySkillAttributes{
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
