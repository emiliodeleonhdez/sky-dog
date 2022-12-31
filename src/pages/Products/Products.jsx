import React from 'react'
import ProductCard from '../../components/Cards/Product Card/ProductCard';

const Products = () => {

    const products = [
        {
            img: '',
            title: 'Product 1',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Product 2',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Product 3',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Product 4',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Product 5',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        },
        {
            img: '',
            title: 'Product 6',
            description: 'Nunc mattis feugiat ex scelerisque congue.'
        }
    ];

  return (
    <>
        <div className='container my-3'>
            <div className="row justify-content-center children__elements--mt-15-mb-15">
                <h1 className='text-center'>Diferentes objetivos para tú perrito</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sunt, aliquam soluta ipsam unde natus adipisci sequi quas earum, rerum ex eum rem tenetur. Mollitia totam harum ea magnam consequatur.</p>
            {products.map((card, index) => (
                        <ProductCard key={index} cardImg={card.img} cardTitle={card.title} cardDescription={card.description} />
                    ))}
            </div>
        </div>
    </>
  )
}

export default Products