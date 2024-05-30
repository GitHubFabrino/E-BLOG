<template>
  <div class="nav">
    <div class="search">
      <input @input="articles.search(articles.NamesearchCategorie)" v-model="articles.NamesearchCategorie" class="inputsearch" placeholder="🔎 Titre de l'article" type="search" />
      <button @click="articles.searchByCategorieName(articles.NamesearchCategorie)" class="btnsearch">Rechercher</button>
    </div>
    <div class="title">
      <div class="logo"></div>
      <h1 class="titleH1">Blog</h1>
    </div>
    <div class="menu">
      <RouterLink to="/" class="router-link">Acceuil</RouterLink>
      <RouterLink v-if="!show.showWhenLoged" to="/signup" class="router-link">Inscription</RouterLink>
      <button v-if="!show.showWhenLoged" @click="show.showLoginFunct()" class="login">Connexion</button>
      <button v-if="show.showWhenLoged" class="pub" @click="show.showPubFunct()">Publier</button>
      <button v-if="show.showWhenLoged" @click="show.showLogoutFunct()" class="login">Déconnexion</button>
      <div v-if="show.showWhenLoged" class="user">
        <div class="image"></div>
        <div class="name">{{ users.nomUsers }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useShow } from '@/stores/Show'
import { useUsers } from '@/stores/users'
import { useArticles } from '@/stores/articles'


const show = useShow()
const users = useUsers()
const articles = useArticles()


if (localStorage.getItem('status') === 'utilisateur') {
  show.showWhenLoged = true
  users.nomUsers = localStorage.getItem('nomUsers')
} else {
  show.showWhenLoged = false
}
</script>

<style scoped src="../styles/NavigationBar.css"></style>
