'use client'

import { useState } from "react"

export default function OrdersPage() {

    const dataOrders = [
        {
            id: 1,
            fecha_del_pedido: "01/11/2026",
            total: 15.99,
            enviado_a: "Noelia Isabel Medina Díaz",
            id_del_pedido: 1,
            img_product: "../o_1.webp",
            nombre_producto: "Pendiente de aro con cruces",
            link_product: "#",
            status: "Pendiente"
        },
        {
            id: 2,
            fecha_del_pedido: "09/11/2026",
            total: 9.99,
            enviado_a: "Carlos Contreras",
            id_del_pedido: 2,
            img_product: "../o_2.webp",
            nombre_producto: "Pulsera de piedras con palmera",
            link_product: "#",
            status: "Pendiente"
        },
        {
            id: 3,
            fecha_del_pedido: "11/11/2026",
            total: 9.99,
            enviado_a: "Noelia Isabel Medina Díaz",
            id_del_pedido: 3,
            img_product: "../o_3.webp",
            nombre_producto: "Pulsera con diseño de mariposa",
            link_product: "#",
            status: "Entregado"
        },
    ]

    const [filtro, setFiltro] = useState("Todo")
    const [busqueda, setBusqueda] = useState("")

    // Filtrado combinado: estado + texto de búsqueda
    const pedidosFiltrados = dataOrders.filter((order) => {
        const cumpleEstado = filtro === "Todo" || order.status === filtro
        
        const textoBuscado = busqueda.toLowerCase().trim()
        const cumpleBusqueda =
            order.nombre_producto.toLowerCase().includes(textoBuscado) ||
            order.id_del_pedido.toString().includes(textoBuscado)

        return cumpleEstado && cumpleBusqueda
    })

    return (
        <>
            <div className="border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
                <h1 className="font-semibold text-[#C9A84C] text-3xl my-4">Mis pedidos</h1>
                <p className="mb-4">Aquí verás tus pedidos según tus preferencias.</p>
                
                {/* Barra de búsqueda de producto */}
                <div className="relative max-w-md">
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar por producto o nº de pedido..."
                        className="w-full px-4 py-2 pr-10 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                    {busqueda && (
                        <button
                            type="button"
                            onClick={() => setBusqueda("")}
                            aria-label="Limpiar búsqueda"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C9A84C] hover:text-white font-bold"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <div className="border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
                {/* Filtrado de vistas de tarjetas de los pedidos */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <p>Filtra según tu preferencia:</p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => setFiltro("Todo")}
                            className={`flex items-center gap-2 px-3 py-1 rounded-lg border-2 border-[#C9A84C]/50 transition-all duration-300 ${
                                filtro === "Todo"
                                    ? "bg-[#C9A84C] text-black font-semibold"
                                    : "bg-black text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"
                            }`}
                        >
                            Todo
                        </button>

                        <button
                            type="button"
                            onClick={() => setFiltro("Pendiente")}
                            className={`flex items-center gap-2 px-3 py-1 rounded-lg border-2 border-[#C9A84C]/50 transition-all duration-300 ${
                                filtro === "Pendiente"
                                    ? "bg-[#C9A84C] text-black font-semibold"
                                    : "bg-black text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"
                            }`}
                        >
                            Por entregar
                        </button>

                        <button
                            type="button"
                            onClick={() => setFiltro("Entregado")}
                            className={`flex items-center gap-2 px-3 py-1 rounded-lg border-2 border-[#C9A84C]/50 transition-all duration-300 ${
                                filtro === "Entregado"
                                    ? "bg-[#C9A84C] text-black font-semibold"
                                    : "bg-black text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"
                            }`}
                        >
                            Finalizado
                        </button>
                    </div>
                </div>

                <hr className="my-4 border-[#C9A84C]" />

                {/* Renderizado de las tarjetas filtradas */}
                {pedidosFiltrados.length === 0 ? (
                    <p className="text-center py-6 text-gray-300">
                        No se encontraron pedidos que coincidan con tu búsqueda.
                    </p>
                ) : (
                    pedidosFiltrados.map((order) => (
                        <div key={order.id} className="flex flex-col border-2 border-[#C9A84C]/70 rounded-lg my-2">
                            <div className="rounded-t-lg bg-black flex flex-wrap gap-2 justify-between p-2">
                                <p>Pedido realizado: <br />{order.fecha_del_pedido}</p>
                                <p>Total: <br />{order.total} €</p>
                                <p>Enviado a: <br />{order.enviado_a}</p>
                                <p>Nº de pedido: <br />{order.id_del_pedido}</p>
                            </div>
                            <p className="p-2">
                                {order.status === "Entregado"
                                    ? `Entregado el: ${order.fecha_del_pedido}`
                                    : "Estado: Pendiente de entrega"}
                            </p>
                            <div className="p-2 justify-around items-center flex flex-wrap gap-4">
                                <img src={order.img_product} alt={order.nombre_producto} className="size-30 object-cover rounded-lg duration-500" />
                                <a href={order.link_product} className="hover:underline hover:text-[#C9A84C]">{order.nombre_producto}</a>
                                <button type="button" className="flex items-center gap-2 px-2 my-10 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 transition-all duration-300">
                                    Dejar una reseña
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}