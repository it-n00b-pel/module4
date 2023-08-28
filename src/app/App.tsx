import AppRouter from 'src/app/providers/router/ui/AppRouter.tsx';
import { NavBar } from 'src/widgets/NavBar';

function App() {
    return (
        <div className="app">
            <NavBar />
            <AppRouter />
            {/* <Banner /> */}
        </div>
    );
}

export default App;
