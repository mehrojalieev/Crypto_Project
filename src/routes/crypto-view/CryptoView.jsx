import { useEffect, useReducer, useState } from "react"
import "./CryptoView.scss"
import { useParams } from "react-router-dom"
import { apiInstance } from "../../api"

const CryptoView = () => {

  const [data,setData] = useState()
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})



  useEffect(() => {
    apiInstance(`/coins/${id}`)
      .then(response => {
        console.log(response.data);
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    data &&
    <>
      <div className="product__view-container">
        <div key={data.id} className="crypto__view-content">
          <img src={data.image.large} width={200} height={200} />
          <h3 className="crypto-name">{data.name}</h3>
          <p className="rank-description">{data.description.en.slice(0, 200)}</p>
        <div className="prices-card">
        <h4 className="rank-title">Rank: 1</h4>
          <div className="rank-info">
            <strong>Current Price:</strong>
            <span>{data.market_data.current_price.usd}</span>
          </div>
          <div className="rank-info">
            <strong>Market Cap:</strong>
            <span>₹ {data.market_data.ath.usd} M</span>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CryptoView