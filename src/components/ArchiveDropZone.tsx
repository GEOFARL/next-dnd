import { useDroppable } from "@dnd-kit/core";
import clsx from "clsx";

const ArchiveDropZone: React.FC = () => {
  const { setNodeRef, isOver } = useDroppable({
    id: "archive",
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "min-h-[100px] flex items-center justify-center mt-5 border-[0.5px] border-dashed border-white/15 rounded p-4 text-center transition-colors",
        isOver
          ? "border-green-400 bg-green-900/10 text-green-300"
          : "border-gray-500 text-gray-500"
      )}
    >
      <p className="text-subdue font-normal">Drop league here to archive</p>
    </div>
  );
};

export default ArchiveDropZone;
