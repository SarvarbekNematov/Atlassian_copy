import { useRoutes } from "react-router-dom"
import MainLayout from "../layout"
import Dashboard from "../pages/dawboard"

const Routing = () => {
  return (
    <div>
        {useRoutes([
            {
                path: '/',
                element: <MainLayout/>,
                children: [
                    {
                        path: '/',
                        element: <Dashboard/>,
                    }
                ]
            }
        ])}
    </div>
  )
}

export default Routing