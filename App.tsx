import { VestibulandoEspecialista } from './VestibulandoEspecialista';

// Other imports

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Other routes */}
                <Route path="/vestibulandos" element={<VestibulandoEspecialista />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;