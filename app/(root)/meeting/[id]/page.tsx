"use client";

import { Call, StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";
import { useGetParticipants } from "@/hooks/useGetParticipants";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  const [participants, participantsRef] = useGetParticipants(call!);

  useEffect(() => {
    if (!call) return;

    const handleCallEnd = () => {
      router.push("/");
    }

    console.log(participantsRef);
    console.log(participants);
    call.on("call.ended", handleCallEnd);
    
    return () => {
      call.off("call.ended", handleCallEnd);
    }
  }, [call, router]);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
