import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner';

interface AddCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (company: any) => void;
}

/**
 * AddCompanyModal Component - Modern Minimalist Design
 * Features: Form for adding new companies
 * Design: Clean form layout with validation
 */
export default function AddCompanyModal({ isOpen, onClose, onAdd }: AddCompanyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    year: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.year) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newCompany = {
        id: `c${Date.now()}`,
        name: formData.name,
        description: formData.description,
        year: parseInt(formData.year),
        questionsCount: 0,
        questions: [],
        addedBy: 'You',
        addedDate: new Date().toISOString().split('T')[0],
      };

      onAdd?.(newCompany);
      toast.success(`${formData.name} added successfully!`);

      setFormData({ name: '', description: '', year: '' });
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">Add New Company</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="company-name" className="text-sm font-medium text-foreground">
              Company Name
            </Label>
            <Input
              id="company-name"
              placeholder="e.g., Google, Microsoft, Amazon"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border focus:ring-primary"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="company-description" className="text-sm font-medium text-foreground">
              Description
            </Label>
            <Textarea
              id="company-description"
              placeholder="Brief description of the company..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border-border focus:ring-primary min-h-24 resize-none"
            />
          </div>

          {/* Graduation Year */}
          <div className="space-y-2">
            <Label htmlFor="graduation-year" className="text-sm font-medium text-foreground">
              Graduation Year
            </Label>
            <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
              <SelectTrigger id="graduation-year" className="border-border focus:ring-primary">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-secondary/50 border border-border rounded-lg">
            <p className="text-xs text-muted-foreground">
              After adding the company, you can start adding placement questions that will help juniors prepare for interviews.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button onClick={onClose} variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:opacity-90 text-white"
            >
              {isSubmitting ? 'Adding...' : 'Add Company'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
