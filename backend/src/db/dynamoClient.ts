import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(client);

export default dynamoDBDocumentClient;
