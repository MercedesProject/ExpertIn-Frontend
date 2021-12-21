<template>
  
   <!-- <Multiselect
  v-model="value"
  placeholder="Choose a programming language"
  :filter-results="false"
  :min-chars="1"
  :resolve-on-load="false"
  :delay="0"
  :searchable="true"
  :options="options"
/> -->
<Multiselect
  v-model="value"
  mode="tags"
  :close-on-select="false"
  :searchable="true"
  :create-option="true"
  :options="[
    { value: 'batman', label: 'Batman' },
    { value: 'robin', label: 'Robin' },
    { value: 'joker', label: 'Joker' },
  ]"
/>
  
</template>

<script>
  import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'

  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
    value: null,
    }
    },
//  fetchLanguages : async (query) => {
//   // From: https://www.back4app.com/database/paul-datasets/list-of-all-programming-languages/get-started/javascript/rest-api/fetch?objectClassSlug=dataset

//   let where = ''

//   if (query) {
//     where = '&where=' + encodeURIComponent(JSON.stringify({
//       "ProgrammingLanguage": {
//         "$regex": `${query}|${query.toUpperCase()}|${query[0].toUpperCase() + query.slice(1)}`
//       }
//     }))
//   }

//   const response = await fetch(
//     'https://parseapi.back4app.com/classes/All_Programming_Languages?order=ProgrammingLanguage&keys=ProgrammingLanguage' + where,
//     {
//       headers: {
//         'X-Parse-Application-Id': 'XpRShKqJcxlqE5EQKs4bmSkozac44osKifZvLXCL', // This is the fake app's application id
//         'X-Parse-Master-Key': 'Mr2UIBiCImScFbbCLndBv8qPRUKwBAq27plwXVuv', // This is the fake app's readonly master key
//       }
//     }
//   );

//   const data = await response.json(); // Here you have the data that you need

//   return data.results.map((item) => {
//     return { value: item.ProgrammingLanguage, label: item.ProgrammingLanguage }
//   })
// }

}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>