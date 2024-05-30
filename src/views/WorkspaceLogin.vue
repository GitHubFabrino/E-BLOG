<script setup>
import { useShow } from '@/stores/Show'
import { useUsers } from '@/stores/users'

const show = useShow()
const users = useUsers()

function close() {
  show.showErrorLogin = false
  show.hideLoginFunct()
}
</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showModale">
      <div class="formModal">
        <div class="divbtn">
          <button type="button" class="Annuller" @click="close()">X</button>
        </div>

        <h1 class="login">🔐 Connexion !</h1>
        <div class="content">
          <div class="form-group">
            <label for="task" class="form-label mt-4">🔑 Identifiant : </label>
            <input
              v-model="users.emailUsers"
              type="text"
              class="form-control"
              id=""
              aria-describedby=""
            />
          </div>
          <div class="form-group">
            <label for="exampleTextarea" class="form-label mt-4">🔒 Mot de passe :</label>
            <input
              v-model="users.mdpUsers"
              type="password"
              class="form-control"
              id=""
              aria-describedby=""
            />
          </div>
          <p v-if="show.showErrorLogin" class="erreur mt-1">Veuillez vérifier vos information</p>
          <button
            @click="users.Authentification()"
            type="submit"
            class="Modifier btn btn-primary mt-4"
          >
            Connexion
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Login.css"></style>
