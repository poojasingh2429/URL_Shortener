import {Url} from "../Models/Urls.js";
import shortid from "shortid";

export const shortUrl =async (req,res)=>{
   const longUrl =req.body.longURL;
   const shortCode = shortid.generate();

   const shortUrl =`http://localhost:1000/${shortCode}`


   // save to database

   const newUrl = new Url({shortCode,longUrl})
   await newUrl.save();

   console.log("short saved =",newUrl)

   res.render("index.ejs",{shortUrl})
}


export const getOriginalUrl = async (req,res)=>{
   const shortCode = req.params.shortCode

   const originalUrl =await Url.findOne({shortCode})

   if(originalUrl){
      res.redirect(originalUrl.longUrl);
   }else{
      res.json({message:"invalid shorcode"})
   }
}