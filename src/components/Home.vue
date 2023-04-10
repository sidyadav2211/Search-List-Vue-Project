<template>
 <div>
    <h1  class="flex justify-content-center"> Search Below  </h1>
   <div class="flex justify-content-center m-3">
   
    <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <KInputText v-model="search" placeholder="Search"  @input="searchData(search)"  />
</span>
   <!-- <KInputText v-model="search" placeholder="Search Name Here" class="m-3"/>
   <KButton @click="searchData(search)" label="Click Me" class="m-3"/> -->
   </div>
   <KDataTable :value ='records' v-model:filters="filters" paginator showGridlines :rows="10" dataKey="id"  :totalRecords="records?.length"
   :globalFilterFields="['name']" @page="handlePageOrLimitChange($event)">
   <template #header>
      <!-- <div class="flex justify-content-end">
        <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <KInputText v-model="filters['global'].value" placeholder="Search" />
                    </span>
        
      </div> -->
    </template>
    <template #empty>
      <div class="text-center">No records.</div>
    </template>
    <KColumn field="name" header="Name">
         <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.name" :src="`${data.images.jpg.image_url}`" style="width: 50px" />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
    </KColumn>
    </KDataTable>
 </div>


</template>

<script>
import axios from 'axios'
import router from '@/router';
import { useRouteQuery } from '@vueuse/router';

import { FilterMatchMode, FilterOperator } from 'primevue/api';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  // props: {
  //   msg: String
  // }
  data(){
    return {
        dataRecords:[
            {
                id:1,
                name: 'Kailash',
            },
            {
                id:2,
                name: 'SId',
            }
        ],
        search:'',
    queryLimit : useRouteQuery('limit'),
   queryPage : useRouteQuery('page'),
   
   sortColumn : useRouteQuery('sortColumn'),
   sortOrder : useRouteQuery('sortOrder'),
   queryFilters : useRouteQuery('filters'),
        records:null,
        filters: {
                'name': {value: '', matchMode: 'contains'},
                
            },
    }
  },
   mounted() {
        // https://api.jikan.moe/v4/characters?page=1&limit=2&q='jet'
    
    if(this.search.length >=2){
        this.showData()
    }else{
        axios.get('https://api.jikan.moe/v4/characters').then(response => (this.records = response.data.data))
    }
     
   
        
  },
  computed:{
    currentLimit() {
    if (!this.queryLimit) {
      return 15;
    }
    return +this.queryLimit;
  
  },
},
  created() {
        this.initFilters();
    },
     methods: {
        
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                
            };
        },
           handlePageOrLimitChange(event) {
           
    router.push({
      query: {
        page: event.page + 1,
        limit: event.rows,
        filters: this.queryFilters ? this.queryFilters : undefined,
        activeIndex: this.activeIndex ? this.activeIndex : undefined,
      },
    });
  },
  searchData(val){
    console.log(val);
        if(val.length >= 2){
           return axios.get(`https://api.jikan.moe/v4/characters?page=1&limit=${this.currentLimit}&q=${val}`).then(response => (this.records = response.data.data))
        }else{
            console.log("SS")
            return axios.get('https://api.jikan.moe/v4/characters').then(response => (this.records = response.data.data));
        }
        
    }
  
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
