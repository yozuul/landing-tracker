const fetchData = async (url, data) => {
   try {
      const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      console.log('Data send:', response);
   } catch (error) {
      console.error('Error fetching:', error);
   }

}

export { fetchData }