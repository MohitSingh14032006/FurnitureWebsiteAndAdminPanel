import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './components/common/MainLayout'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import ViewUsers from './components/pages/Users/ViewUsers'
import ContactEnquirys from "./components/pages/Enquirys/ContactEnquirys";
import NewsLetters from "./components/pages/Enquirys/NewsLetters";
import ViewColors from "./components/pages/Colors/ViewColors";
import AddColors from "./components/pages/Colors/AddColors";
import ViewMaterials from "./components/pages/Materials/ViewMaterials";
import AddMaterials from "./components/pages/Materials/AddMaterials";
import ViewCategories from "./components/pages/ParentCategorys/ViewCategories";
import AddCategories from "./components/pages/ParentCategorys/AddCategories";
import AddSubCategories from "./components/pages/SubCategorys/AddSubCategories";
import ViewSubCategories from "./components/pages/SubCategorys/ViewSubCategories";
import ViewSubSubCategories from "./components/pages/SubSubCategorys/ViewSubSubCategories";
import AddSubSubCategories from "./components/pages/SubSubCategorys/AddSubSubCategories";
import AddProducts from "./components/pages/Products/AddProducts";
import ViewProducts from "./components/pages/Products/ViewProducts";
import AddChooseUs from "./components/pages/ChooseUs/AddChooseUs";
import ViewChooseUs from "./components/pages/ChooseUs/ViewChooseUs";
import Order from "./components/pages/Orders/Order";
import AddSlider from "./components/pages/Sliders/AddSlider";
import ViewSlider from "./components/pages/Sliders/ViewSlider";
import ViewCountry from "./components/pages/Country/ViewCountry";
import AddCountry from "./components/pages/Country/AddCountry";
import ViewTestimonials from "./components/pages/Testimonials/ViewTestimonials";
import AddTeastimonials from "./components/pages/Testimonials/AddTestimonials";
import ViewFAQ from "./components/pages/FAQs/ViewFAQ";
import AddFAQ from "./components/pages/FAQs/AddFAQ";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>} />
          <Route element={<MainLayout />}>
            <Route path={'/dashboard'} element={<Dashboard/>} />
            <Route path={'/user'} element={<ViewUsers/>} />
            <Route path={'/enquiry'} element={<ContactEnquirys/>} />
            <Route path={'/newsletter'} element={<NewsLetters/>} />

            <Route path={'/color/add'} element={<AddColors/>} />
            <Route path={'/color/view'} element={<ViewColors/>} />
            <Route path={'/color/update/:id'} element={<AddColors/>} />

            <Route path={'/material/add'} element={<AddMaterials/>} />
            <Route path={'/material/view'} element={<ViewMaterials/>} />
            <Route path={'/material/update/:id'} element={<AddMaterials/>}/>

            <Route path={'/category/add'} element={<AddCategories/>} />
            <Route path={'/category/view'} element={<ViewCategories/>} />
            <Route path={'/category/sub-category/add'} element={<AddSubCategories/>} />
            <Route path={'/category/sub-category/view'} element={<ViewSubCategories/>} />
            <Route path={'/category/sub-sub-category/add'} element={<AddSubSubCategories/>} />
            <Route path={'/category/sub-sub-category/view'} element={<ViewSubSubCategories/>} />
            <Route path={'/product/add'} element={<AddProducts/>} />
            <Route path={'/product/view'} element={<ViewProducts/>} />
            <Route path={'/why-choose-us/add'} element={<AddChooseUs/>} />
            <Route path={'/why-choose-us/view'} element={<ViewChooseUs/>} />
            <Route path={'/orders/orders'} element={<Order/>} />
            <Route path={'/slider/add'} element={<AddSlider/>} />
            <Route path={'/slider/view'} element={<ViewSlider/>} />

            <Route path={'/country/add'} element={<AddCountry/>} />
            <Route path={'/country/view'} element={<ViewCountry/>} />
            <Route path={'/country/update/:id'} element={<AddCountry/>}/>

            <Route path={'/testimonial/add'} element={<AddTeastimonials/>} />
            <Route path={'/testimonial/view'} element={<ViewTestimonials/>} />

            <Route path={'/faq/add'} element={<AddFAQ/>} />
            <Route path={'/faq/view'} element={<ViewFAQ/>} />
            <Route path={'/faq/update/:id'} element={<AddFAQ/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
