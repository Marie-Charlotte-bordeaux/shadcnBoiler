export const productsServices = {
    getAllProducts: async () => {
        const res = await fetch("https://dummyjson.com/products?limit=0");
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await res.json()
        return data.products;
    },

   getAverageRating: (reviews = []) => {
    if (!reviews || reviews.length === 0) return null

    const total = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    )

    return Number((total / reviews.length).toFixed(1))
  }

}