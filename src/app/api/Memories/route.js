// // pages/api/upload.js
// // import nextConnect from 'next-connect';
import mongoConnect from '../../../db';
// // import User from '../../models/User';
// import upload from '../../../../middlewares/upload';
import Memories from '../../../../models/Memories';
// db()
// // const handler = nextConnect();

import {  NextResponse } from "next/server"

// handler.use(upload.single('image'));

// handler.post(async (req, res) => {
//   try {
//     // Extract 'name', 'email', and 'image' from the request body
//     const { name, email } = req.body;
//     const image = req.file.path;

//     // Create a new user document
//     const newUser = new Memories({
//       name,
//       email,
//       image,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while uploading the image.' });
//   }
// });

// export default handler;


export async function POST(request) {
  try {
    console.log(request.file,'file')

        // Extract 'name', 'email', and 'image' from the request body
        const { name, email } = request.body;
        // const image = request?.file?.path;

// console.log(name,email ,image ,'lfoasfoasodk')


        try {
          await mongoConnect()
        } catch (error) {
          return NextResponse.json({error :'no connection found'})
        
        }
        // Create a new user document
        const newUser = new Memories({
          name,
          email,
          // image,
        });
    
        // Save the user to the database
        await newUser.save();
    
        


  return NextResponse.json({messege:newUser ,status:'200'})

      } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'An error occurred while uploading the image.' })
        // res.status(500).json({});
      }












}