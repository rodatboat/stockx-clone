import './ProductSlide.css';

const ProductSlide = ({shoe}) => {
    return (
        <>
        <div className="product">
            <img src={shoe.media.thumbUrl} />
            <div className='product-details'>
                <span className='product-name'>{shoe.model}</span>
                <span className='product-lowest-ask'>Lowest Ask</span>
                <span className='product-lowest-ask-price'>{"$" + shoe.market.bidAskData.lowestAsk}</span>
                <span className='product-last-sale'>{"Last Sale: $" + shoe.market.bidAskData.highestBid}</span>

            </div>
        </div>
        </>
    )
}

export default ProductSlide;