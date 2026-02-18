import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CompanyCard from '@/components/CompanyCard';
import CompanyDetailsModal from '@/components/CompanyDetailsModal';
import AddCompanyModal from '@/components/AddCompanyModal';
import ProfileSection from '@/components/ProfileSection';
import { mockYears, Company } from '@/lib/data';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * Home Page - Modern Minimalist Design
 * Features: Year selection, company listings, company details, profile
 * Design: Clean layout with hero banner, card grid, modals
 */
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [companies, setCompanies] = useState(
    mockYears.find((y) => y.year === selectedYear)?.companies || []
  );

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    const yearData = mockYears.find((y) => y.year === year);
    setCompanies(yearData?.companies || []);
  };

  const handleViewCompany = (company: Company) => {
    setSelectedCompany(company);
    setShowCompanyDetails(true);
  };

  const handleAddCompany = (newCompany: any) => {
    setCompanies([...companies, newCompany]);
  };

  const handleProfileClick = (section: string) => {
    if (section === 'profile') {
      setShowProfile(true);
    }
  };

  if (showProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} onProfileClick={handleProfileClick} />
        <div className="container py-8">
          <ProfileSection onClose={() => setShowProfile(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} onProfileClick={handleProfileClick} />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedYear={selectedYear}
          onYearSelect={handleYearSelect}
          onAddCompany={() => setShowAddCompany(true)}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-5rem)]">
          {/* Hero Banner */}
          <section
            className="relative bg-white border-b border-border overflow-hidden"
            style={{
              backgroundImage:
                'url(https://private-us-east-1.manuscdn.com/sessionFile/afU9zsph22CVOCmptUChQ1/sandbox/XFXwA8nc9sdfML9isOKRdS-img-1_1771133607000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYWZVOXpzcGgyMkNWT0NtcHRVQ2hRMS9zYW5kYm94L1hGWHdBOG5jOXNkZk1MOWlzT0tSZFMtaW1nLTFfMTc3MTEzMzYwNzAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N4150J4nOCtuSzfJl0VQq3FwmsgkQgdVIBaAdhAWVSTu28es96ALkQGEM3VNWGYc0rVShEiw7pCA1q6vi-~sOmFq~Mjmkd8~kOkQOOKg9o5cyVmBEUUn1aAR8U6q5MsJ9H~WpWVqxNTgKbQuNu8zBwUoQZUUOYw93iHQQXFTf88FURgtNJxZHxgb0FtGxFn~CA4a~N7~tPlbj4B1NMi5wVE8OZWw9rjoO-gAq0sGACGpKBifSAvZvhNAeNjG-2veosTl97OroWP3wIk~slEb3WFtxzR7w4VVuAMIEWnOUEgtOzETjFv8XfY1loBF9MDwGPK5LXc3MoAGvJJO1bl02Q__)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
            <div className="relative container py-12 md:py-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Class of {selectedYear}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Ace Your Placements
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Learn from seniors who've already cracked interviews at top companies. Access placement questions,
                  tips, and guidance from verified seniors.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-primary hover:opacity-90 text-white">
                    Explore Companies <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Companies Section */}
          <section className="container py-12 md:py-16">
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                Companies Hiring in {selectedYear}
              </h2>
              <p className="text-muted-foreground">
                {companies.length} companies with placement questions from verified seniors
              </p>
            </div>

            {companies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    onViewQuestions={handleViewCompany}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-secondary/30 rounded-lg border border-border">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/afU9zsph22CVOCmptUChQ1/sandbox/XFXwA8nc9sdfML9isOKRdS-img-3_1771133606000_na1fn_ZW1wdHktc3RhdGUtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYWZVOXpzcGgyMkNWT0NtcHRVQ2hRMS9zYW5kYm94L1hGWHdBOG5jOXNkZk1MOWlzT0tSZFMtaW1nLTNfMTc3MTEzMzYwNjAwMF9uYTFmbl9aVzF3ZEhrdGMzUmhkR1V0YVd4c2RYTjBjbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KVDoSsvkmIByZujJMu~UE7mDGmrMe-gmgUDa48rfGLMJ2QGZPBKFiIwx96nj2F6aMgtXjl-4Wknpp4AUGjnmg4wCvJOQ2W5ujGvicNqDVeuCMFGioANbPetj2rYo5OkXBl7XD52f4MNnmdKPTlDTiTziG4dQPtGPK53EAGWv3pm9pr~XC20tun8USTOiEZ1hWZpztXN3lcj88wdrx~u4r-mL4mwa2Z3D~PrC6pbfUnTfe0FBT~3W9C1SueH7ACW~a6Q-MRv9BhTO-OESPI-xEO1gx58FNIaAxMc2wQ4a257sdhiixbAAQpXQULuNPU4kcNP7UKWi-yv0KCFmGe1skA__"
                  alt="Empty state"
                  className="w-32 h-32 mx-auto mb-4 opacity-50"
                />
                <h3 className="text-xl font-display font-bold text-foreground mb-2">No Companies Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to add a company for this year!
                </p>
                <Button
                  onClick={() => setShowAddCompany(true)}
                  className="bg-primary hover:opacity-90 text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Add First Company
                </Button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-primary text-white py-12 md:py-16">
            <div className="container text-center space-y-4">
              <h2 className="text-3xl font-display font-bold">Ready to Help Juniors?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                If you're a senior who has already cracked interviews, share your knowledge and help juniors
                succeed.
              </p>
              <Button
                onClick={() => setShowAddCompany(true)}
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Add Your Company
              </Button>
            </div>
          </section>
        </main>
      </div>

      {/* Modals */}
      <CompanyDetailsModal
        company={selectedCompany}
        isOpen={showCompanyDetails}
        onClose={() => setShowCompanyDetails(false)}
      />

      <AddCompanyModal
        isOpen={showAddCompany}
        onClose={() => setShowAddCompany(false)}
        onAdd={handleAddCompany}
      />
    </div>
  );
}
