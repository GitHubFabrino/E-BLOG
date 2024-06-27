<script setup>
import WorkspaceAdmin from './views/WorkspaceAdmin.vue'
import WorkspaceUsers from './views/WorkspaceUsers.vue'
import { useShow } from '@/stores/Show'
import WorkspaceLogin from './views/WorkspaceLogin.vue'
import WorkspacePublier from './views/WorkspacePublier.vue'
import WorkspaceCommentaire from './views/WorkspaceCommentaire.vue'
import OverlayComponent from './views/OverlayComponent.vue'
import DeconnexionComponent from './views/DeconnexionComponent.vue'
import DeleteusersComponent from './views/DeleteusersComponent.vue'
import SuppressionUsers from './views/SuppressionUsers.vue'
import MessageComponent from './views/MessageComponent.vue'
const show = useShow()
import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  let status = localStorage.getItem('status')
  if (status === 'admin') {
    show.showUsers = false
    show.showAdmin = true
  }
  else{
    show.showUsers = true
    show.showAdmin = false
  }
  //
})
</script>

<template>
  <div class="app">
    <WorkspaceAdmin v-if="show.showAdmin" />
    <WorkspaceUsers v-if="show.showUsers" />
    <Teleport to="body">
      <WorkspaceLogin />
    </Teleport>
    <Teleport to="body">
      <WorkspacePublier />
    </Teleport>
    <Teleport to="body">
      <WorkspaceCommentaire />
    </Teleport>
    <Teleport to="body">
      <OverlayComponent />
    </Teleport>
    <Teleport to="body">
      <DeconnexionComponent />
    </Teleport>
    <Teleport to="body">
      <SuppressionUsers />
    </Teleport>
    <Teleport to="body">
      <MessageComponent />
    </Teleport>
    <Teleport to="body">
      <DeleteusersComponent />
    </Teleport>
  </div>
</template>

<style scoped></style>
