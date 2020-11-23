const axios = require('axios');

const api_key = process.env.IMM_KEY;
const api_secret = process.env.IMM_SEC;

const KEYS = {
  api_key,
  api_secret
};

// user.birthCoords = lat lon
//latitude = user.birtCoords[0]

// const testUser = {
//   //needs YYYY-MM-DD format... might has well not save as object in schema
//   birthday: '1996-03-20',
//   //24 hour time system
//   birthTime: '12:00',
//   //need latitude and longitude
//   latitude: 40.884819,
//   longitude: -74.006561
// };
// //need to pass user into this parameter
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
      //   headers: {'Authorization': }
    });
    return response.data;
    // user.sunSign = response.data.planets.sun.sign;
    // user.moonSign = response.data.planets.moon.sign;
    // user.ascSign = response.data.angles.asc.sign;
  } catch (error) {
    console.log(error);
    console.log('nonon');
  }
};
