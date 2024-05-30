<script setup>
import { useShow } from '@/stores/Show'
import { useUsers } from '@/stores/users'

const show = useShow()
const users = useUsers()


function deconnexion() {
  localStorage.removeItem('status')
  localStorage.removeItem('nomUsers')
  localStorage.removeItem('idUsers')
  show.hideLogoutFunct()
  show.showUsers = true
  show.showAdmin = false
  show.showWhenLoged = false
  users.nomUsers = ""
  
}
</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showDeconnexion">
      <div class="formModal">
        <h6 class="login">Voulez-vous vraiment se deconnecter !</h6>
        <div class="valider">
          <button type="submit" @click="deconnexion()" class="Modifier btn btn-primary mt-5">OUI</button>
          <button type="button" @click="show.hideLogoutFunct()" class="Annuller btn btn-primary mt-5">
            NON
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Deconnexion.css"></style>
