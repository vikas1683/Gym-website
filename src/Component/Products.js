import React from 'react'

export default function Products({menuList}) {
    console.log(menuList);
    return (
        <>
        
        <section className='main-card--cointainer'>
            {menuList.map((curElem) => {

                const { id, name, category, image, description } = curElem

                return (
                    <>
                        <div className='card-container' key={id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className='card-author subtle'>{category}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <span className='card-description subtle'>{description}
                                    </span>
                                    <div className='card-read'>Read</div>
                                </div>
                                <img src={image} alt="image" />
                                <span className='card-tag subtle' onClick={()=>alert("Order Now Is Successful")}>Order Now</span>
                            </div>
                        </div>
                    </>
                );
            })
            }
        </section>
        
    </>
    )
}
