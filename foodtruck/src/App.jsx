import './App.css';
import Card from './Card/Card';

const App = () => {

  return (
    <div className="App">
      <div className='Header'>
        <img src ="https://heroic-pixie-6d7f91.netlify.app/awning.png"/>
        <h1>Food Truck Favorites</h1>
      </div>
      
      <div className='container'>
        <Card url = 'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' name = 'Birria-Landia' country = 'Mexican' menu = 'https://thebirrialandia.com/menu/' />
        <Card url = 'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' name = 'Mysttik Masala' country = 'Indian' menu = 'https://indianfoodny.com/'/>
        <Card url = 'https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' name='The Halal Guys' country ='Middle Eastern' menu='https://thehalalguys.com/menu/' />
        <Card url = 'https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' name='NY Dosas' country ='Vegetarian' menu='https://nydosas.com/menu/' />
    </div>
    </div>
  )
}

export default App