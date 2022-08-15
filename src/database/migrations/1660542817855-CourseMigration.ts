import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseMigration1660542817855 implements MigrationInterface {
    name = 'CourseMigration1660542817855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`COUR_name\` varchar(255) NOT NULL, \`COUR_is_active\` tinyint NULL DEFAULT 1, \`COUR_image_url\` varchar(255) NOT NULL, \`COUR_description\` varchar(255) NOT NULL, \`COUR_total_lessons\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`course\``);
    }

}
