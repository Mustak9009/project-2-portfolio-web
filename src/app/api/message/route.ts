import {NextRequest,NextResponse} from 'next/server';
import {prisma} from '@/prisma';
import {ConnectDB} from '@/db';
ConnectDB();
export const POST = async(req:NextRequest)=>{
    try{   
        const reqBody = await req.json();
        const {name,email,message} = reqBody;
        await prisma.message.create({data:{name,email,message}});
        return NextResponse.json({message:'Done'},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!"},{status:500});
    }
}