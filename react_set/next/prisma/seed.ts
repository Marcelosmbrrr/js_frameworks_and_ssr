import { PrismaClient } from '@prisma/client';

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

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });