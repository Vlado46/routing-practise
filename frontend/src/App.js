import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditEvent from "./pages/EditEvent";
import EventDetail from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ":eventId", element: <EventDetail /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
