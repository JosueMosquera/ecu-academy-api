import {MigrationInterface, QueryRunner} from "typeorm";

export class renameName1660273716244 implements MigrationInterface {
    name = 'renameName1660273716244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_226bb9aa7aa8a69991209d58f5\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`userName\` \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`username\` \`userName\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_226bb9aa7aa8a69991209d58f5\` ON \`users\` (\`userName\`)`);
    }

}
