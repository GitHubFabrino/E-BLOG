import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useArticles } from '@/stores/articles'
import { useUsers } from '@/stores/users'


export const useShow = defineStore('Show', () => {
  const articles = useArticles()
  const showAdmin = ref(false)
  const showUsers = ref(true)
  const showModale = ref(false)
  const showErrorLogin = ref(false)
  const showModalePub = ref(false)
  const showModaleComs = ref(false)
  const showSpinner = ref(false)
  const showDeconnexion = ref(false)
  const showDeleteusers = ref(false)
  const showWhenLoged = ref(false)
  const users = useUsers()



  function showLoginFunct(){
    showModale.value = true
  }

  function showPubFunct(){
    showModalePub.value = true
  }

  function showComsFunct(idArticle){
    showModaleComs.value = true
    articles.idArticle = idArticle
    articles.getCommentaires()
  }

  function showDeeteUsersFunct(id){
    showDeleteusers.value = true
    users.idUsersTodelete = id
  }

  function showLogoutFunct(){
    showDeconnexion.value = true
  }

  function hideLoginFunct(){
    showModale.value = false
  }

  
  function hidePubFunct(){
    showModalePub.value = false
  }

  function hideComsFunct(){
    showModaleComs.value = false
  }

  function hideLogoutFunct(){
    showDeconnexion.value = false
  }

  function hideDeleteUsersFunct(){
    showDeleteusers.value = false
  }




  return {
    showAdmin,
    showUsers,
    showModale,
    showErrorLogin,
    showModalePub,
    showModaleComs,
    showSpinner,
    showDeconnexion,
    showDeleteusers,
    showWhenLoged,
    showLoginFunct,
    hideLoginFunct,
    showPubFunct,
    hidePubFunct,
    showComsFunct,
    hideComsFunct,
    showLogoutFunct,
    hideLogoutFunct,
    showDeeteUsersFunct,
    hideDeleteUsersFunct
  }
})
