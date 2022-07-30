import {MigrationInterface, QueryRunner} from "typeorm";

export class usersMigration1659147019412 implements MigrationInterface {
    name = 'usersMigration1659147019412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`password\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_51b8b26ac168fbe7d6f5653e6c\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_51b8b26ac168fbe7d6f5653e6c\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
