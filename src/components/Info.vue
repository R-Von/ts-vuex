<template>
  <div>
    <p>
      Full name : {{ fullName }}
    </p>
    <p>
      Email : {{ email }}
    </p>
  </div>  
</template>

<script lang="ts">

import { State, Action, Getter } from 'vuex-class'
import { Vue , Component } from 'vue-property-decorator'
import { ProfileState , User } from '../stores/profile/types'
const namespace:string = 'profile'

@Component
export default class Info extends Vue{
  @State('profile') profile!:ProfileState;
  @Action('fetchData',{ namespace }) fetchData:any
  @Getter('fullName',{ namespace }) fullName!:string


  private mounted(){
    // console.log('store')
    this.fetchData()
    console.log(this.$store)

  }

  get email(){
    const user = this.profile&&this.profile.user
    return ( user && user.email ) || '' 
  }
}


</script>

<style lang="scss">

</style>