import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Marketing Pages
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { InsightsPage } from './pages/InsightsPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsPage } from './pages/TermsPage';
import { FaqPage } from './pages/FaqPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesCatalog } from './pages/ServicesCatalog';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';

// Authenticated Platform Pages
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { AccountSettings } from './pages/AccountSettings';
import { NewJobServices } from './pages/NewJobServices';
import { NewJobUpload } from './pages/NewJobUpload';
import { NewJobReview } from './pages/NewJobReview';
import { JobDetail } from './pages/JobDetail';
import { JobImageReview } from './pages/JobImageReview';
import { JobPayment } from './pages/JobPayment';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/services" element={<ServicesCatalog />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/solutions/:industry" element={<SolutionDetailPage />} />

        {/* Platform Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/jobs/new/services" element={<NewJobServices />} />
        <Route path="/jobs/new/upload" element={<NewJobUpload />} />
        <Route path="/jobs/new/review" element={<NewJobReview />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/:id/review" element={<JobImageReview />} />
        <Route path="/jobs/:id/payment" element={<JobPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
