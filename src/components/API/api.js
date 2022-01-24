import axios from "axios";
import {
  updateListTypesCategories,
  updateListProducts,
  updateListRates,
} from "../../store/actionCreaters";

export function getListProducts() {
  return (dispatch) => {
    return axios({
      url: "http://localhost:4000/",
      method: "POST",
      data: {
        query: `
        query data {
          category{
            name,
            products{
                     id,
                     name,
                     gallery,
                     inStock,
                     description,
                    category,
                    prices{
                      currency{
                        label,
                        symbol
                      },
                      amount
                    },
                    brand
            }
          }
        }`,
      },
    }).then((result) => {
      dispatch(updateListProducts(result.data.data.category.products));
    });
  };
}

export function getCurrencyRates() {
  return (dispatch) => {
    return axios({
      url: "http://localhost:4000/",
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
      dispatch(updateListRates(result.data.data.currencies));
    });
  };
}

export function getTypesCategories() {
  return (dispatch) =>
    axios({
      url: `http://localhost:4000/`,
      method: "POST",
      data: {
        query: `
              query categoriesTypes {
                  categories{
                    name
                  }
                }
                `,
      },
    }).then((result) => {
      dispatch(updateListTypesCategories(result.data.data.categories));
    });
}
