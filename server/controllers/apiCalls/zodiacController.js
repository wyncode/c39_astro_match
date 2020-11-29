if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const axios = require('axios');

const api_key = process.env.IMM_KEY;
const api_secret = process.env.IMM_SEC;

const KEYS = {
  api_key,
  api_secret
};

exports.getSigns = async (user) => {
  try {
    let response = await axios({
      method: 'post',
      url: 'https://api.immanuel.app/chart/natal',
      data: {
        ...KEYS,
        birth_date: user.birthday,
        birth_time: user.birthTime,
        latitude: user.birthdayCoords[0],
        longitude: user.birthdayCoords[1],
        house_system: 'placidus'
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

exports.getNatalChart = async () => {
  var userId = `${req.user.id}`;
  var apiKey = `${process.env.ASTRO_APIKEY}`;
  var data = 'JSON Request Data';
  try {
    let request = await async({
      url: 'https://json.astrologyapi.com/v1/' + api,
      method: 'POST',
      dataType: 'json',
      headers: {
        authorization: 'Basic ' + btoa(userId + ':' + apiKey),
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    });
    return request.then(
      function (resp) {
        return resp;
      },
      function (err) {
        return err;
      }
    );
  } catch (error) {
    console.log(error);
  }
};
