const express = require("express");
const app = express();
const userModel  = require ('./usermodel');


app.get('/',function(req,res){
    res.send("hey") 
})

app.get('/create',async (req,res)=>{
  let createduser = await  userModel.create({              //mongoose ka code bydefaut asyncronous hota ha us k syncronus banany k liya async await ka use kar skty hain.
        name: "NasirJameelDogarSahib", 
        username: "NasirDogar11056",
        email : "nasirdogar@gmail.com"
    
    })
    res.send(createduser)
})
app.get('/read',async (req,res)=>{
    let users =  await userModel.find()
    res.send(users)
})
app.get("/update", async (req, res)=>{
 let updateduser= await userModel.findOneAndUpdate({name: "Nasir"}, {name:"NasirJameel" }, {returnDocument: "after"} )
    res.send(updateduser)
})
app.get('/delete', async (req, res)=>{
   let deleteduser=  await userModel.findOneAndDelete({name: "NasirJameelDogarSahib"})  //deleet hony sa pehly 1 bar humain browser wali screen(UI) pa render hota hua nazar ay ga.
    res.send(deleteduser)
})
app.listen(3000);