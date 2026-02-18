import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar, BookOpen, Edit2, X } from 'lucide-react';
import { currentUser } from '@/lib/data';

interface ProfileSectionProps {
  onClose?: () => void;
  onEdit?: () => void;
}

/**
 * ProfileSection Component - Modern Minimalist Design
 * Features: User profile display, stats, edit functionality
 * Design: Clean card layout with avatar and information display
 */
export default function ProfileSection({ onClose, onEdit }: ProfileSectionProps) {
  const initials = currentUser.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold text-foreground">Profile</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-secondary rounded-lg transition-smooth"
          aria-label="Close profile"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Profile Card */}
      <Card className="p-8 bg-white border-border">
        <div className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Avatar className="w-24 h-24 border-4 border-accent">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback className="bg-primary text-white font-display font-bold text-lg">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">{currentUser.name}</h3>
                <p className="text-muted-foreground">{currentUser.email}</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge className="bg-primary text-white capitalize">
                  {currentUser.role === 'senior' ? '✓ Verified Senior' : 'Junior'}
                </Badge>
                <Badge variant="secondary">Class of {currentUser.year}</Badge>
              </div>

              <Button onClick={onEdit} className="bg-primary hover:opacity-90 text-white">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Bio Section */}
          {currentUser.bio && (
            <div className="space-y-2">
              <h4 className="font-medium text-foreground flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                Bio
              </h4>
              <p className="text-muted-foreground">{currentUser.bio}</p>
            </div>
          )}

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail className="w-4 h-4 text-accent" />
                Email
              </div>
              <p className="text-sm text-muted-foreground break-all">{currentUser.email}</p>
            </div>

            {/* Joined Date */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="w-4 h-4 text-accent" />
                Joined
              </div>
              <p className="text-sm text-muted-foreground">
                {new Date(currentUser.joinedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* Role */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="w-4 h-4 text-accent" />
                Role
              </div>
              <p className="text-sm text-muted-foreground capitalize">
                {currentUser.role === 'senior' ? 'Senior (Verified)' : 'Junior'}
              </p>
            </div>

            {/* Year */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="w-4 h-4 text-accent" />
                Graduation Year
              </div>
              <p className="text-sm text-muted-foreground">{currentUser.year}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
              <p className="text-2xl font-display font-bold text-primary">24</p>
              <p className="text-xs text-muted-foreground mt-1">Questions Viewed</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
              <p className="text-2xl font-display font-bold text-accent">8</p>
              <p className="text-xs text-muted-foreground mt-1">Bookmarked</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
              <p className="text-2xl font-display font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground mt-1">Connections</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
