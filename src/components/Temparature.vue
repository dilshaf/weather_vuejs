
<script setup>
import Toastify from 'toastify-js';

</script>
<script>
export default {
  data() {
    return {
      data: {},
      currentDate: '',
      
     
      locationMessage: 'Click "Get Location" to retrieve coordinates.',
  
      
    };
  },
  mounted() {
    const initialStatus = window.navigator.onLine ? 'online' : 'offline';
    console.log(`Initially ${initialStatus}`);

    Toastify({
      text: `Initially ${initialStatus}`,
      duration: 4000,
      gravity: 'top',
      position: 'center',
      backgroundColor: 'white',
      color:"black"
    }).showToast();
    const toast = document.querySelector('.toastify');
    if (toast) {
      toast.style.color = 'green';
    }
    this.fetchData();
    this.getLocation()
    this.getCurrentDate();
  },
  methods: {
    async fetchData(latitude,longitude) {
      console.log("fetching data");
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=158e630d561027a093e3c5debde02b4c`);
        console.log(response);
        // console.log(latitude,longitude);
        const data = await response.json();
        this.data = data;
        console.log(data,'data');
      } catch (error) {
        console.error(error);
      }
    },


    

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.locationMessage = `Latitude: ${latitude}, Longitude: ${longitude}`;
            this.fetchData(latitude,longitude)
          },
          (error) => {
            this.locationMessage = `Error getting location: ${error.message}`;
          }
        );
      } else {
        this.locationMessage = 'Geolocation is not supported by this browser.';
      }
    },


    getCurrentDate() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate = today.toLocaleDateString('en-US', options);
    },
  },

  
  
}







</script>






<template>
 <div class="bg-gray-200 min-h-screen flex flex-col bg-cover" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aqE9aEZAWZ0lI47Silwh_NqdkI1encOILA&usqp=CAU')">
  <div class="flex flex-col md:flex-row justify-center">

    <!--First div-->
    <div class="flex justify-center">

    

    
    <div class=" bg-fae2bd p-8 rounded-lg shadow-md mx-4 my-4 md:w-1/2 text-center md:flex-1  text-efa " >
      <h1 class="text-2xl font-bold mb-4 text-center flex items-center justify-center">
         Today 
      </h1>
      <div class="flex justify-center gap-8 items-center">  
        
        
        <img v-if="data.weather && data.weather.length > 0" :src="'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'" alt="Weather Icon">
        <p v-if="data.main && typeof data.main.temp !== undefined" class="font-extrabold text-5xl mb-2">{{ data.main.temp || 'N/A' }}°</p>   
      </div>
      <div class="flex flex-col gap-6 mt-4">
        <!-- <p><strong>sunny</strong></p> -->
        <p><strong>{{ data.weather && data.weather.length > 0 ? data.weather[0].description : 'N/A' }}</strong></p>

        <p>{{ data.name }}</p>
        
        <p>{{ currentDate }}</p>
        <div class="flex items-center justify-center gap-4">
          <p v-if="data.main && typeof data.main.temp !== undefined" class="mr-2">Feels like:{{ data.main.temp || 'N/A' }}</p>
          <div class="w-0 h-6 bg-black">|</div>
          <p class="ml-2">Sunset: 18:20</p>
        </div>
      </div>
    </div>
    </div>
    <!-- Second  div with two inner divs -->
    <div class="rounded-md mx-4 my-4 md:w-1/2 flex flex-col p-4 text-white">
      <!-- Inner div 1 -->
      <div class="bg-gray-300 bg-opacity-20 p-6 rounded-md shadow-md md:w-full h-193">
        <div class="flex justify-around  custom-inline-box">
          <p>Now</p>
          <p>2 AM</p>
          <p>3 AM</p>
          <p>4 AM</p>
          <p>5 AM</p>
        </div>
        <div class="flex justify-around items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
          <p>25°</p>
          <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
          <p>25°</p>
          <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
          <p>23°</p>
          <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
          <p>22°</p>
          <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
          <p>20°</p>
        </div>
        <hr class="mt-4"/>
        <div class="mt-4">
          <div class="flex justify-around  custom-inline-box">
            <p>6 AM</p>
            <p>7 AM</p>
            <p>8 AM</p>
            <p>9 AM</p>
            <p>10 AM</p>
            
          </div>
          <div class="flex justify-around items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
            <p>25°</p>
            <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
            <p>25°</p>
            <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
            <p>23°</p>
            <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
            <p>22°</p>
            <img src="https://cdn-icons-png.flaticon.com/128/716/716180.png" class="w-5"/>
            <p>20°</p>
          </div>
        </div>
      </div>

      <!-- Inner div 2 -->
      <div class="mt-8">
        <p class="font-poppins font-bold text-base leading-7">Random Text</p>
        <p class="font-poppins font-semibold text-sm leading-6">Improve him believe opinion offered met and  end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed  picture men ask.</p>
      </div>
    </div>
  </div>
</div>
</template>






