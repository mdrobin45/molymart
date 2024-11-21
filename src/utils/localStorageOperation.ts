// Save data to local storage
export const saveDataLocalStorage = (key: string, data: any) => {
   const getData = getDataLocalStorage(key);
   if (getData) {
      const updatedData = [...getData, data];
      let findItem = updatedData.find((item: any) => item.sku === data.sku);

      if (findItem) {
      if (findItem.quantity !== data.quantity) {
            findItem = data;
            const updateFindItem = updatedData.filter(
               (item: any) => item.sku !== data.sku
            );
            localStorage.setItem(key, JSON.stringify([...updateFindItem, findItem]));
            alert("Product quantity updated");
         } else {
            alert("Product already in cart");
         }
      } else {
         localStorage.setItem(key, JSON.stringify(updatedData));
      }
   } else {
      localStorage.setItem(key, JSON.stringify([data]));
   }
};

// Toggle wishlist
export const toggleWishlist = (item: any) => {
   console.log(item);
   const wishlistData = getDataLocalStorage("wishlist");
   if (wishlistData) {
      const findItem = wishlistData.find(
         (wishlistItem: any) => wishlistItem.sku === item.sku
      );
      if (findItem) {
         const updatedWishlist = wishlistData.filter(
            (wishlistItem: any) => wishlistItem.sku !== item.sku
         );
         localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      } else {
         localStorage.setItem("wishlist", JSON.stringify([...wishlistData, item]));
      }
   } else {
      localStorage.setItem("wishlist", JSON.stringify([item]));
   }
};

// Get data from local storage
export const getDataLocalStorage = (key: string) => {
   const data = localStorage.getItem(key);
   return data ? JSON.parse(data) : null;
};

// Remove data from local storage
export const removeDataLocalStorage = (key: string, sku: string) => {
   const data = getDataLocalStorage(key);
   const updatedData = data ? data.filter((item: any) => item.sku !== sku) : [];
   if (updatedData) {
      saveDataLocalStorage(key, updatedData);
   }
};
