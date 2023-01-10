import { client as prisma } from './client';
// Faker for seeding - https://fakerjs.dev/
import { faker } from '@faker-js/faker';
// Bcrypt 
import { hash } from 'bcryptjs';

/* 
Seeding the database
Documentation: https://www.prisma.io/docs/guides/database/seed-database
*/

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
            password: await hash('12345', 8),
            profileId: 1
        },
    });

    const password_hash = await hash('123456789', 8);

    const users = await prisma.user.createMany({
        data: [
            { name: faker.name.fullName(), email: faker.internet.email(), password: password_hash, profileId: 2 },
            { name: faker.name.fullName(), email: faker.internet.email(), password: password_hash, profileId: 2 },
            { name: faker.name.fullName(), email: faker.internet.email(), password: password_hash, profileId: 2 },
            { name: faker.name.fullName(), email: faker.internet.email(), password: password_hash, profileId: 2 },
            { name: faker.name.fullName(), email: faker.internet.email(), password: password_hash, profileId: 2 }
        ]
    });

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