const fetchData = async (url, data) => {
   try {
      const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      // const json = await response.json();
      console.log('Данные отправлены:', response);
      // console.log('Данные отправлены:', JSON.stringify(json));
   } catch (error) {
      console.error('Ошибка:', error);
   }

}

export { fetchData }