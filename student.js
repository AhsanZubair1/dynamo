const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'}); // replace with your desired region

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "Students",
  KeySchema: [
    { AttributeName: "name", KeyType: "HASH" },  // Partition key
    { AttributeName: "class", KeyType: "RANGE" }  // Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" },
    { AttributeName: "class", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
};
 const create = async () => {
  dynamodb.createTable(params, function(err, data) {
    if (err) {
      console.error("Error creating table: ", err);
    } else {
      console.log("Table created successfully: ", data);
    }
  });

 }

 const enter = async () => {
  await create();
 }

 enter();

 

 const docClient = new AWS.DynamoDB.DocumentClient();

const paramss = {
  TableName: "Students",
  Item: {
    "name": "John Doe",
    "class": "History"
  }
};
const puts = async () => {
  docClient.put(paramss, function(err, data) {
    if (err) {
      console.error("Error adding item: ", err);
    } else {
      console.log("Item added successfully: ", data);
    }
  });
  
}

const update = async () => {
  await puts();

}
update()







