<template>
    <div @dragenter.prevent="toggleActive" 
    @dragleave.prevent="toggleActive" 
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{'active-dropzone' : active}"
    class="dropzone">
    <span>Drag or Drop File</span>
    <span>OR</span>
    <label class="labell" for="file">Select File</label>
    <input class="input" type="file"  @change="selectFile($event)" id="file"/>
    
        
    </div>
</template>

<script >
import axios from 'axios';
export default {
   name: "DropZone",
   data() {

       return {
           active: false,
           file:"",  
       }
   },
   methods: {
      toggleActive() {
        this.active = !this.active;
      },
      selectFile(event){
        this.file = event.target.files[0];
        console.log("select file fonksiyonu çalıştı");
     
     },
     
   },
};
</script>
<style scoped lang = "scss">
.dropzone {
    width: 280px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #41b8;
    background-color: #fff;
    transition: 0.3s ease all;

    
}
.labell {
    padding: 8px 12px;
    color: #fff;
    background-color: #41b8;
    transition: 0.3s ease all;
}
.input {
        display: none;
}

.active-dropzone {
    color: #fff;
    bordercolor: #fff ;
    background-color: #41b8;

    laabel {
        background-color: #fff;
        color: #41b8;
    }
}
</style>