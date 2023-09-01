import AppRouter from 'src/app/providers/router/ui/AppRouter.tsx';
import { useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { getLoading } from 'src/pages/model';
import { Loader } from 'src/shared/ui/Loader/Loader.tsx';
import { NavBar } from 'src/widgets/NavBar';

function App() {
    const isLoading = useAppSelector(getLoading);

    return (
        <div className="app">
            <NavBar />
            <AppRouter />
            {isLoading && <Loader />}
        </div>
    );
}

export default App;
