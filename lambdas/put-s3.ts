import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { prefix ,region } from "../const";

const client = new S3Client({ region }); 
const BUCKET_NAME = `${prefix}Bucket`.toLowerCase();

export const handler = async (event: any) => {
  try {
    const { fileName, fileContent } = event.body;

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ContentType: "text/plain",
    });

    await client.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File uploaded successfully" }),
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to upload file" }),
    };
  }
};