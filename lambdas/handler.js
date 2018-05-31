import axios from 'axios';

async function httpGet(url) {
    const result =  await axios.get(url);
    // console.log(result.data);
    return result.data;
}

export async function gitHubUser(event, context, callback) {

    try{
        const data  = await httpGet('https://api.github.com/users/oleturvoll');

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Your Http Get was successful, got user: ',
                input: data
            }),
        };

        callback(null, response);
    } catch(error) {
        const response = {
            statusCode: 404,
            body: JSON.stringify({
                message: error.message,
                input: null
            }),
        };

        callback(null, response);

    } finally {
        console.log('done!')
    }
}


