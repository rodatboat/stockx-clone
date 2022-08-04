import './VerifiedAuthHero.css';

const VerifiedAuthHero = () => {
    const img_src = "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltc3258254704231c0/62a8faa88f6a4950536d049f/Merchandising_Modules_EN_-_Image_02.jpg?width=636&height=360&auto=webp&quality=90&dpr=2&format=jpg";

    return (
        <>
            <div className='verified-auth-hero'>
                <span className='verified-auth-hero-title'>Verified Authentic Sneakers</span>
                <span className='verified-auth-hero-subtitle'>We Authenticate Every Item. Every Time.</span>
                <img src={img_src}/>
            </div>
        </>
    )
}

export default VerifiedAuthHero;