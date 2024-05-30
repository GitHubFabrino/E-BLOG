<script setup>
import { useShow } from '@/stores/Show'
import { useArticles } from '@/stores/articles'
const articles = useArticles()
const show = useShow()

</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showModaleComs" @dblclick="show.hideComsFunct()">
      <div class="formModal">
        <div class="input" v-if="show.showWhenLoged">
          <input class="comsInput" v-model="articles.newCommentaire" type="text" placeholder="Ecrire ici..." />
          <p @click="articles.postCommentaire()" class="emoji">➡️</p>
        </div>
        <div class="coms"  :key="index" v-for="(article, index) in articles.ListesCommentaires">
          <div class="about">
            <h3>{{ article.utilisateur }}</h3>
            <p class="date">{{ article.date_commentaire }}</p>
          </div>
          <div class="content">
            {{ article.contenu_commentaire }}
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Commentaire.css"></style>
