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
    },
    {
      id: 104,
      nombre: 'Laptop Ultrabook',
      precio: 4200,
      stock: 4,
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 105,
      nombre: 'Auriculares Bluetooth',
      precio: 180,
      stock: 15,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 106,
      nombre: 'Tablet Android',
      precio: 950,
      stock: 8,
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 107,
      nombre: 'Impresora Multifuncional',
      precio: 780,
      stock: 6,
      imagen: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 108,
      nombre: 'Disco SSD 1TB',
      precio: 350,
      stock: 18,
      imagen: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 109,
      nombre: 'Webcam Full HD',
      precio: 220,
      stock: 10,
      imagen: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 110,
      nombre: 'Parlante Bluetooth',
      precio: 300,
      stock: 9,
      imagen: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 111,
      nombre: 'Smartwatch Deportivo',
      precio: 420,
      stock: 7,
      imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 112,
      nombre: 'Router WiFi 6',
      precio: 390,
      stock: 11,
      imagen: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=400'
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