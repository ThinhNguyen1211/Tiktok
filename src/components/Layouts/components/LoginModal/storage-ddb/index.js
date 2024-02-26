import AWS from 'aws-sdk';

const ddb = new AWS.DynamoDB({
    region: 'us-east-1',
});
export const assignNewUser = (email, username, userID, password, timeStamp, acceptUsingEmail, validateCode, salt) => {
    const tableName = 'UsersInformation';
    const itemData = {
        Email: { S: email },
        Username: { S: username },
        UsersID: { S: userID },
        Password: { S: password },
        TimeStamp: { N: String(timeStamp) },
        AcceptUsingEmail: { S: acceptUsingEmail },
        ValidateCode: { N: String(validateCode) },
        Salt: { S: salt },
    };
    const params = {
        TableName: tableName,
        Item: itemData,
    };

    ddb.putItem(params, function (err, data) {
        if (err) {
            console.error('Lỗi khi đăng ký tài khoản:', err);
            alert('Lỗi khi đăng ký tài khoản !');
            return false;
        } else {
            console.log('Đăng ký tài khoản thành công:', data);
            alert('Đăng ký thành công !');
            return true;
        }
    });
};

export const getEmail = (email, callback) => {
    const tableName = 'UsersInformation';
    const params = {
        TableName: tableName,
        KeyConditionExpression: '#hashKey = :hashValue',
        ExpressionAttributeNames: {
            '#hashKey': 'Email',
        },
        ExpressionAttributeValues: {
            ':hashValue': { S: email },
        },
    };

    ddb.query(params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            const results = data.Items.map((item) => AWS.DynamoDB.Converter.unmarshall(item));
            callback(null, results);
        }
    });
};

export const getUsername = (username, callback) => {
    const tableName = 'UsersInformation';
    const params = {
        TableName: tableName,
        FilterExpression: '#u = :u',
        ExpressionAttributeNames: {
            '#u': 'Username',
        },
        ExpressionAttributeValues: {
            ':u': { S: username },
        },
    };

    ddb.scan(params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            const results = data.Items.map((item) => AWS.DynamoDB.Converter.unmarshall(item));
            callback(null, results);
        }
    });
};
