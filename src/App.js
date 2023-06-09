import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Route,Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard  from "./scenes/dashboard";
import { MyProSidebarProvider } from "./scenes/global/sidebar/sidebarContext";
// import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import  Invoices  from "./scenes/invoices";
import  Contacts  from "./scenes/contacts";
import  Bar  from "./scenes/bar";
import  Form  from "./scenes/form";
import  Pie  from "./scenes/pie";
import  Line  from "./scenes/line";
import  FAQ  from "./scenes/faq";
import  Geography  from "./scenes/geography";
import  Calendar  from "./scenes/calendar";



function App() {
  const [theme,colorMode]=useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MyProSidebarProvider>
        <div className="app">
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/admin_dashboard/" element={<Dashboard/>}/>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/geography" element={<Geography/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
          </main>
        </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
