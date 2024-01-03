import "./App.css";
import { UserProvider } from "./components/userContext";
import ApiFilm from "./components/ApiFilm";
/* import DataFetchingOne from './components/DataFetchingOne'; */
/* import Formulaire from './components/Formulaire'; */
/* import Inline from './components/Inline'; */
import NameList from "./components/NameList";
import NewForm from "./components/NewForm";
import C from "./components/C";
/* import DataFetchAll from './components/DataFetchAll'; */
/* import DataFetchAllContact from './components/DataFetchAllContact'; */
/* import DataFetchEx from './components/DataFetchEx'; */
import DataFetchReducer from "./components/DataFetchReducer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Developpement from "./components/Services/Developpement/Developpement";
import Marketing from "./components/Services/Marketing/Marketing";
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import GestionPost from "./components/Admin/GestionPost/GestionPost";
import AllContact from "./components/Contact/AllContact";
import OneContact from "./components/Contact/OneContact";
import AllBlogs from "./components/Blog/AllBlogs";
import OneBlog from "./components/Blog/OneBlog";
import { AppContainer } from "./components/AppContainer.style";
import NewBlog from "./components/Blog/NewBlog";
import Inscription from "./components/User/Inscription";
import Connexion from "./components/User/Connexion";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import MultipleUploads from "./components/ImageUpload/MultipleUploads";
import NewBlogImage from "./components/Blog/NewBlogImage";
/* import Person from './components/Person'; */
/* import Stylesheet from './components/Stylesheet'; */
// import Greet from './components/Greet';
// import Superhero from './components/Superhero';
// import Message from './components/Message';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import UserGreeting from './components/UserGreeting';
// import AdminTest from './components/AdminTest';

function App() {
    return (
        <div className="App">
            {/* <Greet name="John Wick" age="29" />

      <Superhero name="Bruce" nhero="Batman">
        This is children props
      </Superhero>
      <Superhero name="Clark" nhero="Superman" />
      <Superhero name="Diana" nhero="Wonder Woman" />

      <Welcome name="Thomas" age="21">
        Test
      </Welcome>
      <Welcome name="John Wick" age="39" />
      <Welcome name="Kitchen" age="23" />

      <Message />

      <Counter value={1000} />

      <FunctionClick />
      <ClassClick />

      <UserGreeting />

      <AdminTest /> */}
            {/* <NameList /> */}
            {/* <Inline />
      <Stylesheet primary={true}/> */}
            {/* <Formulaire /> */}
            {/* <NewForm /> */}
            {/* <DataFetchingOne /> */}
            {/* <ApiFilm /> */}

            {/* <UserProvider value='Yab'>
        <C />
      </UserProvider>

      <DataFetchReducer /> */}
            <AppContainer>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/services" element={<Services />}>
                        <Route path="/services/developpement" element={<Developpement />} />
                        <Route path="/services/marketing" element={<Marketing />} />
                    </Route>

                    <Route path="/admin" element={<Admin />}>
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/gestionpost" element={<GestionPost />} />
                    </Route>

                    <Route path="/profile/:id" element={<Profile />}></Route>
                    <Route path="/allcontact" element={<AllContact />}></Route>
                    <Route path="/contact/:id" element={<OneContact />}></Route>

                    {/* Blogs */}
                    <Route path="/allblogs" element={<AllBlogs />}></Route>
                    <Route path="/blog/:id" element={<OneBlog />}></Route>
                    <Route path="/newblog" element={<NewBlog />}></Route>

                    {/* Users */}
                    <Route path="/inscription/" element={<Inscription />} />
                    <Route path="/connexion/" element={<Connexion />} />

                    {/* Image */}
                    <Route path="/imageupload" element={<ImageUpload />} />
                    <Route path="/multipleuploads" element={<MultipleUploads />} />
                    <Route path="/newblogimage" element={<NewBlogImage />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AppContainer>
        </div>
    );
}

export default App;
