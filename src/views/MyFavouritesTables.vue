<template>
  <div>
    <base-header class="pb-8 pt-5 pt-md-8 bg-gradient-success">
       <!-- Card stats -->
      <b-row class="justify-content-center">
        
        <b-col xl="3" md="6">
          <router-link to="/employeedashboard">
          <stats-card title="Jobs"
                      type="gradient-orange"
                      :sub-title = "totalJobs"
                      icon="ni ni-single-copy-04"
                      class="mb-4">
            <template slot="footer">
            </template>
          </stats-card>
             </router-link>
        </b-col>
        <b-col xl="3" md="6">
          <router-link to="/employeeapplications">
          <stats-card title="My Applications"
                      type="gradient-green"
                      :sub-title = "totalApplications"
                      icon="ni ni-active-40"
                      class="mb-4">

            <template slot="footer">
            
            </template>
          </stats-card>
          </router-link>
        </b-col>
          <b-col xl="3" md="6">
          <router-link to="/employeefavourites">
          <stats-card title="My Favourites"
                      type="gradient-red"
                      :sub-title="totalFav"
                      icon="ni ni-favourite-28"
                      class="mb-4">

            <template slot="footer">
            </template>
          </stats-card>
          </router-link>
        </b-col>
        <b-col xl="3" md="6">
          <router-link to="/employeemessages">
          <stats-card title="Messages"
                      type="gradient-info"
                      sub-title="5"
                      icon="ni ni-chat-round"
                      class="mb-4">

            <template slot="footer">
            </template>
          </stats-card>
          </router-link>
        </b-col>
      
      </b-row>
    </base-header>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <my-favourites-table/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import users from './Tables/users'
  import LightTable from "./Tables/RegularTables/LightTable";
  import MyFavouritesTable from './Tables/RegularTables/MyFavouritesTable.vue';
  import axios from 'axios'


 
 
  export default {
    components: {
      LightTable,
      MyFavouritesTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        users,
        totalJobs : "0" ,
        totalApplications : "0" ,
        totalFav : "0",
        employerId : 0,        
      };
    },
    methods:{
      employersDetail(){
         axios.get('api/employers/getbyid?id=' + this.$store.state.userData.id)
          .then((response) => {
              this.employerId=response.data.employerId;
           axios.get('api/FavoriteJobs/counter?EmployerId='+ this.employerId)
            .then((response) => {
              this.totalFav = response.data
            })
            axios.get('api/ApplicationJobs/counter?id='+  this.$store.state.userData.id)
            .then((response) => {
              console.log(response);
              this.totalApplications = response.data
            })
            axios.get('api/jobs/counter')
            .then((response) => {
              this.totalJobs = response.data;
            })
             })
      },
  },
  created(){
    this.employersDetail();
  }
  };
  
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
