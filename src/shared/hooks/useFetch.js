export const useFetch = () => {
  const fetchData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cann't connect to API.");
    }

    return await response.json();
  };

  const fetchDataWithLogger = async (url) => {
    return await fetchData(url).then((res) => {
      localStorage.setItem("prevResponse", JSON.stringify(res));
      return res;
    });
  };
  return { fetchDataWithLogger, fetchData };
};
