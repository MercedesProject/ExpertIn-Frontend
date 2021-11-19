<template>
  <div>
    <base-header class="pb-4 pt-5 pt-md-8 bg-gradient-success">
       <!-- Card stats -->
      <b-row class="justify-content-center">
        
        <b-col xl="3" md="6">
          <stats-card title="İlan Sayısı"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-single-copy-04"
                      class="mb-4">

            <template slot="footer">
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Başvurularım"
                      type="gradient-green"
                      sub-title="3"
                      icon="ni ni-active-40"
                      class="mb-4">

            <template slot="footer">
            
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Mesajlar"
                      type="gradient-info"
                      sub-title="5"
                      icon="ni ni-chat-round"
                      class="mb-4">

            <template slot="footer">
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Profil Görüntülenme"
                      type="gradient-red"
                      sub-title="4"
                      icon="ni ni-badge"
                      class="mb-4">

            <template slot="footer">
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="bg-white">
       <!-- <b-row class="mt-2 justify-content-center">
        <b-col xl="5" class="mt-5 mb-5 mb-xl-0 " border-variant="success" header="Success" align="center">
          <advert-card></advert-card>
        </b-col>
        <b-col xl="5" class="mt-5 mb-5 mb-xl-0 offset-xl-1" border-variant="success" header="Success" align="center">
          <fav-card></fav-card>
        </b-col>
      </b-row> -->
       <b-row class="">
        <b-col xl="6" class="mt-5 mb-5 mb-xl-0" border-variant="success" header="Success" align="center">
          <label for="" class="w-100 border rounded" style="border-color:#3698a3!important;">Başvurularım</label>
          <job-table></job-table>
        </b-col>
        <b-col xl="6" class="mt-5 mb-5 mb-xl-0" border-variant="success" header="Success" align="center">
           <label for="" class="w-100 border rounded" style="border-color:#3698a3!important;">Kaydedilenler</label>
          <job-table></job-table>
        </b-col>
      </b-row>
     </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  import JobTable from './Dashboard/JobTable.vue';
 

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
     PageVisitsTable,
     SocialTrafficTable,
     JobTable,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
