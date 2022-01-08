import { GeneratedCard } from "~/routes/cards/index";

export const saveCard = async (data: GeneratedCard) => {
  const response = await fetch(
    "https://personal-firebase-projects-default-rtdb.europe-west1.firebasedatabase.app/cards.json",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((data) => data.json())
    .catch((error) => error.message);
  return response;
};

export const getCards = async () => {
  const response = await fetch(
    "https://personal-firebase-projects-default-rtdb.europe-west1.firebasedatabase.app/cards.json"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.message;
    });
  return response;
};
