'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MemberInfoResponse } from '@/services';
import { EditProfileDialog } from './edit-profile-dialog';
import { Card } from '@/components/ui/card';

export function ProfileHeader({
  member,
}: {
  member: MemberInfoResponse;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={member.profileImage} />
          <AvatarFallback>{member.nickname.slice(0, 1).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl font-bold truncate">{member.nickname}</h1>
            <EditProfileDialog member={member} />
          </div>
          <p className="text-sm text-muted-foreground">{member.email}</p>
        </div>
      </div>
    </Card>
  );
}
