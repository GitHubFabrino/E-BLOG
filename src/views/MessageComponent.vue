<script setup>
import { useMessages } from '@/stores/messages'
const messages = useMessages()
</script>

<template>
  <div class="alert">
    <Transition>
      <div v-if="messages.messageSucces" class="form-group has-success">
        <input
          type="text"
          class="success form-control is-valid"
          id="inputValid"
          v-model="messages.messageSucces"
        />
      </div>
    </Transition>
    <Transition>
      <div v-if="messages.messageError" class="form-group has-danger">
        <input
          type="text"
          class="danger form-control is-invalid"
          id="inputInvalid"
          v-model="messages.messageError"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped src="../styles/Message.css"></style>
