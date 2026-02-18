import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { mockYears } from '@/lib/data';
import { useState } from 'react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  selectedYear?: number;
  onYearSelect?: (year: number) => void;
  onAddCompany?: () => void;
}

/**
 * Sidebar Component - Modern Minimalist Design
 * Features: Year selection, company count, add company button
 * Design: Clean layout with hover effects and smooth transitions
 */
export default function Sidebar({
  isOpen = true,
  onClose,
  selectedYear,
  onYearSelect,
  onAddCompany,
}: SidebarProps) {
  const [expandedYear, setExpandedYear] = useState<number | null>(selectedYear ?? null);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen md:h-[calc(100vh-5rem)] w-64 bg-white border-r border-border transition-transform duration-300 z-40 md:z-auto overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button (Mobile) */}
          <div className="flex md:hidden items-center justify-between">
            <h2 className="font-display font-bold text-lg text-foreground">Graduation Years</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-smooth"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Years List */}
          <div className="space-y-2">
            {mockYears.map((yearData) => (
              <div key={yearData.id}>
                <button
                  onClick={() => {
                    onYearSelect?.(yearData.year);
                    setExpandedYear(expandedYear === yearData.year ? null : yearData.year);
                    onClose?.();
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-smooth ${
                    selectedYear === yearData.year
                      ? 'bg-primary text-white shadow-small'
                      : 'hover:bg-secondary text-foreground'
                  }`}
                >
                  <div className="text-left">
                    <p className="font-medium">Class of {yearData.year}</p>
                    <p className="text-xs opacity-75">{yearData.companies.length} companies</p>
                  </div>
                  <span
                    className={`text-lg font-display font-bold ${
                      selectedYear === yearData.year ? 'text-white' : 'text-accent'
                    }`}
                  >
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Add Company Button */}
          <Button
            onClick={() => {
              onAddCompany?.();
              onClose?.();
            }}
            className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium transition-smooth"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Company
          </Button>

          {/* Info Box */}
          <div className="bg-secondary/50 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-foreground">Tip</p>
            <p className="text-xs text-muted-foreground">
              Seniors can add companies and share placement questions to help juniors prepare.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
