import useLocalStorage from "./useLocalStorage";

const useLocalData = () => {
  const [favs, setFavs] = useLocalStorage("favs", [{}]);
  const [comments, setComments] = useLocalStorage("comments", [{}]);

  const addFav = (ID: String, title: String) => {
    const newFav = {
      id: ID,
      title: title,
    };
    setFavs([...favs, newFav]);
  };

  const addComment = (ID: String, comment: String) => {
    const newComment = {
      id: ID,
      comment: comment,
    };
    setComments([...comments, newComment]);
  };

  const removeFav = (ID: String) => {
    const newFavs = favs.filter((t: any) => t.id !== ID)
    setFavs(newFavs)
  }
  
  return {
      favs,
      comments,
      addFav,
      addComment,
      removeFav
  }
};

export default useLocalData;
