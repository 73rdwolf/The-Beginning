import React from 'react';
import { Layout } from '../layouts/Layout';
import { Hero } from '../sections/Hero';
import { Ticker } from '../sections/Ticker';
import { ServicesIndex } from '../sections/ServicesIndex';
import { WorkflowOne } from '../sections/WorkflowOne';
import { Differentiation } from '../sections/Differentiation';
import { SocialProof } from '../sections/SocialProof';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { BottomCTA } from '../sections/BottomCTA';
import { Integrations } from '../sections/Integrations';
import { WorkflowTwo } from '../sections/WorkflowTwo';
import { HowItWorks } from '../sections/HowItWorks';
import { BeforeAfterGrid } from '../sections/BeforeAfterGrid';

export const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Ticker />
      <ServicesIndex />
      <WorkflowOne />
      <Integrations />
      <WorkflowTwo />
      <Differentiation />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <BottomCTA />
      <BeforeAfterGrid />
    </Layout>
  );
};
