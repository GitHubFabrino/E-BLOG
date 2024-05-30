import { defineStore } from 'pinia'
import axios from 'axios'
import { useUrl } from '@/stores/url'
import { useShow } from '@/stores/Show'
import { useMessages } from '@/stores/messages'
import { ref } from 'vue'

export const useArticles = defineStore('articles', () => {
  const URL = useUrl().url
  const show = useShow()
  const messages = useMessages()
  const ListeArticles = ref([])
  const ListeArticlesTemp = ref([])
  const titreArticles = ref('')
  const auteurArticles = ref('')
  const categorieArticles = ref('')
  const dateArticles = ref('')
  const contenuArticles = ref('')
  const ListesCommentaires = ref('')
  const idArticle = ref(null)
  const newCommentaire = ref('')
  const ListeCategorie = ref('')
  const OneCategorie = ref('')
  const OneCategoriePostID = ref(null)
  const NamesearchCategorie = ref('')
  const NewCategorie = ref('')



  function getAllarticles() {
    show.showSpinner = true
    axios
      .get(`${URL}/api/v2/article/getAll`)
      .then((response) => {
        ListeArticles.value = response.data
        ListeArticlesTemp.value = response.data
        show.showSpinner = false
      })
      .catch((error) => {
        console.error('Erreur de GET articles : ', error)
        show.showSpinner = false
      })
  }

  function postnewCategorie(){
    let formData =     {
      nom_categorie : NewCategorie.value
      }
    show.showSpinner = true
    axios
      .post(`${URL}/api/v3/categorie/creer`, formData)
      .then((response) => {
        show.showSpinner = false
        NewCategorie.value = ''
        getAllCategorie()
        messages.messageSucces = 'Succès !'
        setTimeout(() => {
          messages.messageSucces = ''
        }, 3000)
      })
      .catch((error) => {
        console.error('Erreur de DELETE categorie : ', error)
        show.showSpinner = false
        NewCategorie.value = ''
        messages.messageError = 'Echec !'
        setTimeout(() => {
          messages.messageError = ''
        }, 3000)
      })

  }

  function search(search) {
    if (!search) {
      getAllarticles()
    }
  }

  function searchByCategorieName(search) {
    ListeArticles.value = ListeArticlesTemp.value
    show.showSpinner = true
    ListeArticles.value = ListeArticles.value.filter((list) => {
      return list.titre.toLocaleLowerCase().match(search.toLocaleLowerCase())
    })
    show.showSpinner = false
  }

  function ListeArticleByCategorie(nomCategorie) {
    show.showSpinner = true
    if (nomCategorie === 'All') {
      ListeArticles.value = ListeArticlesTemp.value
      show.showSpinner = false
    } else {
      ListeArticles.value = ListeArticlesTemp.value
      ListeArticles.value = ListeArticles.value.filter((list) => {
        return list.categorie.match(nomCategorie)
      })
      show.showSpinner = false
    }
  }

  function postArticles() {
    let idUsers = localStorage.getItem('idUsers')
    let formData = {
      titre: titreArticles.value,
      contenu: contenuArticles.value,
      id_categorie: OneCategoriePostID.value,
      image: '',
      id_utilisateur: idUsers
    }
    axios
      .post(`${URL}/api/v2/article/creer`, formData)
      .then((response) => {
        getAllarticles()
        show.hidePubFunct()
        messages.messageSucces = 'Succès !'
        titreArticles.value = ''
        contenuArticles.value = ''
        setTimeout(() => {
          messages.messageSucces = ''
        }, 3000)
      })
      .catch((error) => {
        console.error('Erreur de POST article : ', error)
        show.hidePubFunct()
        messages.messageError = 'Echec !'
        setTimeout(() => {
          messages.messageError = ''
        }, 3000)
      })
  }

  function getAllCategorie() {
    axios
      .get(`${URL}/api/v3/categorie/getAll`)
      .then((response) => {
        ListeCategorie.value = response.data
      })
      .catch((error) => {
        console.error('Erreur de GET categories : ', error)
      })
  }

  function getCommentaires() {
    show.showSpinner = true
    axios
      .get(`${URL}/api/v4/commentaire/getAll/${idArticle.value}`)
      .then((response) => {
        ListesCommentaires.value = response.data
        show.showSpinner = false
      })
      .catch((error) => {
        console.error('Erreur de GET commmentaires : ', error)
        show.showSpinner = false
      })
  }

  function postCommentaire() {
    let idUsers = localStorage.getItem('idUsers')
    let formData = {
      contenu_commentaire: newCommentaire.value,
      id_utilisateur: idUsers,
      id_article: idArticle.value
    }
    show.showSpinner = true
    axios
      .post(`${URL}/api/v4/commentaire/creer`, formData)
      .then((response) => {
        show.showSpinner = false
        newCommentaire.value = ''
        getCommentaires()
        messages.messageSucces = 'Succès !'
        setTimeout(() => {
          messages.messageSucces = ''
        }, 3000)
      })
      .catch((error) => {
        console.error('Erreur de POST commmentaires : ', error)
        show.showSpinner = false
        newCommentaire.value = ''
        messages.messageError = 'Echec !'
        setTimeout(() => {
          messages.messageError = ''
        }, 3000)
      })
  }

  return {
    ListeArticles,
    titreArticles,
    auteurArticles,
    categorieArticles,
    dateArticles,
    contenuArticles,
    ListesCommentaires,
    newCommentaire,
    OneCategorie,
    ListeArticlesTemp,
    idArticle,
    OneCategoriePostID,
    ListeCategorie,
    NamesearchCategorie,
    NewCategorie,
    getAllarticles,
    ListeArticleByCategorie,
    getCommentaires,
    postCommentaire,
    searchByCategorieName,
    getAllCategorie,
    postArticles,
    search,
    postnewCategorie
  }
})
