import { NextResponse } from "next/server";
import { connectToMongoDB }  from "../../../../lib/mongodb";
import nodemailer from 'nodemailer';
export const POST = async (req, res) => {
  const formData = await req.json();
const { fname ,lname ,email ,dob}=formData
console.log(formData,'formData')
  if (!email) {
    return NextResponse.json({ error: "No email received." }, { status: 400 });
  }
  if(!fname) {
    return NextResponse.json({ error: "Name is Required" }, { status: 400 });

  }


  try {
    const client = await connectToMongoDB();
    const database = client.db('tastychicks');
    const collection = database.collection('contactDetails');
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: '',
    //       pass: '',
          
    //     }
      
    //     /* 
    //     Configure your email service SMTP details here. 
    //     For example, for Gmail, you might use something like this:
    //     service: 'gmail',
    //     auth: {
    //       user: 'your-email@gmail.com',
    //       pass: 'your-email-password'
    //     }
    //     */
    //   });
  
    //   const mailOptions = {
    //     from: 'muhammadfaizanjanjua109@gmail.com', // Sender address
    //     to: email, // Recipient address
    //     subject: 'Thank you for your submission', // Subject line
    //     text: 'Thanks for your submission. We will contact you soon.' // Plain text body
    //   };
  
    //   // Send the email
    //   await transporter.sendMail(mailOptions);
  
    // Insert the file name into the MongoDB collection
    await collection.insertOne({ email: email , fname:fname ,lname:lname  ,mobileNo:mobileNo , dob:dob});


    return NextResponse.json({ Message: "Success", status: 201  , data:{filename , name , email ,description}});

  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};