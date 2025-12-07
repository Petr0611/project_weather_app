# project_weather_app

Weather App

## Project Details

1. The page should contain:
   a. Title – “Weather app”  
   b. Input field for entering a city  
   c. “Search” button  
   d. Area for displaying weather data or error messages

2. When clicking the “Get Weather” button, a request should be sent to the following URL:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APP_ID}

3. While waiting for the response, a loading indicator should be displayed, for example by disabling the “Search” button and showing the word _Loading…_ under the form. Previous response data should be hidden.

4. After successfully receiving the data, it should be displayed on the page (see design).

5. If an error occurs, its details (code and message) should be displayed on the page instead of the weather data.

6. If the input field is empty and the “Get Weather” button is clicked, an alert should appear asking the user to enter a city name.

7. Design link:  
   [Figma Design](https://www.figma.com/design/fwgYIR4OoE2eC3UGw5ZUWD/Untitled?node-id=298-36&t=XuZXvaSdNoDTykhD-0)

8. Link for retrieving the weather icon (you should extract the icon name from the API response):

http://openweathermap.org/img/w/${icon}.png
