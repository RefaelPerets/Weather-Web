// const getLocation = async () => {
//   try {
//     const response = await fetch("https://ipapi.co/json/");
//     if (!response.ok) {
//       throw new Error("Problem fetching location data");
//     }
//     const data = await response.json();

//     const latitude = data.latitude;
//     const longitude = data.longitude;
//     const city = data.city;

//     return { latitude, longitude, city };
//   } catch (error) {
//     console.error("Error fetching location:", error.message);
//     return { latitude: 32.9499, longitude: 35.2132, city: "Jerusalem" };
//   }
// };

// export default getLocation;

const getLocation = async () => {
    try {
      return new Promise(async (resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
  
              try {
                const reverseGeocodeResponse = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d36aa2e0e9f24b3ba50056050649c608&language=en`);
                if (!reverseGeocodeResponse.ok) {
                  throw new Error("Problem fetching reverse geocoding data");
                }
                const reverseGeocodeData = await reverseGeocodeResponse.json();
                const city = reverseGeocodeData.results[0]?.components.city || "Unknown City";
                resolve({ latitude, longitude, city });
              } catch (geocodeError) {
                console.error("Error fetching reverse geocoding data:", geocodeError.message);
                // If reverse geocoding fails, still return coordinates with a default city
                const defaultCity = "Unknown City";
                resolve({ latitude, longitude, city: defaultCity });
              }
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          throw new Error("Geolocation is not supported by this browser.");
        }
      });
    } catch (error) {
      console.error("Error fetching location:", error.message);
      return { latitude: 32.9499, longitude: 35.2132, city: "Jerusalem" };
    }
  };
  
  export default getLocation;
  
  
