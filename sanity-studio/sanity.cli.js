import  sanityClient from "@sanity/client"
import  schemaTypes  from "./schemaTypes";
const client= new sanityClient({
    projectId:import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset:"production",
    useCdn:false,
    apiVersion:'2023-10-31',
    token:import.meta.env.VITE_SANITY_TOKEN,
    schema:{
      types:schemaTypes,
    }
})

export default async function handler(req,res){
 if(req.method!=="POST"){
    return res.status(405).end("Method not allowed")
 }
 const {name,email,message}=req.body;
 if(!name||!email||!message){
    return res.status(400).json({error:"All fields are reqiured"});

 }
 try{
    await client.create({
    _type:"contactMessage",
   name,
   email,
   message,
    })
    res.status(200).json({message:"Form submitted successfully"})
 } catch(error){
    // eslint-disable-next-line no-undef
    console.log("Error handling form submission",error);
  
 }
}