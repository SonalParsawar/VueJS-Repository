<template>
  <div>
        <button name="submit" value="submit" @click="getDetails">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    methods:{
        getDetails(){
            return axios.get('http://localhost:8085/getCollateralDetails/fetch',{
                params:{

                }
            }).then(response => {
                return response.data;
            }).catch(error => console.log(error));
        }
    }
}
</script>

<style>

</style>