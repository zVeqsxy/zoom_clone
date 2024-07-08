import { Call } from "@stream-io/video-react-sdk";
import { useEffect, useRef, useState } from "react";

export const useGetParticipants = (call: Call) => {
  const [participants, setParticipants] = useState<any>([]);
  const participantsRef = useRef(participants);

  useEffect(() => {
    participantsRef.current = participants;
  }, [participants]);

  useEffect(() => {
    if (!call) return;

    const handleParticipantJoined = (event: any) => {
      const participant = event.participant;
      setParticipants((prev: any) => [...prev, participant]);
    };

    call.on("participantJoined", handleParticipantJoined);

    return () => {
      call.off("participantJoined", handleParticipantJoined);
    };
  }, [call]);

  return [participants, participantsRef];
}