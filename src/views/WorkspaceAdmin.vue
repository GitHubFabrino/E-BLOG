<template>
  <div class="header">
    <div class="blog">
      <div class="logo"></div>
      <h1 class="blogH1">Blog</h1>
    </div>
    <div class="button">
      <button class="pub" @click="show.showPubFunct()">Publier</button>
      <button class="logout" @click="show.showLogoutFunct()">Déconnexion</button>
    </div>
  </div>
  <div class="body">
    <div class="head">
      <div class="find">
        <input
          type="text"
          class="recherche form-control"
          v-model="users.nomUserSearch"
          id=""
          aria-describedby="emailHelp"
          placeholder="🔎 Rechercher un nom ici..."
          @input="users.search()"
        />
        <button disabled class="fnd">Rechercher</button>
      </div>
      <div class="second">
        <input type="text" v-model="articles.NewCategorie" class="form-control" placeholder="📌 Nouvelle catégorie" required />
        <button @click="articles.postnewCategorie()" class="nextBtn">
          <span class="btnText">Valider</span>
        </button>
      </div>
    </div>
    <div class="table">
      <div class="listtitle mt-4">
        <h3>Liste des utilisateurs :</h3>
        <div class="array mask d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="responsive bg-white">
                  <table class="table real">
                    <thead>
                      <tr>
                        <th scope="col">🗑️</th>
                        <th scope="col">Nom complet</th>
                        <th scope="col">E-mail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="index" v-for="(user, index) in users.listeAllusers">
                        <td @click="show.showDeeteUsersFunct(user.id_utilisateur)">❌</td>
                        <td class="scope" scope="row" style="color: #666666">
                          {{ user.nom }}
                        </td>
                        <td class="scope">{{ user.email }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShow } from '@/stores/Show'
import { useUsers } from '@/stores/users'
import { onBeforeMount } from 'vue'
import { useArticles } from '@/stores/articles'



const show = useShow()
const users = useUsers()
const articles = useArticles()


onBeforeMount(()=>{
  users.getAllusers()
})

</script>

<style scoped src="../styles/Admin.css"></style>
