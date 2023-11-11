import "./Main.scss"
import { useEffect, useReducer } from "react"
import { apiInstance } from "../../api"
import { Container } from "../../utils/Utils";

const reducer = (state, action) => {
  console.log(action);
  return action
}

const Main = () => {

  const [state, dispatch] = useReducer(reducer, [])


  useEffect(() => {
    try {
      apiInstance("/coins/")
        .then(response => {
          dispatch(response.data)
          console.log(response.data);
        })
    }
    catch (error) {
      console.log(error);
    }

  }, [])

  return (
    <Container>
      <div className="crypto-wrapper">
        <h2 className="crypto__title">Cryptocurrency Prices by Market Cap</h2>
        <form className="search-form">
          <input className="search-crypto" type="text" placeholder="Search For a Crypto Currency.." />
        </form>
        <table>
          <thead>
            <tr>
              <th >Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((crypto, index) =>
                <>
                  <tr>
                    <td className="crypto-coin">
                      <img src={crypto.image.large} alt="" width={50} height={50} />
                      <div className="crypto-name-info">
                        <p>{crypto.name}</p> <small>{crypto.symbol}</small>
                      </div>
                    </td>
                    <td>₹{crypto.market_data.current_price.aed}</td>
                  </tr>
                </>
              )
            }
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default Main