import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Marketing Pages
import { LandingPage } from './pages/LandingPage';
import { ServicesCatalog } from './pages/ServicesCatalog';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsPage } from './pages/TermsPage';
import { FaqPage } from './pages/FaqPage';

// Authenticated Platform Pages
import { Dashboard } from './pages/Dashboard';
import { NewJobServices } from './pages/NewJobServices';
import { NewJobUpload } from './pages/NewJobUpload';
import { NewJobReview } from './pages/NewJobReview';
import { JobDetail } from './pages/JobDetail';
import { JobImageReview } from './pages/JobImageReview';
import { JobPayment } from './pages/JobPayment';
import { AccountSettings } from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesCatalog />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/faq" element={<FaqPage />} />

        {/* Platform Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs/new/services" element={<NewJobServices />} />
        <Route path="/jobs/new/upload" element={<NewJobUpload />} />
        <Route path="/jobs/new/review" element={<NewJobReview />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/:id/review" element={<JobImageReview />} />
        <Route path="/jobs/:id/payment" element={<JobPayment />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
