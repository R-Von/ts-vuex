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
const namespace = 'profile'

@Component
export default class Info extends Vue{
  @State('profile',{namespace}) public profile!:ProfileState
  @Action('fetchData' , { namespace }) fetchData:any
  @Getter('fullName' , { namespace }) fullName!:string



  private mounted(){
    // this.fetchData()
  
    console.log(this.$store)
  }

  get email(){
    const user = this.profile&&this.profile.user
    return ( user && user.email ) || '' 
    // return ''
  }

  // get profile(){
  //   return this.$store.
  // }
  // private created() {
  //   this.stateProfile
  // }


}


</script>

<style lang="scss">

</style>