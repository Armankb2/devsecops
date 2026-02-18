import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Company } from '@/lib/data';
import { BookOpen, Users, Calendar, ArrowRight } from 'lucide-react';;

interface CompanyCardProps {
  company: Company;
  onViewQuestions?: (company: Company) => void;
}

/**
 * CompanyCard Component - Modern Minimalist Design
 * Features: Company info, question count, view button
 * Design: Gradient borders, hover lift effect, smooth transitions
 */
export default function CompanyCard({ company, onViewQuestions }: CompanyCardProps) {
  return (
    <Card className="group card-hover bg-white border-border overflow-hidden">
      {/* Card Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl" />
      </div>

      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-smooth">
              {company.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{company.description}</p>
          </div>

          {/* Company Logo Placeholder */}
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 ml-4">
            <span className="text-white font-display font-bold text-xs text-center">
              {company.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-accent mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="font-display font-bold text-lg text-primary">{company.questionsCount}</span>
            </div>
            <p className="text-xs text-muted-foreground">Questions</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-accent mb-1">
              <Users className="w-4 h-4" />
              <span className="font-display font-bold text-lg text-primary">
                {Math.floor(Math.random() * 50) + 10}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Seniors</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-accent mb-1">
              <Calendar className="w-4 h-4" />
              <span className="font-display font-bold text-lg text-primary">
                {new Date(company.addedDate).getFullYear()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Year</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              Added by {company.addedBy}
            </Badge>
          </div>

          <Button
            onClick={() => onViewQuestions?.(company)}
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/10 transition-smooth"
          >
            View <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
