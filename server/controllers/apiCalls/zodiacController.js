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
    console.log('nonon');
  }
};
