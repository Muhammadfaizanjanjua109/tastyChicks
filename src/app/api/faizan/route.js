import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { connectToMongoDB }  from "../../../../lib/mongodb";

export const POST = async (req, res) => {
  const formData = await req.formData();















  
  const file = formData.get("files");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const name = formData.get("name");
  if(!name) {
    return NextResponse.json({ error: "Name is Required" }, { status: 400 });

  }
  const email = formData.get("email");
  const description = formData.get("description");

  if(!email) {
    return NextResponse.json({ error: "Name is Required" }, { status: 400 });

  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    const client = await connectToMongoDB();
    const database = client.db('tastychicks');
    const collection = database.collection('memories');

    // Insert the file name into the MongoDB collection
    await collection.insertOne({ fileName: filename , name:name ,email:email ,  description:description});


    return NextResponse.json({ Message: "Success", status: 201  , data:{filename , name , email ,description}});
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};


export const GET = async (req, res) => {
    try {
      // Connect to MongoDB
      const client = await connectToMongoDB();
      const database = client.db('tastychicks');
      const collection = database.collection('memories');
      // Fetch data from MongoDB (Example: Fetch all documents)
      const data = await collection.find({}).toArray();
  
      return NextResponse.json({ Message: 'Success', status: 200, data });
    } catch (error) {
      console.log('Error occurred: ', error);
      return NextResponse.json({ Message: 'Failed', status: 500 });
    }
  };