import {
    DynamicModuleLoader,
    ReducersList,
} from 'src/shared/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { About, aboutReducer } from 'src/widgets/About';

const reducers: ReducersList = {
    about: aboutReducer,
};

const AboutPage = () => (
    <DynamicModuleLoader reducers={reducers}>
        <About />
    </DynamicModuleLoader>
);
export default AboutPage;
