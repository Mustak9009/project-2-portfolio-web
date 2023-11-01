import {NextRequest,NextResponse} from 'next/server';
import {prisma} from '@/prisma';
import {ConnectDB} from '@/db';
ConnectDB();
export const GET = async(req:NextRequest)=>{
    try{  
        const res = await prisma.projects.findMany();
        return NextResponse.json({projects:res},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!"},{status:500});
    }
}
export const POST = async(req:NextRequest)=>{
    try{   
        const reqBody = await req.json();
        const { title,description ,url,img } = reqBody;
        const res = await prisma.projects.create({data:{title,description,url,img}});
        return NextResponse.json({project:res},{status:201});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!"},{status:500});
    }
}