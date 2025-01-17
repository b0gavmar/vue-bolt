import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {
  const book = ref(0)

  const books = ref([
      {
        id: 1,
        title: "cim",
        desc: "első leírás",
        published: "2025.01.20",
      },
    {
      id: 2,
      title: "második cím",
      desc: "második leírás",
      published: "2025.01.21",
    },
    {
      id: 3,
      title: "harmadik cím",
      desc: "harmadik leírás",
      published: "2025.01.22",
    },
    {
      id: 4,
      title: "negyedik cím",
      desc: "negyedik leírás",
      published: "2025.01.23",
    },
    {
      id: 5,
      title: "ötödik cím",
      desc: "ötödik leírás",
      published: "2025.01.24",
    },
    {
      id: 6,
      title: "hatodik cím",
      desc: "hatodik leírás",
      published: "2025.01.25",
    },
    {
      id: 7,
      title: "hetedik cím",
      desc: "hetedik leírás",
      published: "2025.01.26",
    },
    {
      id: 8,
      title: "nyolcadik cím",
      desc: "nyolcadik leírás",
      published: "2025.01.27",
    },
    {
      id: 9,
      title: "kilencedik cím",
      desc: "kilencedik leírás",
      published: "2025.01.28",
    },
    {
      id: 10,
      title: "tizedik cím",
      desc: "tizedik leírás",
      published: "2025.01.29",
    },

  ]);

  const deleteBook = (id) => {
    books.value = books.value.filter(book => book.id !== id);
  };

  return { books, deleteBook };
})
