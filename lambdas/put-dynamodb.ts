import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { prefix, region } from "../const";

const client = new DynamoDBClient({ region });
const TABLE_NAME = `${prefix}Table`;

export const handler = async (event: any) => {
  try {
    const { id, name } = event.body;

    const command = new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        id: { S: id },
        name: { S: name }
      }
    });

    await client.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Record inserted successfully" }),
    };
  } catch (error) {
    console.error("Error inserting record:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to insert record" }),
    };
  }
};