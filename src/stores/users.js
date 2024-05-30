import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useUrl } from '@/stores/url'
import { useShow } from '@/stores/Show'
import { useMessages } from '@/stores/messages'

export const useUsers = defineStore('users', () => {
  const nomUsers = ref('')
  const URL = useUrl().url
  const emailUsers = ref('')
  const listeAllusers = ref([])
  const listeAllusersTemp = ref([])
  const mdpUsers = ref('')
  const show = useShow()
  const messages = useMessages()
  const idUsersTodelete = ref(null)
  const nomUserSearch = ref("")

  function search(){
    listeAllusers.value = listeAllusersTemp.value
    listeAllusers.value = listeAllusers.value.filter((list) => {
      return list.nom.toLocaleLowerCase().match(nomUserSearch.value.toLocaleLowerCase())
    })
    if(nomUserSearch.value === ""){
      getAllusers()
    }

  }

  function createUsers() {
    show.showSpinner = true

    let formData = {
      nom: nomUsers.value,
      email: emailUsers.value,
      mdp: mdpUsers.value
    }
    axios
      .post(`${URL}/api/v1/utilisateur/creer`, formData)
      .then((response) => {
        show.showSpinner = false
        messages.messageSucces = 'Inscription effectuée !'
        setTimeout(() => {
          messages.messageSucces = ''
        }, 3000)
      })
      .catch((error) => {
        console.error('Erreur de POST : ', error)
        show.showSpinner = false
        messages.messageError = 'Inscription echoué !'
        setTimeout(() => {
          messages.messageError = ''
        }, 3000)
      })

    nomUsers.value = ''
    emailUsers.value = ''
    mdpUsers.value = ''
  }

  function getAllusers() {
    show.showSpinner = true
    axios
      .get(`${URL}/api/v1/utilisateur/getAll`)
      .then((response) => {
        listeAllusers.value = response.data
        listeAllusersTemp.value = response.data
        show.showSpinner = false
      })
      .catch((error) => {
        console.error('Erreur de GET articles : ', error)
        show.showSpinner = false
      })
  }

  function deleteOneUsers() {
    axios
      .delete(`${URL}/api/v1/utilisateur/deleteOne/${idUsersTodelete.value}`)
      .then((response) => {
        show.hideDeleteUsersFunct()
        getAllusers()
        messages.messageSucces = 'Succès !'
        setTimeout(() => {
          messages.messageSucces = ''
        }, 3000)
      })
      .catch((error) => {
        console.error('Erreur de DELETE useer : ', error)
        show.hideDeleteUsersFunct()
        messages.messageError = 'Echec !'
        setTimeout(() => {
          messages.messageError = ''
        }, 3000)
      })
  }

  function Authentification() {
    show.showSpinner = true

    let formData = {
      email: emailUsers.value,
      mdp: mdpUsers.value
    }
    axios
      .post(`${URL}/api/v7/singIn`, formData)
      .then((response) => {
        let status = response.data.user.status
        let idUsers = response.data.user.id_utilisateur
        nomUsers.value = response.data.user.nom

        localStorage.setItem('status', status)
        localStorage.setItem('idUsers', idUsers)
        localStorage.setItem('nomUsers', nomUsers.value)

        if (status === 'utilisateur') {
          show.showModale = false
          show.showWhenLoged = true
          nomUsers.value = localStorage.getItem('nomUsers')
        }
        if (status === 'admin') {
          show.showModale = false
          show.showUsers = false
          show.showAdmin = true
        }

        show.showSpinner = false
      })
      .catch((error) => {
        console.error("Erreur d'authentification : ", error)
        show.showSpinner = false
        show.showErrorLogin = true
        messages.messageError = 'Connexion echoué !'
        setTimeout(() => {
          messages.messageError = ''
        }, 3000)
      })

    emailUsers.value = ''
    mdpUsers.value = ''
  }

  return {
    nomUsers,
    emailUsers,
    mdpUsers,
    listeAllusers,
    idUsersTodelete,
    nomUserSearch,
    createUsers,
    Authentification,
    getAllusers,
    deleteOneUsers,
    search
  }
})
