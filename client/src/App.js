import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import layout
import MainLayout from "./layout/MainLayout";
import PsychoLayout from "./layout/PsychoLayout";
import ArticleLayout from "./layout/ArticleLayout";
// import pages
import Home, { articleLoader } from "./page/HomePage";
import ArticlePage, { articlePageLoader }from "./page/ArticlePage";
import ArticleDetailPage, { articleDetailPageLoader } from "./page/ArticleDetailPage";
import AppointmentPage, { appointLoader } from "./page/AppointmentPage";
import PsychoPage, { psychologistsLoader } from "./page/PsychoPage";
import ConfirmPage, { confirmLoader, updating } from "./page/ComfirmPage";

import './App.css';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<Home />}
          loader={articleLoader}
        />
        <Route
          path=":id"
          element={< ArticleDetailPage />}
          loader={articleDetailPageLoader}
        />
        <Route path="psychologist" element={<PsychoLayout />}>
          <Route
            index
            element={<PsychoPage />}
            loader={psychologistsLoader}
          />
          <Route
            path=":id"
            element={<AppointmentPage />}
            loader={appointLoader}            
          />
          <Route
            path=":id/confirm"
            element={<ConfirmPage />}
            loader={confirmLoader}
            action={updating}
          />
        </Route >
        <Route path="article" element={<ArticleLayout />}>
          <Route
            index
            element={< ArticlePage />}
            loader={articlePageLoader}
          />
          <Route
            path=":id"
            element={< ArticleDetailPage />}
            loader={articleDetailPageLoader}
          />
        </Route>
      </Route >
    )
  );
  
const App = () => <RouterProvider router={router} />;
    
export default App;
