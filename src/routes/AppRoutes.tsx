import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PlatformOverview from '../pages/PlatformOverview';
import BusinessConsultantServices from '../pages/BusinessConsultantServices';
import PartnerNetwork from '../pages/PartnerNetwork';
import RecruitmentProcessOutsourcing from '../pages/RecruitmentProcessOutsourcing';
import ManagedServiceProvider from '../pages/ManagedServiceProvider';
import RAAS from '../pages/RAAS';
import SAAS from '../pages/SAAS';
import DirectSourcing from '../pages/DirectSourcing';
import BookADemo from '../pages/BookADemo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform-overview" element={<PlatformOverview />} />
      <Route path="/business-consultant-services" element={<BusinessConsultantServices />} />
      <Route path="/partner-network" element={<PartnerNetwork />} />
      <Route path="/recruitment-process-outsourcing" element={<RecruitmentProcessOutsourcing />} />
      <Route path="/managed-service-provider" element={<ManagedServiceProvider />} />
      <Route path="/raas" element={<RAAS />} />
      <Route path="/saas" element={<SAAS />} />
      <Route path="/direct-sourcing" element={<DirectSourcing />} />
      <Route path="/book-a-demo" element={<BookADemo />} />
    </Routes>
  );
};

export default AppRoutes;

