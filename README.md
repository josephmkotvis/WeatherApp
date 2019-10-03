# WeatherApp

MERN stack weather app using openWeatherMapAPI with salesforce styles

This application allows you to create a location with a name, description and city.
The locations will be visible on the left with the current weather.
You can click on the location to view the locations description, more detailed current weather and the location's 5 day forecast in 3 hour increments.

---

To run on your local:

Run npm install in the main directory and client directory.

Export the openWeatherMapAPI key as a const weatherAPIKEY in client/src/utils.

Your config/default.json should look as following :
{
"mongoURI" : {Your mongodb application connection string}
}

--
