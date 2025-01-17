<template>
  <div class="container">
    <div v-for="b in bookStore.books" :key="b.id" class="book">
      <h3>{{ b.title }}</h3>
      <div>
        <p>{{ b.desc }}</p>
        <p>{{ b.published }}</p>
      </div>
      <div class="footer">
        <button @click="editBook(b.id)" class="btn btn-secondary">Szerkesztés</button>
        <button @click="deleteBook(b.id)" class="btn btn-danger">Törlés</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: white;
  justify-content: center;
  margin-top: 20px;
}

.book {
  background-color: rgb(49, 49, 49);
  border-radius: 14px;
  padding: 10px;
  width: 250px;
}

p, h3{
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px; 
}

.book:hover {
  box-shadow: 0 0 40px rgb(30, 163, 240);
  background-color: #cb3ff5;
}

button{
  margin-right: 5px;
}

</style>

<script setup>
import { ref } from 'vue'
import { useBookStore } from '@/stores/books';
import { useRouter } from 'vue-router';

const bookStore = useBookStore();

const route = useRouter();

const editBook = (id) => {
  route.push(`./editbook/${id}`);
}

const deleteBook = (id) => {
  bookStore.deleteBook(id);
  route.push(`./`);
};


</script>
