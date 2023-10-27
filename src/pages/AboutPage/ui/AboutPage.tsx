import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { About, aboutReducer } from '@/widgets/About';

const reducers: ReducersList = {
    about: aboutReducer,
};

const AboutPage = () => (
    <DynamicModuleLoader reducers={reducers}>
        <About />
    </DynamicModuleLoader>
);
export default AboutPage;
