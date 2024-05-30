<script setup>
import { useShow } from '@/stores/Show'
import { useArticles } from '@/stores/articles'
import { onBeforeMount } from 'vue'

const show = useShow()
const articles = useArticles()
onBeforeMount(() => {
  articles.getAllCategorie()
})
</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showModalePub">
      <div class="formModal">
        <div class="divbtn">
          <button type="button" class="Annuller" @click="show.hidePubFunct()">X</button>
        </div>

        <h1 class="login">Créer votre publication !</h1>
        <div class="container">
          <form action="#">
            <div class="form first">
              <div class="details personal">
                <div class="fields">
                  <div class="input-field">
                    <label>📌 Catégorie</label>
                    <select
                      v-model="articles.OneCategoriePostID"
                      class="Select"
                      name="select"
                      required
                    >
                      <option
                        :key="index"
                        v-for="(categorie, index) in articles.ListeCategorie"
                        :value="categorie.id_categorie"
                      >
                        {{ categorie.nom_categorie }}
                      </option>
                    </select>
                  </div>

                  <div class="input-field">
                    <label>🏷️ Titre</label>
                    <input
                      v-model="articles.titreArticles"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="input-field">
                    <label>📝 Description</label>
                    <textarea
                      v-model="articles.contenuArticles"
                      class="form-control"
                      required
                    ></textarea>
                  </div>
                  <div class="input-field input-file-wrapper">
                    <input class="input-file" type="file" />
                    <div class="file-label">📂 Choisissez une image</div>
                  </div>
                  <div class="input-field fieldsBtn">
                    <button @click="articles.postArticles()" class="nextBtn">
                      <span class="btnText">Publier</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Publier.css"></style>
