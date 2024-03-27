import { CiSearch, CiShoppingCart  } from "react-icons/ci";
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import keyboard from '../assets/keyboard.jpg'
import sunGlass from '../assets/glasses.jpeg'
import leatherWatch from '../assets/leatherWatch.jpg'
import mouse from '../assets/mouse.jpg'
import monitor from '../assets/monitor.jpg'
import { useState } from "react";
const Main = () => {
    let Products=[
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem ipusm dolar',
            price:40
        },
        {
            img:keyboard,
            title:'Black Keyboard',
            description: 'lorem ipusm dolar',
            price:70
        },
        {
            img:watch,
            title:'Apple Watch',
            description: 'lorem ipusm dolar',
            price:990
        },
        {
            img:laptop,
            title:'ACR laptop',
            description: 'lorem ipusm dolar',
            price:90
        },
        {
            img:leatherWatch,
            title:'Leather watch',
            description: 'lorem ipusm dolar',
            price:880
        },
        {
            img:mouse,
            title:'Hp Mouse',
            description: 'lorem ipusm dolar',
            price:40
        },
        {
            img:monitor,
            title:'One plur monitor',
            description: 'lorem ipusm dolar',
            price:40
        },
        {
            img:keyboard,
            title:'Black Keyboard',
            description: 'lorem ipusm dolar',
            price:70
        },
        {
            img:watch,
            title:'Apple Watch',
            description: 'lorem ipusm dolar',
            price:990
        },
        {
            img:laptop,
            title:'ACR laptop',
            description: 'lorem ipusm dolar',
            price:90
        },
        {
            img:leatherWatch,
            title:'Leather watch',
            description: 'lorem ipusm dolar',
            price:880
        },
        {
            img:mouse,
            title:'Hp Mouse',
            description: 'lorem ipusm dolar',
            price:40
        },
        {
            img:watch,
            title:'Apple Watch',
            description: 'lorem ipusm dolar',
            price:990
        },
        {
            img:laptop,
            title:'ACR laptop',
            description: 'lorem ipusm dolar',
            price:90
        },
        {
            img:leatherWatch,
            title:'Leather watch',
            description: 'lorem ipusm dolar',
            price:880
        },
        {
            img:mouse,
            title:'Hp Mouse',
            description: 'lorem ipusm dolar',
            price:40
        },
        {
            img:monitor,
            title:'One plur monitor',
            description: 'lorem ipusm dolar',
            price:40
        },
        {
            img:keyboard,
            title:'Black Keyboard',
            description: 'lorem ipusm dolar',
            price:70
        },
    ]
    const [filterProducts, setFilterProducts]=useState(Products)
    const searchHandler=(e)=>{
        const filteredArray=Products.filter((product)=>product.title.toLocaleLowerCase().includes(e.target.value))
        if(filteredArray.length !=0){
            setFilterProducts(filteredArray);
        }
    }
    return (
        <div className="w-full relative">
            <div className="sticky top-0 z-10">
                {/* one */}
                <div className="header flex justify-between items-center p-4 bg-white">
                    <h1 className="text-3xl font-bold">8kra Shop</h1>
                    <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                        <input onChange={searchHandler} type="text" name="" id=""  placeholder="Search" className="bg-transparent outline-0"/>
                        <button onClick={()=> searchHandler()}><CiSearch/></button>
                    </div>
                </div>
                {/* two */}
                <div className="categories w-full flex justify-between ml-[80px] space-x-8 px-2 py-10">
                    <div className="bg-black text-white px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Watches</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Laptops</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Monitors</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Mouses</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Glasses</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Keyboards</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Watches</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Watches</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Watches</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Watches</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Watches</p>
                    </div>
                </div>
            </div>
            {/* Other Section */}
            <div className="products ml-[80px] grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
                {filterProducts && filterProducts.map((product, idx)=>{
                    return(
                        <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
                        <img src={product.img} alt="" className="w-full h-[60%] object-cover p-2"/>
                        <div className="m-2 bg-gray-100 p-2">
                            <h1 className="text-xl font-semibold">{product.title}</h1>
                            <p className="text-sm">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold">${product.price}</p>
                                <CiShoppingCart size={'1.5rem'}/>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Main;