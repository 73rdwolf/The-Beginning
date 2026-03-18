import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Marketing Pages
import { LandingPage } from './pages/LandingPage';
import { InsightsPage } from './pages/InsightsPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsPage } from './pages/TermsPage';
import { FaqPage } from './pages/FaqPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';

// Authenticated Platform Pages
import { JobDetail } from './pages/JobDetail';
import { JobImageReview } from './pages/JobImageReview';
import { JobPayment } from './pages/JobPayment';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<LandingPage />} />
        <Route path="/pricing" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<LandingPage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/solutions/:industry" element={<SolutionDetailPage />} />

        {/* Platform Routes */}
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/jobs/new/services" element={<LandingPage />} />
        <Route path="/jobs/new/upload" element={<LandingPage />} />
        <Route path="/jobs/new/review" element={<LandingPage />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/:id/review" element={<JobImageReview />} />
        <Route path="/jobs/:id/payment" element={<JobPayment />} />
        <Route path="/account" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
