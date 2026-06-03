import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import OnBoard from './components/pages/onBoard/onBoard';
import ObDetails from './components/pages/onBoard/obDetails';
import ObStart from './components/pages/onBoard/getStarted';

import Home from './components/pages/home/home';
import Difficulty from './components/pages/home/difficulty';
import Start from './components/pages/home/start';
import Exercises from './components/pages/exercises/exercises';
import Display from './components/pages/exercises/display';
import Prev from './components/pages/prev/prev';
import Programs from './components/pages/programs/programs';
import ProgramDetails from './components/pages/programs/programDetail';
import InProgress from './components/pages/inProgress/inProgress';
import Rest from './components/pages/inProgress/rest';
import Summary from './components/pages/inProgress/summary';

import Settings from './components/pages/settings/settings';
import Profile from './components/pages/profile/profile';
import Results from './components/pages/results/results';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<OnBoard/>}/>
    <Route path="details" element={<ObDetails/>}/>
    <Route path="obStart" element={<ObStart/>}/>

    <Route path="home" element={<Home/>}/>
    <Route path="difficulty" element={<Difficulty/>}/>
    <Route path="start" element={<Start/>}/>
    <Route path="exercises" element={<Exercises/>}/>
    <Route path="display/:id" element={<Display/>}/>
    <Route path="previous" element={<Prev/>}/>
    <Route path="programs" element={<Programs/>}/>
    <Route path="programDetails/:id" element={<ProgramDetails/>}/>
    <Route path="inProgress" element={<InProgress/>}/>
    <Route path="rest" element={<Rest/>}/>
    <Route path="summary" element={<Summary/>}/>

    <Route path="settings" element={<Settings/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="results" element={<Results/>}/>

  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
