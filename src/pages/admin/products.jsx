import React, { useEffect, useState } from 'react'
import { productsServices } from '@/lib/services/productsServices'
import {  ShoppingCart, Tag, Plus } from "lucide-react";
import { TagsCombobox } from '../../components/custom/TagsCombobox'
import { ChartBarProducts } from '../../components/charts/chartBar'

export const ProductsAdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])


 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsServices.getAllProducts()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
 }, [])
  // Array des tags
  const allTags = products.flatMap(product => product.tags)
  console.log('[allTags]', allTags);
  // Array des tags sans doubl9ons
  const uniqueTags = [...new Set(allTags)]
  console.log('[uniqueTags]', uniqueTags);
  
  console.log(products);
 

  // Gestion des filtres par tag
  const filteredProducts =
  selectedTags.length === 0
    ? products
    : products.filter(product =>
        product.tags?.some(tag => selectedTags.includes(tag))
      )
  
  // data opour le bar char
// Construire les données pour le chart : nombre de produits par tag
const chartData = React.useMemo(() => {
  const baseProducts =
    selectedTags.length > 0 ? filteredProducts : products

  const tagsSource =
    selectedTags.length > 0 ? selectedTags : uniqueTags

  return tagsSource.map(tag => ({
    tag,
    count: baseProducts.filter(p => p.tags?.includes(tag)).length
  }))
}, [products, filteredProducts, selectedTags, uniqueTags])
  
  
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Chargement des produits…
      </div>
    )
// .............
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Erreur : {error}
      </div>
    )

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#1e293b,_#020617)] px-6 py-14">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-14">
        <h1 className="text-4xl font-black text-white flex items-center gap-4">
          <span className="relative inline-flex">
            <span className="absolute inset-0 blur-xl bg-indigo-500/40 rounded-xl" />
            <span className="relative bg-indigo-600 p-3 rounded-xl">
              <ShoppingCart className="w-8 h-8 text-white" />
            </span>
          </span>
          Produits
        </h1>
        <p className="text-slate-400 mt-3 text-lg">
          Catalogue futuriste — interface admin
        </p>
      </div>

      {/* TAG */}
      <div className="max-w-md mb-10">
        <TagsCombobox
          options={uniqueTags}       // ← tous les tags uniques
          value={selectedTags}       // ← ce qui est sélectionné
          onChange={setSelectedTags} // ← fonction pour mettre à jour la sélection
        />
      </div>
      
      <ChartBarProducts data={chartData} />

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        
        {filteredProducts.map((product) => {
          
        const averageRating =
          productsServices.getAverageRating(product.reviews)
          return (
                <div
                  key={product.id}
                  className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-indigo-500/50 hover:shadow-[0_20px_80px_-15px_rgba(99,102,241,0.5)]"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* CATEGORY */}
                    <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-xs text-slate-200 px-3 py-1 rounded-full border border-slate-700">
                      <Tag className="w-3 h-3" />
                      {product.category}
                    </span>
                    

                  </div>

                  {/* CONTENT */}
                  <div className="p-6 space-y-5">
                    <h2 className="text-white font-bold text-lg leading-tight group-hover:text-indigo-400 transition-colors">
                      {product.title}
                    </h2>
                    {/* Rating */}
                    {averageRating && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-indigo-400 text-lg">
                          {"★".repeat(Math.round(averageRating))}
                          {"☆".repeat(5 - Math.round(averageRating))}
                        </span>
                        <span className="text-slate-400">
                          {averageRating} / 5 ({product.reviews.length})
                        </span>
                      </div>
                    )}
                

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-widest">
                          Prix
                        </p>
                        <p className="text-3xl font-black text-white">
                          {product.price}
                          <span className="text-indigo-400 text-lg ml-1">€</span>
                        </p>
                      </div>

                      <button className="relative group/btn">
                        <span className="absolute inset-0 rounded-2xl bg-indigo-500 blur-lg opacity-0 group-hover/btn:opacity-70 transition" />
                        <span className="flex .relative bg-indigo-600 hover:bg-indigo-500 p-3 rounded-2xl text-white transition shadow-xl">
                          <Plus className="w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </div>
                  </div>
          )
        })}
      </div>
    </div>
  )
}