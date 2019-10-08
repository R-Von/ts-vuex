<template>
  <div>
    <Info />
  </div>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import Info from '@/components/Info.vue'


@Component({
  components: {
    Info,
  }
})
export default class VInfo extends Vue{
  
}


</script>

<style lang="scss" scoped>

</style>