<template>
  <!-- <b-container  class="bv-example-row border rounded mb-4" style="border-color:#3698a3 !important;"> -->
  <!-- <b-container fluid class="bv-example-row border border-success"> -->
  <b-card no-body style="border-width:1px;border-color:#7e65c2">
        <b-card-header class="border-0 border-primary" >
            <h3 class="mb-0 text-center" style="color:#7e65c2;">My Applications</h3>
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
              :a = changeBgWithStatus
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
      :items="jobs"
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
          <!-- <b-form-group
            label-for="per-page-select"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          > -->
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
    

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
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
        items: [
          { favourite: false ,status: "pending", jobType: "Front-End", companyName: { first: 'Mercedes', last: 'QLM'},description:"aciklama",salary:2000 },
          {favourite: true , status: "accepted", jobType: "Backend", companyName: { first: 'Mercedes', last: 'Daimler' },description:"deneme",salary:8000},
          {favourite: false, status: "denied",jobType: "a",companyName: { first: 'Mercedes', last: 'BBS' },description:"aciklama",salary:9000},
          {favourite: true , status: "denied", jobType: "b", companyName: { first: 'Mercedes', last: 'FAK' },description:"aciklama",salary:1000 },
          { favourite: true ,status: "accepted", jobType: "c", companyName: { first: 'Dogus', last: 'Holding' },description:"aciklama",salary:12000 },
          {favourite: false , status: "pending", jobType: "Backend", companyName: { first: 'Dogus', last: 'Holding' },description:"aciklama",salary:7000 },
          {favourite: true , status: "accepted", jobType: "Front-End", companyName: { first: 'Mercedes', last: 'FAK' } ,description:"aciklama",salary:6000},
          {favourite: true ,status: "pending", jobType: "Backend",companyName: { first: 'Dogus', last: 'Holding' },description:"aciklama",salary:7500},
          {favourite: false ,status: "denied", jobType: "Front-End", companyName: { first: 'Mercedes', last: 'Daimler' },description:"aciklama",salary:8800 },
          {favourite: true ,status: "pending", jobType: "Front-End", companyName: { first: 'Mercedes', last: 'FAK' },description:"aciklama",salary:9200 },
          {favourite: false , status: "accepted", jobType: "Backend", companyName: { first: 'Mercedes', last: 'BBS' } ,description:"aciklama",salary:6500},
          {favourite: true , status: "pending", jobType: "Front-End", companyName: { first: 'Mercedes', last: 'QLM' },description:"aciklama",salary:5000 }
        ],
        jobs:[],
        fields: [
          { key: 'favourites', label: 'Favourite',sortable: true, class:"text-center"},
          { key: 'companyName', label: 'Company', sortable: true, sortDirection: 'desc',class:"text-center" },
          { key: 'jobType', label: 'Type', sortable: true, class: 'text-center' },
          { key: 'description', label: 'Description', sortable: true, class: 'text-center' },
          { key: 'salary', label: 'Salary', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Actions', class:"text-center", },
          {key: 'status',label: 'Status',sortable: true,sortByFormatted: true,filterByFormatted: true,class:"text-center",},
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
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        loading:false,
            remoteConfig:{},
            remoteRows:[],
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
  // changeBgWithStatus() {
  //       this.items.forEach(function(obj)
  //       { if(obj.status ===true){ obj._cellVariants = { status: 'success' } }
  //       if(obj.status === false){ obj._cellVariants = { status: 'danger'} } });
  //       // { if(obj.status ==="accepted"){ obj.a = "success"}
  //       // else if(obj.status === "pending"){ obj.a = "success"}
  //       // else{{ obj.a = "success"}}
  //       // });
  //       return null;
  //   },
    changeBgWithStatus() {
        this.items.forEach(function(obj)
        {
        if(obj.status ==="pending")
        { obj.class = "info"}
        else if(obj.status === "accepted")
        { obj.class ="success" }
        else{
          obj.class ="danger"
        }
        
        });
        
        return null;
    },
    // changeBgWithJobType() {
    //     this.items.forEach(function(obj)
    //     {
    //     if(obj.jobType ==="Front-End")
    //     { obj.jobTypeClass = "info"}
    //     else if(obj.jobType === "Backend")
    //     { obj.jobTypeClass ="success" }
    //      else if(obj.jobType === "a")
    //     { obj.jobTypeClass ="primary" }
    //     else if(obj.jobType === "b")
    //     { obj.jobTypeClass ="warning" }
    //     else{
    //       obj.jobTypeClass ="danger"
    //     }
        
    //     });
        
    //     return null;
    // },
      
     },
    mounted() {
        
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
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
      console.log(obj.favourite);
      console.log(index);
      
    },
    getApplicationJobs() {
        axios.get("/api/appjobs/getall").then((response)=>{
            this.jobs = response.data;
            console.log(this.jobs);
        });
    },

  },
  created(){
     //this.getApplicationJobs()
  },
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