<script setup lang="ts">
import { reactive } from 'vue'
import { useProductoStore } from '../stores/productoStore'

const store = useProductoStore()

const nuevoProducto = reactive({
  id: 0,
  nombre: '',
  precio: 0,
  stock: 0,
  imagen: ''
})

const guardarProducto = () => {
  store.agregarProducto({ ...nuevoProducto })

  nuevoProducto.id = 0
  nuevoProducto.nombre = ''
  nuevoProducto.precio = 0
  nuevoProducto.stock = 0
  nuevoProducto.imagen = ''
}
</script>

<template>
  <div class="container-fluid fondo py-5">

    <div class="container">

      <h1 class="text-center text-white fw-bold mb-5">
        Inventario de Productos
      </h1>

      <!-- LISTA DE PRODUCTOS -->
      <div class="row g-4">

        <div
          v-for="producto in store.listaProductos"
          :key="producto.id"
          class="col-6 col-md-4"
        >
          <div class="card h-100 shadow-lg border-0">

            <img
              :src="producto.imagen"
              class="card-img-top imagen-producto"
            >

            <div class="card-body text-center">

              <h5 class="card-title fw-bold">
                {{ producto.nombre }}
              </h5>

              <p class="mb-1">
                <strong>Precio:</strong> Bs {{ producto.precio }}
              </p>

              <p>
                <strong>Stock:</strong> {{ producto.stock }}
              </p>

            </div>

          </div>
        </div>

      </div>

      <!-- TOTAL -->
      <div class="text-center mt-5">
        <h3 class="text-white fw-bold">
          Total Inventario: Bs {{ store.totalInventario }}
        </h3>
      </div>

      <!-- FORMULARIO -->
      <div class="row justify-content-center mt-5">

        <div class="col-12 col-md-6">

          <div class="card shadow-lg border-0 p-4">

            <h3 class="text-center text-dark mb-4">
              Agregar Producto
            </h3>

            <div class="mb-3">
              <input
                v-model.number="nuevoProducto.id"
                type="number"
                class="form-control"
                placeholder="ID"
              >
            </div>

            <div class="mb-3">
              <input
                v-model="nuevoProducto.nombre"
                class="form-control"
                placeholder="Nombre"
              >
            </div>

            <div class="mb-3">
              <input
                v-model.number="nuevoProducto.precio"
                type="number"
                class="form-control"
                placeholder="Precio"
              >
            </div>

            <div class="mb-3">
              <input
                v-model.number="nuevoProducto.stock"
                type="number"
                class="form-control"
                placeholder="Stock"
              >
            </div>

            <div class="mb-3">
              <input
                v-model="nuevoProducto.imagen"
                class="form-control"
                placeholder="URL de la imagen"
              >
            </div>

            <button
              class="btn btn-primary w-100"
              @click="guardarProducto"
            >
              Guardar Producto
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.fondo {
  min-height: 100vh;

  background:
    linear-gradient(rgba(0,0,0,.80),
    rgba(0,0,0,.80)),
    url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80');

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.card {
  border-radius: 20px;
}

.imagen-producto {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-title {
  font-size: 1rem;
}
</style>