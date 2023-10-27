import './app/styles/index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App.tsx';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
);
