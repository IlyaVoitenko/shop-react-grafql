import axios from "axios";
import { useDispatch } from "react-redux";

const urlBase = `http://localhost:4000/`;
export function getCurrencyRates() {
  axios({
    url: urlBase,
    method: "post",
    data: {
      query: `
              query data {
                currencies{
                  label,
                  symbol
                }
                }
                `,
    },
  }).then((result) => {
    return dispatch(updateListRates(result.data));
  });
}
