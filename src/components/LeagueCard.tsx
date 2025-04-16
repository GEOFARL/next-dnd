import clsx from "clsx";
import DottedHandleIcon from "@/assets/icons/dotted-handle.svg";
import { League, LeagueStatus } from "@/types/league";
import LeagueStatusBadge from "./LeagueStatusBadge";
import CalendarIcon from "@/assets/icons/calendar.svg";
import ESPNIcon from "@/assets/icons/espn.svg";
import Image from "next/image";

type Props = {
  league: League;
  dragging?: boolean;
};

const patternByStatus: Record<LeagueStatus, string> = {
  "draft": "/assets/patterns/draft.svg",
  "post-draft": "/assets/patterns/post-draft.svg",
  "pre-draft": "/assets/patterns/pre-draft.svg",
};

const LeagueCard: React.FC<Props> = ({ league, dragging = false }) => {
  return (
    <div className="group relative flex justify-between items-center p-8 bg-main rounded-lg shadow transition cursor-pointer">
      <div className="flex items-center gap-6">
        <Image className="w-10 h-10" src={league.image} alt="league-image" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <p className="font-normal text-content-muted leading-[24px] text-base">
              {league.name}
            </p>
            <LeagueStatusBadge
              status={league.status.value}
              label={league.status.label}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <ESPNIcon />
              <p className="font-normal text-content text-xs">{league.media}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarIcon />
              <p className="font-normal text-content text-xs">{league.year}</p>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute right-0"
        src={patternByStatus[league.status.value]}
        alt="pattern"
      />

      <div
        className={clsx(
          "flex justify-center items-center",
          "absolute right-[2px] h-[calc(100%-6px)] w-6",
          "bg-white/10 backdrop-blur-sm",
          "shrink-0",
          "rounded-tl-[2px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[2px]",
          "border-t-[0.5px] border-gray-800",
          "shadow-inner shadow-white/10",
          "transition-all duration-300 ease-in-out",
          dragging
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
        )}
      >
        <DottedHandleIcon />
      </div>
    </div>
  );
};

export default LeagueCard;
