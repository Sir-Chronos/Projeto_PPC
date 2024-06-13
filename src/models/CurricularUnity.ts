import { Model, Table, Column, DataType, BelongsTo, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import PPC from './PPC';
import Bibliograph from './Bibliograph';
import Knowledge from './Knowledge';
import Skill from './Skill';
import CurricularUnityBibliograph from './CurricularUnityBibliograph';
import CurricularUnityKnowledge from './CurricularUnityKnowledge';
import CurricularUnitySkill from './CurricularUnitySkill';

interface CurricularUnityAttributes {
  objective: string;
  name: string;
  ppcId: number;  // Foreign key to PPC
}

@Table({ tableName: 'curricularUnity' })
export default class CurricularUnity extends Model<CurricularUnityAttributes> implements CurricularUnityAttributes {
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

  @ForeignKey(() => PPC)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ppcId!: number;

  @BelongsTo(() => PPC)
  ppc!: PPC;

  // Define the many-to-many relationship with Bibliograph
  @BelongsToMany(() => Bibliograph, () => CurricularUnityBibliograph)
  bibliographs!: Bibliograph[];

  // Define the many-to-many relationship with Knowledge
  @BelongsToMany(() => Knowledge, () => CurricularUnityKnowledge)
  knowledges!: Knowledge[];

  // Define the many-to-many relationship with Skill
  @BelongsToMany(() => Skill, () => CurricularUnitySkill)
  skills!: Skill[];
}
