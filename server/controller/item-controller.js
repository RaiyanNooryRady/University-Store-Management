import { request, response } from "express";
import Item from "../schema/item-schema.js"

export const addItem = async (request,response) => {

     const item= request.body;
     const newItem= new Item(item);
     try{
         await newItem.save();
         response.status(201).json(newItem);
     }
     catch(error){
          response.status(409).json({message:error.message});
     }
}
export const getItems = async (request,response) => {
     try{
       const items=  await Item.find({});
       response.status(200).json(items);
     }
     catch(error){
       response.status(404).json({message:error.message});
     }
}
export const getItem = async (request,response) => {
     try{
     //   const item=  await Item.find({_id:request.params.id});
     const item=  await Item.findById(request.params.id);
       response.status(200).json(item);
     }
     catch(error){
       response.status(404).json({message:error.message});
     }
}

// Save data of edited item in the database
export const editItem = async (request, response) => {
     let item = request.body;
 
     const editItem = new Item(item);
     try{
         await Item.updateOne({_id: request.params.id}, editItem);
         response.status(201).json(editItem);
     } catch (error){
         response.status(409).json({ message: error.message});     
     }
 }
 // deleting data of item from the database
export const deleteItem = async (request, response) => {
     try{
         await Item.deleteOne({_id: request.params.id});
         response.status(201).json("Item deleted Successfully");
     } catch (error){
         response.status(409).json({ message: error.message});     
     }
 }