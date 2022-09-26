import SuperTest from 'supertest';
import { writeJsonFile } from 'write-json-file'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const account = require('./uname10.json');


const api = SuperTest('https://onlinetestapistg.astra.co.id');
const setPayload = ( Username, Password) => ({
    "UserName": Username,
    "Password": Password,
});

const getToken = async () => {
    const daftarToken = [];
    let vu = 1;
    const tokenPool = account.map(async (element) => {
        let response = await api.post('/api/User/Login')
            .set('applicationcode', '41D69A9A-86D8-4C00-842B-B04053030FCE')
            .set('clienttag', 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339')
            .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36')
            .send(
                setPayload(element.Username, element.Password)
            );
        console.log(response)
        // response = JSON.parse(response.text);
        // console.log(response)
      
        console.log(response._body.AccessToken)
        daftarToken.push(
            {
                noVU: vu,
                UserName: element.Username,
                Password: element.Password,
                ScheduleCode: element.ScheduleCode,
                q: element.q,
                AccessToken: response._body.AccessToken,
            }
        )
        console.log(daftarToken)
        vu += 1;
        // console.log(daftarToken)
        return daftarToken;
    });
    await Promise.all(tokenPool);

    await writeJsonFile('./token10.json', daftarToken);
}

(async function () {
    await getToken();
}());