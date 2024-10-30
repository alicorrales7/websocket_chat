import dynamoDBDocumentClient from '../db/dynamoClient';
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";


export const checkDynamoDBConnection = async () => {
  try {
    const data = await dynamoDBDocumentClient.send(new ListTablesCommand({}));
    console.log('Conexión exitosa a DynamoDB:', data);
  } catch (error) {
    console.error('Error al conectarse a DynamoDB:', error);
  }
};
