import { PrismaClient } from "@prisma/client";

declare global {
    var prisma : PrismaClient | undefined
};


// globalThis is like a global object that we added prisma to
const prismadb = globalThis.prisma || new PrismaClient(); 

// This line is for development. NextJs hot reload would make a bunch of prisma clients so we prevent this from happening here
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;