export const userServices = {
    getSomePeople: async (nbUser) => {
        const res = await fetch(`https://randomuser.me/api/?results=${nbUser}`);
        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await res.json()
        return data.results;
    },
 

}