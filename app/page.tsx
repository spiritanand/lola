import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./NavBar";
import ItemList from './component/ItemList'

export default function Home() {
  const ItemLists = [
    {
      id:'1',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960',
      name:'Hi',
      description:'HI there How are you ?',
      rentalPeriod: '2 months',
      seller: 'Suryansh',
      type:'rental'
    },{
      id:'2',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960',
      name:'Hi',
      description:'HI there How are you ?',
      rentalPeriod: '2 months',
      seller: 'Suryansh',
      type: 'rental'
    },{
      id:'3',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960',
      name:'Hi',
      description:'HI there How are you ?',
      rentalPeriod: '2 months',
      seller: 'Suryansh',
      type:'rental'
    },{
      id:'4',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960',
      name:'Hi',
      description:'HI there How are you ?',
      rentalPeriod: '2 months',
      seller: 'Suryansh',
      type:'rental'
    }
  ]
  return (
    <main>
      <NavBar/>
      <section className='card-group'>
        {ItemLists.map( (item)=> <ItemList item={item}/>)}
      </section>
      <h1>Page 1</h1>
    </main>
  );
}


