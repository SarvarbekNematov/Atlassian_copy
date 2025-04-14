import { useRoutes } from "react-router-dom"
import MainLayout from "../layout"
import Dashboard from "../pages/dawboard"
import Marketing from "../components/teams/marketing"
import Engeenering from "../components/teams/engenering"
import Design from "../components/teams/design"
import Operation from "../components/teams/operation"
import It from "../components/teams/iT"

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
                        children: [
                            {
                                path: '/software/marketing',
                                element: <Marketing/>
                            },
                            {
                                path: '/software/engineering',
                                element: <Engeenering/>
                            },
                            {
                                path: '/software/design',
                                element: <Design/>
                            },
                            {
                                path: '/software/operations',
                                element: <Operation/>
                            },
                            {
                                path: '/software/IT',
                                element: <It/>
                            },
                        ]
                    }
                ]
            }
        ])}
    </div>
  )
}

export default Routing