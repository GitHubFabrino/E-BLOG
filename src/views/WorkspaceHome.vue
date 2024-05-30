<template>
  <div class="categorie">
    <div class="select">
      <select
        v-model="articles.OneCategorie"
        @change="articles.ListeArticleByCategorie(articles.OneCategorie)"
        class="Select"
        name="select"
        required
      >
        <option :disabled="true" disabledselected>📌 Categorie</option>
        <option value="All">Tout</option>
        <option
          :key="index"
          v-for="(categorie, index) in articles.ListeCategorie"
          :value="categorie.nom_categorie"
        >
          {{ categorie.nom_categorie }}
        </option>
      </select>
    </div>
    <div class="list">
      <div class="card" :key="index" v-for="(article, index) in articles.ListeArticles">
        <div class="image"></div>
        <div class="content">
          <h3 class="ctgr">{{ article.categorie }}</h3>
          <h3 class="name">{{ article.utilisateur }}</h3>
          <div class="head">
            <p class="title">{{ article.titre }}</p>
            <p class="date">{{ article.date_publication }}</p>
          </div>
          <p>
            {{ article.contenu }}
          </p>
          <div class="like">
            <div class="likeleft">
              <button :disabled="!show.showWhenLoged" class="btnlike">👍🏻 J'aime</button>
              <p class="nbrlike">{{ article.nbLike }} Likes</p>
            </div>
            <div class="comment" @click="show.showComsFunct(article.id_article)">💬</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShow } from '@/stores/Show'
import { onBeforeMount } from 'vue'
import { useArticles } from '@/stores/articles'
const show = useShow()
const articles = useArticles()

if (localStorage.getItem('status') === 'utilisateur') {
  show.showWhenLoged = true
} else {
  show.showWhenLoged = false
}

onBeforeMount(() => {
  articles.getAllarticles()
  articles.getAllCategorie()
  articles.OneCategorie = "📌 Categorie"
})
</script>

<style scoped src="../styles/Home.css"></style>
