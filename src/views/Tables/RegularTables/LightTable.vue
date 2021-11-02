<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0"></h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="projects">
            <el-table-column label="Firma"
                             min-width="310px">
            </el-table-column>
            <el-table-column label="İş Tanımı"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Pozisyon"
                             min-width="170px">
            </el-table-column>

            <el-table-column label="Kontenjan" min-width="190px">
               
            </el-table-column>

            <el-table-column label="Statü"
                             min-width="240px">
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="1" :total="5"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import projects from './../projects'
  import { Table, TableColumn} from 'element-ui'
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        currentPage: 1
      };
    }
  }
</script>
