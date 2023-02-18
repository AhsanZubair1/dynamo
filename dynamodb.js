const AWS = require('aws-sdk');

AWS.config.update({
  region: 'your-dynamodb-region'
});

const dynamodb = new AWS.DynamoDB();

const tableName = 'your-table-name';

const params = {
  TableName: tableName,
  KeySchema: [
    { AttributeName: 'partitionKey', KeyType: 'HASH' },
    { AttributeName: 'sortKey', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'partitionKey', AttributeType: 'S' },
    { AttributeName: 'sortKey', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully:', data);
  }
});
