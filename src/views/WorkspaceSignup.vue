<template>
  <div class="main">
    <h1>Créer un compte</h1>
    <div class="content">
      <div class="title"></div>
      <div class="bottom">
        <div class="input">
          <label for="nom">Nom complet : </label>
          <input class="nom" type="text" v-model="users.nomUsers" />
        </div>
        <div class="input">
          <label for="pseudo">Votre email :</label>
          <input class="pseudo" type="text" v-model="users.emailUsers" />
        </div>
        <div class="input">
          <label for="mdp">Mot de passe : </label>
          <input class="mdp" type="password" v-model="users.mdpUsers" />
        </div>
        <button @click="users.createUsers()" class="btn">Créer le compte</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUsers } from '@/stores/users'

const users = useUsers()
</script>

<style scoped src="../styles/Signup.css"></style>
