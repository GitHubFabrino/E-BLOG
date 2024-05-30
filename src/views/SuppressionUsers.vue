<script setup>
import { useShow } from '@/stores/Show'
const show = useShow()
</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showDeleteusers">
      <div class="formModal">
        <h6 class="login">Voulez-vous vraiment supprimer ce compte !</h6>
        <div class="valider">
          <button type="submit" class="Modifier btn btn-primary mt-5">OUI</button>
          <button
            type="button"
            class="Annuller btn btn-primary mt-5"
            @click="show.hideDeleteUsersFunct()"
          >
            NON
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/SupprimerUsers.css"></style>
