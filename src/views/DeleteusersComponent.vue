<script setup>
import { useShow } from '@/stores/Show'
import { useUsers } from '@/stores/users'

const show = useShow()
const users = useUsers()



</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showDeleteusers">
      <div class="formModal">
        <h6 class="login">Voulez-vous vraiment supprimer ce compte !</h6>
        <div class="valider">
          <button type="submit" @click="users.deleteOneUsers()"  class="delete btn btn-primary mt-5">OUI</button>
          <button type="button" @click="show.hideDeleteUsersFunct()" class="Annuller btn btn-primary mt-5">
            NON
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Deconnexion.css"></style>
