export interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className: string;
  handleClick: () => void;
}

export interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
}

export interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

export interface HiddenUsersDialogProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
}

// 

export type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

export type User = {
  userId: string;
  name: string;
  image: string;
  email?: string;
}

export type UserListProps = {
  setOpen: (open: boolean) => void;
  setSelectedUser: (user: User) => void;
  selectedUsers: User[];
}

export type SelectedUserListProps = {
  selectedUsers: User[];
  onRemoveUser: (user: User) => void;
}

