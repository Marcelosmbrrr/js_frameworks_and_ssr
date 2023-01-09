import { PrismaClient } from '@prisma/client';
// Faker for seeding - https://fakerjs.dev/
import { faker } from '@faker-js/faker';

/* 
Seeding the database
Documentation: https://www.prisma.io/docs/guides/database/seed-database
*/

const prisma = new PrismaClient();

async function main() {

    const profiles = await prisma.profile.createMany({
        data: [
            { name: 'administrator' },
            { name: 'client' },
            { name: 'support' }
        ]
    });

    const admin = await prisma.user.create({
        data: {
            email: 'admin@gmail.com',
            name: 'Marcelo de Souza Moreira',
            password: '12345',
            profileId: 1
        },
    });

    const data = Array.from({ length: 20 }).map(() => ({
        email: faker.internet.email(),
        name: faker.name.fullName(),
        password: '123456789',
        profileId: 2
    }));

    const users = await prisma.user.createMany({ data });

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })