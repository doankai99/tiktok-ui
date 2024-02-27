// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Page/Home';
// import Following from './Page/Following';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/following" element={<Following />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Page/Home';
// import Following from './Page/Following';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './Components/Layout';
import './App.css';

function App() {
  return (
    <div className="bg-raven">
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/following" element={<Following />} /> */}
        {publicRoutes.map((item, index) => {
          // const Layout = item.layout === null ? Fragment : DefaultLayout;
          let Layout = DefaultLayout;
          if(item.layout) {
            Layout = item.layout;
          }else if(item.layout === null){
            Layout = Fragment as any;
            // Layout = ({ children }) => <Fragment>{children}</Fragment>;
          }
          const Page = item.component;
          return (
            <Route
              key={index}
              path={item.path}
              element={
              <Layout>
                <Page />
              </Layout>
            }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
