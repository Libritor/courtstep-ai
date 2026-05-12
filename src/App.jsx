import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import LiveDemo from './pages/LiveDemo';
import Dashboard from './pages/Dashboard';
import GaitAnalysis from './pages/GaitAnalysis';
import RiskReport from './pages/RiskReport';
import Recommendations from './pages/Recommendations';
import Rehabilitation from './pages/Rehabilitation';
import SolanaProofs from './pages/SolanaProofs';
import Privacy from './pages/Privacy';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';
import HackathonFit from './pages/HackathonFit';
import UploadData from './pages/UploadData';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<LiveDemo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gait-analysis" element={<GaitAnalysis />} />
        <Route path="/risk-report" element={<RiskReport />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/rehabilitation" element={<Rehabilitation />} />
        <Route path="/solana-proofs" element={<SolanaProofs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/hackathon-fit" element={<HackathonFit />} />
        <Route path="/upload" element={<UploadData />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <Router>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <AuthenticatedApp />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </Router>
  )
}

export default App