import { PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDBDocumentClient from '../db/dynamoClient';
import ChatMessage from '../interfaces/chatInterface';

const tableName = process.env.AWS_DYNAMODB_TABLE!;

export const saveChatMessage = async (message: ChatMessage): Promise<void> => {
  const params = {
    TableName: tableName,
    Item: message,
  };

  try {
    await dynamoDBDocumentClient.send(new PutCommand(params));
    console.log('Mensaje guardado exitosamente en DynamoDB');
  } catch (error) {
    console.error('Error al guardar el mensaje en DynamoDB:', error);
    throw new Error('Error al guardar el mensaje en la base de datos');
  }
};

export const getChatMessageById = async (id: string): Promise<ChatMessage | null> => {
  const params = {
    TableName: tableName,
    Key: { id },
  };

  try {
    const result = await dynamoDBDocumentClient.send(new GetCommand(params));
    return result.Item as ChatMessage || null;
  } catch (error) {
    console.error('Error al obtener el mensaje de DynamoDB:', error);
    throw new Error('Error al obtener el mensaje de la base de datos');
  }
};
