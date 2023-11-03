import {NextRequest,NextResponse} from 'next/server';
import {prisma} from '@/prisma';
import {compare} from 'bcryptjs';
import {ConnectDB} from '@/db';
ConnectDB();
export const POST = async(req:NextRequest)=>{
    try{   
        const reqBody = await req.json();
        const {password} = reqBody;
        
        const getPassword = await prisma.admin.findFirst();
        if(getPassword?.password){
            const comparePassword = await compare(password,getPassword.password);
            if(comparePassword){
                return NextResponse.json({isAdmin:true},{status:200})
            }
        }
        return NextResponse.json({isAdmin:false},{status:401});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!"},{status:500});
    }
}