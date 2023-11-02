export const message = async() =>{
    try{
        const res = await fetch('/api/message');
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
        throw new Error("Something goingh wrong .....!!");
    }
}