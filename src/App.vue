<template>
 
 










 <check-box
  fieldId="volume"
  v-model:checked="volumeOn"
  label="Volume On"
/>
</template>
  

<script>
import Checkbox from "./components/Checkbox.vue";
import { ref } from "vue";export default {
  name: "App",
  setup() {
    const volumeOn = ref(true);
    return {
      volumeOn,
    };
  },
  components: {
    "check-box": Checkbox,
  },
};
</script>
