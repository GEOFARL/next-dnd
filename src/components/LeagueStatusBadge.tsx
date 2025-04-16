import { LeagueStatus } from "@/types/league";
import clsx from "clsx";

type Props = {
  status: LeagueStatus;
  label?: string;
};

const LeagueStatusBadge: React.FC<Props> = ({ status, label }) => {
  return (
    <div
      className={clsx(
        "shrink-0 bg-gradient-to-t leading-[18px]",
        "text-xs px-3 py-0.5 rounded-[3px] font-normal",
        "transition-colors duration-300",
        {
          "text-orange from-orange/10 to-transparent shadow-orange":
            status === "pre-draft",
          "text-grey from-grey/10 to-transparent shadow-grey":
            status === "post-draft",
          "text-neon from-neon/10 to-transparent shadow-neon":
            status === "draft",
        }
      )}
    >
      {label ?? status}
    </div>
  );
};

export default LeagueStatusBadge;
