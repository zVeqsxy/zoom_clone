"use client"

import { createRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Chip } from "@nextui-org/chip";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils";

import { HiddenUsersDialogProps, SelectedUserListProps, User, UserListProps } from "@/types";

const users: User[] = [
  {
    userId: "1",
    name: "Mohamad",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
    email: "test@gmail.com"
  },
  {
    userId: "2",
    name: "ali1",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
    email: "test@gmail.com"
  },
  {
    userId: "3",
    name: "ali2",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
    email: "test@gmail.com"
  },
  {
    userId: "4",
    name: "ali3",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
    email: "test@gmail.com"
  },
  {
    userId: "5",
    name: "ali4",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
  },
  {
    userId: "6",
    name: "Jane",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
  },
  {
    userId: "7",
    name: "John",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
  },
  {
    userId: "8",
    name: "zafar",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
  },
  {
    userId: "9",
    name: "Jane Doe",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
  },
  {
    userId: "10",
    name: "John Doe",
    image: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZ1Z5NFJHY25DQ0RDTEZVc01jZEU4RFN3R2IiLCJyaWQiOiJ1c2VyXzJnV3NDWVR0bWtMVldPeUMwSUNhT0ZXODV6RCIsImluaXRpYWxzIjoiTUsifQ",
  },
]

function SelectedUserList({ selectedUsers, onRemoveUser }: SelectedUserListProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [chipRefs, setChipRefs] = useState<Array<React.RefObject<HTMLDivElement>>>([]);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const refs = selectedUsers.map(() => createRef<HTMLDivElement>());
    setChipRefs(refs);
  }, [selectedUsers])

  useEffect(() => {
    if (!divRef.current) return;

    const divWidth = divRef.current.offsetWidth;
    const chipsWidth = chipRefs.reduce((total, chipRef) => {
      return total + ((chipRef.current?.offsetWidth || 0) + 16);
    }, 0);

    setOverflowing(chipsWidth >= divWidth);
  }, [chipRefs])
  
  return (
    <div ref={divRef} className={cn("flex flex-wrap p-2 border border-dark-3 bg-dark-3 rounded items-center w-full mr-2", {
      "h-[50px] overflow-hidden": !overflowing,
      "h-auto": overflowing,
    })}>
      {selectedUsers && selectedUsers.map((user, index) => (
        <div key={user.userId} className="mr-2 mb-2">
          <Chip 
            ref={chipRefs[index]}
            key={user.userId}
            startContent={<Image src={user.image} alt="avatar" width={25} height={25} className="rounded-full" />}
            onClose={() => onRemoveUser(user)}
            className="bg-gray-500 p-1 text-white"
          >
            {user.name}
          </Chip>
        </div>
      ))}
    </div>
  )
}

function UserList({ setOpen, selectedUsers, setSelectedUser }: UserListProps) {
  const availableUsers = users.filter(user => !selectedUsers.find(u => u.userId === user.userId));

  return (
    <Command>
      <CommandInput placeholder="Search a User..." className="text-white" />

      <CommandList className="command-list">
        <CommandEmpty><span className="text-white">No User found.</span></CommandEmpty>

        <CommandGroup>
          {availableUsers.map((user) => (
            <CommandItem
              key={user.userId}
              value={user.name}
              onSelect={() => {
                setSelectedUser(
                  users.find((priority) => priority.userId === user.userId)! || null
                );
                setOpen(false);
              }}
              className="hover:bg-dark-1 cursor-pointer" 
            >
              <Image 
                src={user.image}
                alt={user.name}
                width={32}
                height={32}
                className="rounded-full"
              />

              <div className="flex flex-col ml-2">
                <span className="font-semibold text-white">{user.name}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

interface AddUsersProps {
  onSelectedUsers: (users: User[]) => void;
}

const AddUsers = ({ onSelectedUsers }: AddUsersProps) => {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, [window.innerWidth]);

  const handleSelectUser = (user: User) => {
    setSelectedUsers((prev) => [...prev, user]);
  }

  const handleRemoveUser = (user: User) => {
    setSelectedUsers((prev) => prev.filter((u) => u.userId !== user.userId));
  }

  useEffect(() => {
    onSelectedUsers(selectedUsers);
  }, [selectedUsers]);

  if (isDesktop) {
    return (
      <div className="flex">
        <SelectedUserList selectedUsers={selectedUsers} onRemoveUser={handleRemoveUser} />

        <Popover open={open} onOpenChange={setOpen} >
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start bg-blue-1 text-white border-none h-[50px] px-4" onClick={() => setOpen(true)}>
              Add
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0 bg-dark-3 border-gray-500" side="right" align="start">
            <UserList setOpen={setOpen} setSelectedUser={handleSelectUser} selectedUsers={selectedUsers} />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
  
  return (
    <div className="flex">
      <SelectedUserList selectedUsers={selectedUsers} onRemoveUser={handleRemoveUser} />
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="justify-start bg-blue-1 text-white border-none" onClick={() => setOpen(true)}>
            Add
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <div className="mt-4 border-t">
            <UserList setOpen={setOpen} setSelectedUser={handleSelectUser} selectedUsers={selectedUsers} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default AddUsers