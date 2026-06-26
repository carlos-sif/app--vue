import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
  imagen: string
}

export const useProductoStore = defineStore('productos', () => {

  const listaProductos = ref<Producto[]>([
    {
      id: 101,
      nombre: 'Teclado Mecánico RGB',
      precio: 250,
      stock: 12,
      imagen: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 102,
      nombre: 'Mouse Óptico Inalámbrico',
      precio: 110,
      stock: 20,
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 103,
      nombre: "Monitor Gamer 24' 144Hz",
      precio: 1450,
      stock: 5,
      imagen: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=400'
    }
  ])

  const totalInventario = computed(() => {
    return listaProductos.value.reduce(
      (total, p) => total + (p.precio * p.stock),
      0
    )
  })

  const agregarProducto = (producto: Producto): void => {
    listaProductos.value.push(producto)
  }

  return {
    listaProductos,
    totalInventario,
    agregarProducto
  }
})