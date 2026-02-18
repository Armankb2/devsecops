import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Company } from '@/lib/data';
import { X, Plus } from 'lucide-react';
import QuestionCard from './QuestionCard';

interface CompanyDetailsModalProps {
  company: Company | null;
  isOpen: boolean;
  onClose: () => void;
  onAddQuestion?: () => void;
}

/**
 * CompanyDetailsModal Component - Modern Minimalist Design
 * Features: Company details, questions list, add question button
 * Design: Dialog with clean layout and smooth animations
 */
export default function CompanyDetailsModal({
  company,
  isOpen,
  onClose,
  onAddQuestion,
}: CompanyDetailsModalProps) {
  if (!company) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs text-center">
                  {company.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">{company.name}</h2>
                <p className="text-sm text-muted-foreground">{company.description}</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Company Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Total Questions</p>
              <p className="text-2xl font-display font-bold text-primary">{company.questionsCount}</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Added by</p>
              <p className="text-sm font-medium text-foreground">{company.addedBy}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Questions Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display font-bold text-foreground">
                Placement Questions ({company.questions.length})
              </h3>
              <Button
                onClick={onAddQuestion}
                size="sm"
                className="bg-primary hover:opacity-90 text-white"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Question
              </Button>
            </div>

            {company.questions.length > 0 ? (
              <div className="space-y-3">
                {company.questions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-secondary/30 rounded-lg">
                <p className="text-muted-foreground mb-3">No questions added yet</p>
                <Button
                  onClick={onAddQuestion}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Be the first to add
                </Button>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Footer */}
          <div className="flex gap-3">
            <Button onClick={onClose} variant="outline" className="flex-1">
              Close
            </Button>
            <Button className="flex-1 bg-primary hover:opacity-90 text-white">
              Save for Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
