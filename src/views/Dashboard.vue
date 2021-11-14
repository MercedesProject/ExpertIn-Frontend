<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-row>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
       <b-row class="mt-5">
        <!-- <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col> -->
        
        <b-col xl="8" class="mb-5 mb-xl-0">
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
     JobTable
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
