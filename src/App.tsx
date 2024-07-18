import { Route, Routes } from 'react-router-dom';
import MainRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-lightGray">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
}

export default App;
