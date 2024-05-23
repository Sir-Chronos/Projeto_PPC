import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
class Skill extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;
}

export default Skill;
