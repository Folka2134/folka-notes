import React from "react";
import { RawNote, Tag } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface NotesAndTagsContextType {
  notes: RawNote[];
  setNotes: React.Dispatch<React.SetStateAction<RawNote[]>>;
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export const NotesAndTagsContext = React.createContext<
  NotesAndTagsContextType | undefined
>(undefined);

interface MyComponentProps {
  children: React.ReactNode;
}

export const NotesAndTagsProvider: React.FC<MyComponentProps> = ({
  children,
}) => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  return (
    <NotesAndTagsContext.Provider value={{ notes, setNotes, tags, setTags }}>
      {children}
    </NotesAndTagsContext.Provider>
  );
};
