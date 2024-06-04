import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface SkillAttributes {
  type: string;
  description: string;
}

@Table({ tableName: 'skill' })
class Skill extends Model<Skill, SkillAttributes> implements SkillAttributes {
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

export default Skill;
