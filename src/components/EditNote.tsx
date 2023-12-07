import { NoteData, Tag } from "../types";
import NoteForm from "./NoteForm";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote();

  return (
    <>
      <h1 className="mb-4 tw-text-white">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        tags={note.tags}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
