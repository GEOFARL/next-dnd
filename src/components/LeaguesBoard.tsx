"use client";

import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import ArchiveDropZone from "./ArchiveDropZone";
import LeagueCard from "./LeagueCard";
import SortableItem from "./SortableItem";
import { initialLeagues } from "@/utils/data";
import { ChevronDown } from "lucide-react";

const LeaguesBoard: React.FC = () => {
  const [leagues, setLeagues] = useState(initialLeagues);
  const [archived, setArchived] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const activeLeague = leagues.find((l) => l.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveId(active.id as string)}
      onDragEnd={({ active, over }) => {
        setActiveId(null);
        if (!over) return;

        if (over.id === "archive") {
          setArchived((prev) => [...prev, active.id as string]);
          setLeagues((prev) => prev.filter((l) => l.id !== active.id));
          return;
        }

        if (active.id !== over.id) {
          const oldIndex = leagues.findIndex((l) => l.id === active.id);
          const newIndex = leagues.findIndex((l) => l.id === over.id);
          setLeagues(arrayMove(leagues, oldIndex, newIndex));
        }
      }}
    >
      <SortableContext
        items={leagues.map((l) => l.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {leagues.map((league) => (
            <SortableItem key={league.id} id={league.id}>
              <LeagueCard league={league} />
            </SortableItem>
          ))}
        </div>
      </SortableContext>

      <div>
        <h3 className="text-sm text-subdue flex items-center gap-2">
          <ChevronDown size={16} />
          Archived
        </h3>
        {activeId && <ArchiveDropZone />}
        {archived.length > 0 && (
          <div className="mt-4 space-y-2">
            {archived.map((id) => {
              const league = initialLeagues.find((l) => l.id === id);
              if (!league) return null;
              return <LeagueCard key={league.id} league={league} />;
            })}
          </div>
        )}
      </div>

      <DragOverlay>
        {activeLeague ? <LeagueCard league={activeLeague} dragging /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default LeaguesBoard;
