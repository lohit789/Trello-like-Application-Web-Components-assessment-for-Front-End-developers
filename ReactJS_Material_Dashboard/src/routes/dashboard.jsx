// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import TableList from "views/TableList/TableList.jsx";
import Icons from "views/Icons/Icons.jsx";
const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;