const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: []
    };
  },
  methods: {
    createEmail() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.emails.push(response.data.response);
        })
        .catch((error) => {
          console.error('Errore nella richiesta API:', error);
        });
    }
  },
  mounted() {
    // Chiamare createEmail 10 volte
    for (let i = 0; i < 10; i++) {
      this.createEmail();
    }
  }
}).mount("#app");



// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
