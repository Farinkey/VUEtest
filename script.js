const app = Vue.createApp({
  el: "#app",
  data() {
    return {
      searchQuery: '',
      columns: ["Имя", "number", "Доп. инфо", "Удалить"],
      data: [
        {"Имя": "Аня Горбушка", number: 89632587411},
        {"Имя": "Егор Помидор", number: 89632587422},
        {"Имя": "Лена Полено", number: 89632587433},
        {"Имя": "Антон Иванов", number: 89632587444}
      ]
    };
  },
  computed: {
    filter: function () {
      const filterKey = this.searchQuery && this.searchQuery.toLowerCase();
      let data = this.data;
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return (
              String(row[key])
              .toLowerCase()
              .indexOf(filterKey) > -1
            );
          });
        });
      }
    return data;
    }
  },
  methods: {
    
  }
});

app.mount("#app");