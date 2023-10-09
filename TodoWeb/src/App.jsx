import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
import Layout from "./components/Layout";

function DynamicPage() {
  let location = useLocation();
  const params = useParams();
  if("/" === location.pathname || "" ===location.pathname){
    location.pathname = "/Home";
  }
  console.log(`URL: ./pages/${location.pathname.slice(1)}`);
  console.log(`Location: ${location.pathname}`);
  console.log(`Params: ${JSON.stringify(params)}`);

  const PageComponent = lazy(() =>
    import(`./pages/${location.pathname.slice(1)}`)
  );
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <PageComponent />
      </Suspense>
    </Layout>
  );
}


function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DynamicPage />} />
          <Route path="/todo" element={<DynamicPage />} />
          <Route path="/setting" element={<DynamicPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
