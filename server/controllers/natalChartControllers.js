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
  }
};
