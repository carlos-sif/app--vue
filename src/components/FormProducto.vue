<script setup lang="ts">
import { reactive } from 'vue'
import { useProductoStore } from '../stores/productoStore'

const productoStore = useProductoStore()

const producto = reactive({
  id: 0,
  nombre: '',
  precio: 0,
  stock: 0,
  imagen: ''
})

function enviarFormulario() {
  if (producto.stock <= 0) {
    alert('El stock debe ser mayor a 0')
    return
  }

  productoStore.agregarProducto({ ...producto })

  alert('Producto guardado correctamente')

  producto.id = 0
  producto.nombre = ''
  producto.precio = 0
  producto.stock = 0
  producto.imagen = ''
}
</script>

<template>
  <div class="container mt-4">
    <form @submit.prevent="enviarFormulario">
      <div class="row">

        <div class="col-12 col-md-6 mb-3">
          <label class="form-label">ID</label>
          <input
            type="number"
            class="form-control"
            v-model="producto.id"
          >
        </div>

        <div class="col-12 col-md-6 mb-3">
          <label class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="producto.nombre"
          >
        </div>

        <div class="col-12 col-md-6 mb-3">
          <label class="form-label">Precio</label>
          <input
            type="number"
            class="form-control"
            v-model="producto.precio"
          >
        </div>

        <div class="col-12 col-md-6 mb-3">
          <label class="form-label">Stock</label>
          <input
            type="number"
            class="form-control"
            v-model="producto.stock"
          >
        </div>

        <div class="col-12 col-md-6 mb-3">
          <label class="form-label">Imagen</label>
          <input
            type="text"
            class="form-control"
            v-model="producto.imagen"
          >
        </div>

      </div>

      <button type="submit" class="btn btn-primary">
        Guardar Producto
      </button>
    </form>
  </div>
  <hr>

<h3>Lista de Productos</h3>

<div
  v-for="p in productoStore.listaProductos"
  :key="p.id"
  class="card mb-3"
>
  <div class="card-body">
    <h5>{{ p.nombre }}</h5>
    <p>Precio: {{ p.precio }}</p>
    <p>Stock: {{ p.stock }}</p>
    <img
      :src="p.imagen"
      width="150"
      alt="producto"
    >
  </div>
</div>
</template>