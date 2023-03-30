const key="eZpNzAZtfXQdd37FExrHO3SH6YAihyX4";


//**********************************Weather Information******************************************************************************** */


const getWeather = async (id) => {

    const base ="http://dataservice.accuweather.com/currentconditions/v1/";
    const query =`${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data2 = await response.json();

    return data2[0];

};

//**********************************City Information******************************************************************************** */

const getCity = async (city) => {

    const base ="http://dataservice.accuweather.com/locations/v1/cities/search"   //Ref note 9

    const query=`?apikey=${key}&q=${city}`;

    const response=await fetch(base+query);                                      //Ref note 10
    const data =await response.json();

 return data[0];

};





