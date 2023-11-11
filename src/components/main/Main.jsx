import "./Main.scss"
import '../../scss/pagination.scss'
import { useEffect, useState, useReducer } from "react"
import { Link } from "react-router-dom";
import { apiInstance } from "../../api"
import { Container } from "../../utils/Utils";
import { AiOutlineEye } from 'react-icons/ai'

import ReactPaginate from 'react-paginate';
import { numberToCurrency } from "../../helpers";

const reducer = (state, action) => {
  console.log(action);
  return action
}



const Main = () => {

  const [state, dispatch] = useReducer(reducer, [])
  const itemsPerPage = 20; // Har bir sahifada ko'rsatiladigan elementlar soni

  useEffect(() => {
    try {
      apiInstance("coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")
        .then(response => {
          dispatch(response.data)
          console.log(response.data);
        })
    }
    catch (error) {
      console.log(error);
    }

  }, [])




  const pageCount = Math.ceil(100 / itemsPerPage); // Umumiy sahifalar soni
  console.log(pageCount)

  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage + 1)
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);
  
  
  const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
  };
  
  



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
              <th className="pricechange-title">24h Change</th>
              <th className="marketcap-title">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((crypto, index) =>
                <tr className="crypto__render-row">
                  <td className="crypto-coin">
                    <Link to={`/cryptoView/${crypto.id}`}><img src={crypto.image} alt="" width={50} height={50} /></Link>
                    <div className="crypto-name-info">
                      <p>{crypto.name}</p> <small>{crypto.symbol}</small>
                    </div>
                  </td>
                  <td className="crypto-price">₹ {crypto.current_price}</td>
                  <td className="crypto__change-price">
                    <i><AiOutlineEye /></i>
                    <span className={crypto.price_change_percentage_24h_in_currency > 0 ? "rise-price" : crypto.price_change_percentage_24h_in_currency.toFixed(5) === 0.00000 ? "rise-price" : "fall-price"}> {crypto.price_change_percentage_24h_in_currency.toFixed(2)}%</span>
                  </td>
                  <td className="crypto__market-cap">  {numberToCurrency(crypto.market_cap)}M</td>
                  <td></td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
          </tfoot>
        </table>
          <ReactPaginate
        previousLabel={'<'}
         nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
    />

      </div>
    </Container>
  )
}

export default Main