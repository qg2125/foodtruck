import './App.css';
import Card from './Card/Card';

const App = () => {

  return (
    <div className="App">
      <div className='Header'>
        <img src ="/src/pic/awning.png"/>
        <h1>Food Truck Favorites</h1>
      </div>
      
      <div className='container'>
        <Card url = 'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' name = 'Birria-Landia' country = 'Mexican' menu = 'https://birrialandia.com/menu' />
        <Card url = 'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' name = 'Mysttik Masala' country = 'Indian' menu = 'https://indianfoodny.com/'/>
        <Card url = 'https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' name='The Halal Guys' country ='Middle Eastern' menu='https://thehalalguys.com/menu/' />
        <Card url = 'https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' name='NY Dosas' country ='Vegetarian' menu='https://nydosas.com/menu/' />
        <Card url = 'https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' name='Jerk Pan' country ='Jamaican' menu='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/' />
        <Card url = 'https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' name='Tong' country ='Bangladeshi' menu='https://www.facebook.com/Bangladeshistreetfoods/' />
        <Card url = 'https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' name="Uncle Gussy's" country ='Greek' menu='https://unclegussys.com/menus/' />
        <Card url = 'https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' name="Mom's Mono" country ='Tibetan' menu='https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/' />
        <Card url = 'https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg' name='Makina Cafe' country ='Ethiopian' menu='https://makinacafenyc.com/' />
        <Card url = 'https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg' name='Patacon Pisao' country ='Venezuelan' menu='https://www.pataconpisaonyc.com/menus/' />
    </div>
    </div>
  )
}

export default App