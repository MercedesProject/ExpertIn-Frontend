<template>
  <!-- <b-container  class="bv-example-row border rounded mb-4" style="border-color:#3698a3 !important;"> -->
  <!-- <b-container fluid class="bv-example-row border border-success"> -->
 <b-card no-body style="border-width:1px;border-color:#7e65c2">
        <b-card-header class="border-0 border-primary">
            <h3 class="mb-0 text-center" style="color:#7e65c2;">My Favourites</h3>
        </b-card-header>  
    <!-- User Interface controls -->
    <b-row class="lg-6">
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
              <b-button  :enabled="!filter" @click="filter = ''"  style="background-color:#7e65c2;color:white;border-width:1px;border-color:#7e65c2">Clear</b-button>
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
              :a = changeBgWithStatus2
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
    <b-row class="lg-6">

    </b-row>
    <!-- Main table element -->
    <b-table
      :items="items"
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
      <template #cell(name)="row">
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
        <b-col sm="2" md="2" class="my-1">
        <b-form-group
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
    </b-col>
    <b-col sm="4" md="4" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
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
          { favourite: false ,status: "pending", jobType: 40, name: { first: 'Dickerson', last: 'Macdonald'} },
          {favourite: true , status: "accepted", jobType: 21, name: { first: 'Larsen', last: 'Shaw' },},
          {
            favourite: false,
            status: "denied",
            jobType: 9,
            name: { first: 'Mini', last: 'Navarro' },
          },
          {favourite: false , status: "denied", jobType: 89, name: { first: 'Geneva', last: 'Wilson' } },
          { favourite: true ,status: "accepted", jobType: 38, name: { first: 'Jami', last: 'Carney' } },
          {favourite: false , status: false, jobType: 27, name: { first: 'Essie', last: 'Dunlap' } },
          {favourite: true , status: true, jobType: 40, name: { first: 'Thor', last: 'Macdonald' } },
          {
            status: true,
            jobType: 87,
            name: { first: 'Larsen', last: 'Shaw' },
            // _cellVariants: { jobType: 'danger', status: 'warning' }
          },
          { status: false, jobType: 26, name: { first: 'Mitzi', last: 'Navarro' } },
          { status: false, jobType: 22, name: { first: 'Genevieve', last: 'Wilson' } },
          { status: true, jobType: 38, name: { first: 'John', last: 'Carney' } },
          { status: false, jobType: 29, name: { first: 'Dick', last: 'Dunlap' } }
        ],
        fields: [
           { key: 'favourites', label: 'Favourite',sortable: true, class:"text-center", },
          { key: 'name', label: 'Firma', sortable: true, sortDirection: 'desc',class:"text-center" },
          { key: 'jobType', label: 'İş Tanımı', sortable: true, class: 'text-center' },
          { key: 'position', label: 'Pozisyon', sortable: true, class: 'text-center' },
          { key: 'kontenjan', label: 'Kontenjan', sortable: true, class: 'text-center' },
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
  changeBgWithStatus() {
        this.items.forEach(function(obj)
        { if(obj.status ===true){ obj._cellVariants = { status: 'success' } }
        if(obj.status === false){ obj._cellVariants = { status: 'danger'} } });
        // { if(obj.status ==="accepted"){ obj.a = "success"}
        // else if(obj.status === "pending"){ obj.a = "success"}
        // else{{ obj.a = "success"}}
        // });
        return null;
    },
    changeBgWithStatus2() {
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
     },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    //    this.remoteConfig = null;
    //     this.remoteRows = null;
        this.loading = true;
        // axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((response)=>{
        //     // this.remoteRows = response.data.rows;
        //     // this.remoteConfig = response.data.config;
        //     this.loading = false;
        //     console.log(response);
        // });
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
      
    }
    }
  }
</script>