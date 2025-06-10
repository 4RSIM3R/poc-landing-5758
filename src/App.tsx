import { Route, Routes } from "react-router";
import { Home } from "@/pages/home";
import { Layout } from "@/layouts/layout";
import { ArticleList } from "@/pages/article-list";
import { CareerList } from "@/pages/career-list";
import { ArticleDetail } from "@/pages/article-detail";
import { CareerDetail } from "@/pages/career-detail";
import { Value } from "@/pages/value";
import { Speciality } from "@/pages/speciality";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/article" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/career" element={<CareerList />} />
        <Route path="/career/:id" element={<CareerDetail />} />
        <Route path="/value/:id" element={<Value />} />
        <Route path="/speciality/:id" element={<Speciality />} />
      </Route>
    </Routes>
  );
}

export default App;
