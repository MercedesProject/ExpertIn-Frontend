<template>
  <!-- <b-container  class="bv-example-row border rounded mb-4" style="border-color:#3698a3 !important;"> -->
  <!-- <b-container fluid class="bv-example-row border border-success"> -->
  <b-card no-body style="border-width:1px;border-color:#7e65c2">
        <b-card-header class="border-0 border-primary" >
            <h3 class="mb-0 text-center" style="color:#7e65c2;">My Favourites</h3>
        </b-card-header>  
    <!-- User Interface controls -->
    <b-row class="lg-6 mb-1">
        <b-col  md="6" class="my-1">
        <b-form-group
          
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
              style="background-color:white;color:#7e65c2;border-color:#7e65c2;"
            ></b-form-input>

            <b-input-group-append>
              <b-button  :enabled="!filter" @click="filter = ''" class="btn-info" style="background-color:#7e65c2;color:white;border-width:1px;border-color:#7e65c2">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col  offset-md="2" md="2" class="my-1" >
        <b-form-group
          
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
              style="background-color:#7e65c2; color:white;"
            >
              <template #first>
                <option value="">Sort</option>
              </template>
            </b-form-select>

          </b-input-group>
        </b-form-group>
        
      </b-col>
    </b-row>
    
    <!-- Main table element -->
    <b-table
      :items="favJobs"
      :fields="fields"
      sort-icon-left
      :current-page="currentPage"
      :per-page="perPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :tbody-transition-props="transProps"
      :filter="filter"
      :filter-included-fields="filterOn"
      responsive="sm"
      show-empty
      small
      @filtered="onFiltered"
      class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
    >
      <template #cell(companyName)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
         <i :id="`${row.index}`" class="ni ni-active-40"></i>
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      
      <template #cell(status)="row">
      <badge class="badge-dot mr-4"  type="">
                        <i :class="`bg-${row.item.class}`"></i>
                        <span class="status" :class="`text-${row.item.class}`">{{row.item.status}}</span>
                    </badge>
      </template>

      <template #cell(favourites)="row" >
         <b-button @click="toggleFav(row.item,row.index)" class="bg-white">
            <i v-if="row.item.favourite" class="fa fa-heart" style="color:red"></i>
            <i v-else class="fa fa-heart" style="color:gray;"></i> 
         </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <b-row align-h="end" class="mr-5">
      <b-col sm="4" md="4" class="my-1 mt-2">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0 customPagination"
          ></b-pagination>
      </b-col>
      <b-col sm="1" md="1" class="my-1">
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
              class="customFormSelect mt-1"
            ></b-form-select>
          <!-- </b-form-group> -->
      </b-col>
    </b-row>
    

    </b-card>
  <!-- </b-container> -->
</template>
 
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        transProps:{
            name: 'flip-list'
        },
        favJobs : [],
        fields: [
          { key: 'favourites', label: 'Favourite',sortable: true, class:"text-center"},
          { key: 'companyName', label: 'Company', sortable: true, sortDirection: 'desc',class:"text-center" },
          { key: 'jobType', label: 'Type', sortable: true, class: 'text-center' },
          { key: 'jobDescription', label: 'Description', sortable: true, class: 'text-center' },
          { key: 'jobSalary', label: 'Salary', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Actions', class:"text-center", },
          {
            key: 'status',
            label: 'Status',
            // formatter: (value, key, item) => {
            //   return value ? 'Yes' : 'No'
            // },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true,
            class:"text-center",
           
          },
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        loading:false,
        remoteConfig:{},
        remoteRows:[],
        employerId: 0
      }
    },
    props:['is_fav'],
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
      formartedItems () {
    if (!this.requests) return []
    return this.requests.map(item => {
      item._rowVariant  = this.getVariant(item.Status);
      item.status = this.getVariant(item.status);
      item.add
      return item
    })
        },
     },
    mounted() {

    },
    methods: {
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      getVariant(status) {
    switch (status) {
      case 1:
        return 'success'
      case 1:
        return 'danger'
      default:
        return 'active'
      }
    },
    toggleFav(obj,index){
      obj.favourite = !obj.favourite;
      
    },
    getFavJobs() {
        axios.get('api/employers/getbyid?id=' + this.$store.state.userData.id)
            .then((response) => {
            this.employerId = response.data.employerId
            axios.post("/api/favoriteJobs/getallbyemployerid?employerId=" + this.employerId).then((response)=>{
                this.favJobs = response.data;
                console.log(response.favJobs);
    })
        })
       
            
    },
     fav(obj){
      this.favoriteJobs.JobId = obj.jobId;
      this.favoriteJobs.EmployerId = this.employerId
       axios.post("/api/favoriteJobs/add",this.favoriteJobs).then((response)=>{
            console.log("fav:" +response.data);
        });
    },
    unfav(obj){
      // obj.favourite = !obj.favourite;
      this.favoriteJobs.JobId = obj.jobId;
      this.favoriteJobs.EmployerId = this.employerId
       axios.psot("/api/favoriteJobs/delete",this.favoriteJobs).then((response)=>{
            
            console.log("unfav:" +response.data);
        });
    }
    },
    created(){
       this.getFavJobs()
    }
  }
</script>
<style>
.customPagination> li >button
{
  color:white;
 background-color:#7e65c2!important;
}
.customPagination> li >span
{
  color: white!important;;
 background-color:#7e65c2!important;
}
.customPagination> li 
{
  flex: none!important;;
}
.customPagination
{
 float: right!important;
}


.customFormSelect 
{
  color:white;
 background-color:#7e65c2!important;
 
}


</style>