import AppRouter from '@/app/providers/router/ui/AppRouter.tsx';
import { useAppSelector } from '@/app/providers/StoreProvider/config/store.ts';
import { getLoading } from '@/pages/model';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import { NavBar } from '@/widgets/NavBar';

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
