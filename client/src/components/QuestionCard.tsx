import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlacementQuestion } from '@/lib/data';
import { Eye, ThumbsUp } from 'lucide-react';

interface QuestionCardProps {
  question: PlacementQuestion;
  onSelect?: (question: PlacementQuestion) => void;
}

const difficultyColors = {
  easy: 'bg-green-100 text-green-800 border-green-300',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  hard: 'bg-red-100 text-red-800 border-red-300',
};

/**
 * QuestionCard Component - Modern Minimalist Design
 * Features: Question display, difficulty badge, stats
 * Design: Clean layout with difficulty-based color coding
 */
export default function QuestionCard({ question, onSelect }: QuestionCardProps) {
  return (
    <Card
      onClick={() => onSelect?.(question)}
      className="p-4 cursor-pointer card-hover bg-white border-border group"
    >
      <div className="space-y-3">
        {/* Question Text */}
        <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {question.question}
        </h4>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className={`text-xs font-medium ${difficultyColors[question.difficulty]} border`}
          >
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {question.category}
          </Badge>
        </div>

        {/* Footer Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{question.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" />
              <span>{question.likes}</span>
            </div>
          </div>
          <span className="text-xs">by {question.addedBy}</span>
        </div>
      </div>
    </Card>
  );
}
