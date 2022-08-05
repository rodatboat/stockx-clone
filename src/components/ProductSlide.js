import './ProductSlide.css'
import { Link } from 'react-router-dom'

const ProductSlide = ({ shoe }) => {
    return (
        <>
            <Link
                to={'/' + shoe.urlKey}
                onClick={() => (window.location.href = '/' + shoe.urlKey)}
                params={{ urlKey: shoe.urlKey }}
            >
                <div className='product'>
                    <img src={shoe.media.thumbUrl} />
                    <div className='product-details'>
                        <span className='product-name'>{shoe.model}</span>
                        <span className='product-lowest-ask'>Lowest Ask</span>
                        <span className='product-lowest-ask-price'>
                            {'$' + shoe.market.bidAskData.lowestAsk}
                        </span>
                        <span className='product-last-sale'>
                            {'Last Sale: $' + shoe.market.bidAskData.highestBid}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductSlide
