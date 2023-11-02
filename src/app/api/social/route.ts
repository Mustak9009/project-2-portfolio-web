import {NextRequest,NextResponse} from 'next/server';
import {prisma} from '@/prisma';
import {ConnectDB} from '@/db';
ConnectDB();
export const GET = async(req:NextRequest)=>{
    try{  
        const res = await prisma.social.findFirst();
        return NextResponse.json({socialLinks:res},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!"},{status:500});
    }
}
export const PUT = async(req:NextRequest)=>{
    try{    
        const reqBody = await req.json();
        const {github, instagram,youtube} = reqBody;
        const res = await prisma.social.update({where:{id:'654328dbcdb0afdc2c73aec3'},data:{github,instagram,youtube}});
        return NextResponse.json({socialLink:res},{status:201});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!"},{status:500});
    }
}